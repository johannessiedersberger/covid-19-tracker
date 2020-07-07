import 'numeral';
import React, {Component} from 'react';
import mapStyle from '../styles/map-style';
import {withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const MyMapComponent = withScriptjs(withGoogleMap((props) => {
    return(
        <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
      </GoogleMap>
    );
 
}));

class Map extends Component{
    constructor(props){
        super(props);
  
        this.state = {
            map: null,
            infoWindow: null
        }
        this.initMap();
       
    }

    

    initMap() {
        // var map = new google.maps.Map(document.getElementById('map'), {
        //     center: {lat: 39.8283, lng: -98.5795},
        //     zoom: 3,
        //     styles: mapStyle
        // });
        // var infoWindow = new google.maps.InfoWindow();
    }
    
    render(){
        return(
            <div class="row map-container mt-3">
                <div class="col" >
                    <div class="col">
                        <MyMapComponent isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDJ7VvobsIYLr3Pe6cTNUnIUvzgpV2Na-o&callback=initMap"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                         />
                    </div> 
                </div>
            </div>
        );
    }
}

export default Map;