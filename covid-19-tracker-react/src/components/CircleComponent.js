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
                onClick={() => this.handleToggleOpen()}
            >
    
            
    
    
            </Circle>
            {
                this.state.isOpen &&
                <InfoWindow position={this.props.countryCenter}   onCloseClick={() => this.setState({isOpen: false})}>
                <span>balblabla</span>
                </InfoWindow>
            }
             
             </div>
             
        );
    }
}

export default CircleComponent;