import React, { Component } from 'react';
import Header from './HeaderComponent';
import Tab from './TabComponent';
import '../styles/new-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'numeral';
import 'moment';
import 'chart.js';
import 'font-awesome/css/font-awesome.css';
import Map from './MapComponent';
import Stats from './StatsComponent';
import ListTable from './ListTableComponent';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            worldData: null,
            countryData: null,
            historicalData: null,
            historicalDataCountries: null, 
            selectedCountry: 'worldwide',
            caseType: 'cases'
        }
        this.mapComponent = React.createRef();
        this.statsComponent = React.createRef();
    }

    componentDidMount() {
        
       this.loadWorldData();
       this.loadCountryData();
       this.loadHistoricalDataWorld();
       this.loadHistoricalDataCountries();
    }

    loadWorldData(){
        fetch("https://disease.sh/v3/covid-19/all")
        .then((response) => {
            return response.json()
        }).then((data) => {
            this.setState({ worldData: data, isLoading: true });
        });
    }

    loadCountryData(){
        fetch("https://disease.sh/v3/covid-19/countries")
        .then((response)=>{
            return response.json()
        }).then((data)=>{
            this.setState({countryData: data, isLoading: true});
        });
    }

    loadHistoricalDataWorld(){
        fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
            .then((response)=>{
                return response.json();
            }).then((data)=>{
                this.setState({historicalDataWorld: data, isLoading: true});
            });
    }

    loadHistoricalDataCountries(){
        fetch("https://disease.sh/v3/covid-19/historical?lastdays=120")
            .then((response)=>{
                return response.json();
            }).then((data)=>{
                this.setState({historicalDataCountries: data, isLoading: false});
            });
    }

    caseTypeChanged(caseType){
   
        this.mapComponent.current.changeSelectedCaseType(caseType);
        this.statsComponent.current.changeSelectedCaseType(caseType, this.state.selectedCountry);
        this.setState({caseType: caseType});
    }

    selectedCountryChanged(selectedCountry){
        this.mapComponent.current.setMapCenter(selectedCountry.lat, selectedCountry.long);
        this.statsComponent.current.changeSelectedCaseType(this.state.caseType, selectedCountry.country);
        this.setState({selectedCountry: selectedCountry.country});
    }

    render(){
 
    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }

        return (
            <div className="container-fluid main">
                <div className="row">
                    <div className="col-8">
                        <Header countryData={this.state.countryData} selectedCountryChanged={(selectedCountry) => this.selectedCountryChanged(selectedCountry)}/>
                        <Tab worldData={this.state.worldData} caseTypeChanged={(caseType) => this.caseTypeChanged(caseType)}/>
                        <Map countryData={this.state.countryData} ref={this.mapComponent}/>           
                    </div>
                    <div className="col-4">
                        <ListTable countryData={this.state.countryData}/>
                        <Stats  historicalDataCountries={this.state.historicalDataCountries}
                                historicalDataWorld={this.state.historicalDataWorld}
                                worldData={this.state.worldData}
                                ref={this.statsComponent}/>  
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;