import React, {Component} from 'react';

class Tab extends Component{
    constructor(props){
        super(props);
    }

    setCommas(number){
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render(){
        return(
            <div class="row stats-container">
                <div class="col">
                    <div class="card" id="total-cases-card">
                        <div class="card-body">
                            <h5 class="card-title">Total Cases</h5>
                            <h6 class="card-subtitle mb-2 text-muted" id="total-cases">{this.setCommas(this.props.worldData.cases)}</h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" id="active-cases-card">
                        <div class="card-body">
                            <h5 class="card-title">Active Cases</h5>
                            <h6 class="card-subtitle mb-2 text-muted" id="active-cases">{this.setCommas(this.props.worldData.active)}</h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" id="recovered-cases-card">
                        <div class="card-body">
                            <h5 class="card-title">Recovered</h5>
                            <h6 class="card-subtitle mb-2 text-muted " id="recovered-cases">{this.setCommas(this.props.worldData.recovered)}</h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" id="death-cases-card">
                        <div class="card-body">
                            <h5 class="card-title">Deaths</h5>
                            <h6 class="card-subtitle mb-2 text-muted " id="death-cases">{this.setCommas(this.props.worldData.deaths)}</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tab;
