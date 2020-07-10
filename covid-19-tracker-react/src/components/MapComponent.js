import 'numeral';
import React, {Component, useState, useEffect} from 'react';
import mapStyle from '../styles/map-style';
import '../styles/new-style.css';
import '../styles/style.css';
import {withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { render } from '@testing-library/react';
import { isMethodDeclaration } from 'typescript';


class Map extends Component{
    constructor(props){
        super(props);

        this.state = {
            map: null,
            infoWindow: null,
      
        }

    }

    componentDidMount(){
        this.renderMap();
        window.initMap = this.initMap;
    }

    renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDJ7VvobsIYLr3Pe6cTNUnIUvzgpV2Na-o&callback=initMap")
    }

    initMap = () => {
        var map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8,
            styles: mapStyle
        });
        var infoWindow = new window.google.maps.InfoWindow();
        this.setState((state) => {
            return { map: map, infoWindow: infoWindow };
        })
    }

    showDataOnMap = (data) => {
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
                map: this.state.map,
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
                infoWindow.open(this.state.map);
            });
    
            window.google.maps.event.addListener(countryCircle, 'mouseout', function(){
                infoWindow.close();
            });
    
        })
    }
     
    render(){
        return(
            <div class="row map-container mt-3">
                <div class="col" >
                    <div class="col">
                        <div id="map" style={{height:500}}></div>
                    </div> 
                </div>
            </div>
        );
    }
}

function loadScript(url) {
    var index  = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
  }

export default Map;