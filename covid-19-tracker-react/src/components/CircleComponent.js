import { Circle, InfoWindow } from "@react-google-maps/api";
import React, {Component} from 'react';

class CircleComponent extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            isOpen: false,
            minCircleSize: 0,
            maxCircleSize: 3000000
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
                radius={Math.min(Math.max(this.props.values.cases, this.state.minCircleSize), this.state.maxCircleSize)}
                onMouseOver={() => this.handleToggleOpen()}
                onMouseOut={() => this.handleToggleClose()}
            >
    
            </Circle>
            {
                this.state.isOpen &&
                <InfoWindow position={this.props.countryCenter}   onCloseClick={() => this.setState({isOpen: false})}>
                        <div className="info-container">
                            <div className="info-flag" style={{backgroundImage:  "url(" + this.props.country.countryInfo.flag + ")"}}>
                            </div>
                            <div className="info-name">
                                {this.props.country.country}
                            </div>
                            <div className="info-confirmed">
                                Total: {this.props.country.cases}
                            </div>
                            <div className="info-recovered">
                                Recovered: {this.props.country.recovered}
                            </div>
                            <div className="info-deaths">
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