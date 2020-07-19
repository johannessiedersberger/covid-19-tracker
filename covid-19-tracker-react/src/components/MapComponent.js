import 'numeral';
import React, {Component, useState, useEffect} from 'react';
import mapStyle from '../styles/map-style';
import '../styles/new-style.css';
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
                map: null,
                center: {lat: 39.8283, lng: -98.5795}
            }
        }
        this.circles = []
        this.googleMap = React.createRef();
    }

    changeSelectedCaseType(caseType){
        this.setState({mapstate: { data: this.props.countryData, caseType: caseType }});
    }     

    setMapCenter(lat, long){
        console.log(lat, long);
        this.setState({mapstate : { center: {lat: lat, lng: long}, caseType: this.state.mapstate.caseType}});
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
                                    height: '70vh',
                                    boxShadow: '0 0 15px -4px rgba(0,0,0, 0.5)',
                                    borderRadius: '12px'
                                    }}
                                center={this.state.mapstate.center}
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
                                    });
                                    
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
                                        <CircleComponent key={country.country} countryCenter={countryCenter} values={values} country={country}/>
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