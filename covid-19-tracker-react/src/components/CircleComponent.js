import { Circle, InfoWindow } from "@react-google-maps/api";
import React, {Component} from 'react';

class CircleComponent extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            isOpen: false
        }
    
    }
    
    handleToggleOpen = () => {
    
        this.setState({
            isOpen: true
        });
    }
    
    handleToggleClose = () => {
        this.setState({
            isOpen: false
        });
    }

    render(){
        return (
            <div>
            <Circle
                options={{
                    fillColor:this.props.values.color, 
                    strokeColor:this.props.values.color, 
                    fillOpacity: 0.35, 
                    strokeWeight:2, 
                    strokeOpacity: 0.8
                    
                }}
                
                center={this.props.countryCenter}
                radius={this.props.values.cases}


                //key={this.props.index}
                //position={{ lat: this.props.lat, lng: this.props.lng}}
                label={"blala"}
                //onClick={() => this.handleToggleOpen()}
                onMouseOver={() => this.handleToggleOpen()}
                onMouseOut={() => this.handleToggleClose()}
            >
    
            </Circle>
            {
                this.state.isOpen &&
                <InfoWindow position={this.props.countryCenter}   onCloseClick={() => this.setState({isOpen: false})}>
                        <div class="info-container">
                            <div class="info-flag" style={{backgroundImage:  "url(" + this.props.country.countryInfo.flag + ")"}}>
                            </div>
                            <div class="info-name">
                                {this.props.country.country}
                            </div>
                            <div class="info-confirmed">
                                Total: {this.props.country.cases}
                            </div>
                            <div class="info-recovered">
                                Recovered: {this.props.country.recovered}
                            </div>
                            <div class="info-deaths">
                                Deaths: {this.props.country.deaths}
                            </div>
                        </div>
                                    
                </InfoWindow>
            }
             
             </div>
             
        );
    }
}

export default CircleComponent;