import 'numeral';
import React, {Component, useState, useEffect} from 'react';
import mapStyle from '../styles/map-style';
import '../styles/new-style.css';
import '../styles/style.css';
import { GoogleMap, LoadScript, Circle, InfoWindow } from '@react-google-maps/api';
import CircleComponent from './CircleComponent';


class Map extends Component{
    constructor(props){
        super(props);
        this.state = {
            colors: {
                    cases: '#1d2c4d',
                    active : '#FF0000',
                    recovered: '#25b840',
                    deaths: '#020d1f'
            },
            mapstate: {
                data: this.props.countryData,
                caseType: 'cases', 
                map: null
            }
        }
        this.circles = []
        this.googleMap = React.createRef();
    }

    changeSelectedCaseType(caseType){
        this.cleanMap();
        console.log(caseType);
        this.setState({mapstate: { data: this.props.countryData, caseType: caseType }});
    }     

    cleanMap = () => {
        if(this.circles === null)
            return;

        this.circles.forEach((circle => {
            circle.setMap(null);
        }));
    }

    showDataOnMap = (data, map) => {
       

        console.log('data');
        data.map((country)=>{
            let countryCenter = {
                lat: country.countryInfo.lat,
                lng: country.countryInfo.long
            }
    
            var values = {
                color: this.state.colors[this.state.mapstate.caseType],
                cases: country[this.state.mapstate.caseType]
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
    
            this.circles.push(countryCircle);
    
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


    placeCircles(country){
       
            let countryCenter = {
                lat: country.countryInfo.lat,
                lng: country.countryInfo.long
            }
           
            var values = {
                color: this.state.colors[this.state.mapstate.caseType],
                cases: country[this.state.mapstate.caseType]
            }

        return (
            <CircleComponent countryCenter={countryCenter} values={values} country={country}/>
        );
    }

    render(){
        return(
            <div class="row map-container mt-3">
                <div class="col" >
                    <div class="col">
                        <LoadScript
                            googleMapsApiKey="AIzaSyB83A6z6v1LdZgGVLUk47Kpu8j4DrzgqYU"
                        >
                            <GoogleMap ref={this.googleMap}
                                mapContainerStyle={ {
                                    width: '100%',
                                    height: '400px'
                                    }}
                                center={{lat: 39.8283, lng: -98.5795}}
                                zoom={3}
                                
                                onLoad={map => {
                                    map.setOptions({styles: mapStyle});
                                    this.props.countryData.map((country)=>{
                                        let countryCenter = {
                                            lat: country.countryInfo.lat,
                                            lng: country.countryInfo.long
                                        }
                                       
                                        var values = {
                                            color: this.state.colors[this.state.mapstate.caseType],
                                            cases: country[this.state.mapstate.caseType]
                                        }
                            
                                    return (
                                        <CircleComponent countryCenter={countryCenter} values={values} country={country}/>
                                    );
                                    })
                                    
                                }}
                                
                                
                            >
                                {
                                     this.props.countryData.map((country)=>{
                                        let countryCenter = {
                                            lat: country.countryInfo.lat,
                                            lng: country.countryInfo.long
                                        }
                                       
                                        var values = {
                                            color: this.state.colors[this.state.mapstate.caseType],
                                            cases: country[this.state.mapstate.caseType]
                                        }
                            
                                    return (
                                        <CircleComponent countryCenter={countryCenter} values={values} country={country}/>
                                    );
                                     })
                                        
                                }
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