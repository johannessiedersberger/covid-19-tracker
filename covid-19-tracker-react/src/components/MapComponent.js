import 'numeral';
import React, {Component, useState, useEffect} from 'react';
import mapStyle from '../styles/map-style';
import '../styles/new-style.css';
import '../styles/style.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const showDataOnMap = (data, map) => {
    data.map((country)=>{
        let countryCenter = {
            lat: country.countryInfo.lat,
            lng: country.countryInfo.long
        }

        var values = {
            color: '#1d2c4d',
            cases: country['cases']
        }
        
        var countryCircle = new window.google.maps.Circle({
            strokeColor: values.color,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: values.color,
            fillOpacity: 0.35,
            map: map,
            center: countryCenter,
            radius: values.cases
        });

        //circles.push(countryCircle);

        var html = `
            <div class="info-container">
                <div class="info-flag" style="background-image: url(${country.countryInfo.flag});">
                </div>
                <div class="info-name">
                    ${country.country}
                </div>
                <div class="info-confirmed">
                    Total: ${country.cases}
                </div>
                <div class="info-recovered">
                    Recovered: ${country.recovered}
                </div>
                <div class="info-deaths">   
                    Deaths: ${country.deaths}
                </div>
            </div>
        `

        var infoWindow = new window.google.maps.InfoWindow({
            content: html,
            position: countryCircle.center
        });
        window.google.maps.event.addListener(countryCircle, 'mouseover', function() {
            infoWindow.open(map);
        });

        window.google.maps.event.addListener(countryCircle, 'mouseout', function(){
            infoWindow.close();
        });

    })
};

const containerStyle = {
    width: '100%',
    height: '400px'
  };
  
class Map extends Component{
    constructor(props){
        super(props);
    }
     
    render(){
        return(
            <div class="row map-container mt-3">
                <div class="col" >
                    <div class="col">
                        <LoadScript
                            googleMapsApiKey="AIzaSyB83A6z6v1LdZgGVLUk47Kpu8j4DrzgqYU"
                        >
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={{lat: 39.8283, lng: -98.5795}}
                                zoom={3}
                                
                                onLoad={map => {
                                    map.setOptions({styles: mapStyle});
                                    showDataOnMap(this.props.countryData, map);
                                }}
                                
                            >
                                { /* Child components, such as markers, info windows, etc. */}
                                <></>
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </div>
            </div>
        );
    }
}

export default Map;