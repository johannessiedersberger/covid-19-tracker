import React, { Component } from 'react';
import Header from './HeaderComponent';
import Tab from './TabComponent';
import '../styles/new-style.css';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'numeral';
import 'moment';
import 'chart.js';
import 'font-awesome/css/font-awesome.css';
import Map from './MapComponent';
import Stats from './StatsComponent';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            worldData: null,
            countryData: null,
            historicalData: null
        }

    }

    componentDidMount() {
        fetch("https://disease.sh/v3/covid-19/all")
            .then((response) => {
                return response.json()
            }).then((data) => {
                this.setState({ worldData: data, isLoading: true });
            });
        fetch("https://disease.sh/v3/covid-19/countries")
            .then((response)=>{
                return response.json()
            }).then((data)=>{
                this.setState({countryData: data, isLoading: true});
            });
        fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
            .then((response)=>{
                return response.json()
            }).then((data)=>{
                this.setState({historicalData: data, isLoading: false});
            });
    }

    render(){
 
    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }

        return (
            <div class="container-fluid main">
                <div class="row">
                    <div class="col-8">
                        <Header />
                        <Tab worldData={this.state.worldData}/>
                        <Map countryData={this.state.countryData}/>
                        <Stats historicalData={this.state.historicalData} worldData={this.state.worldData}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;