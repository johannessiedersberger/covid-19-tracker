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
import ListTable from './ListTableComponent';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            worldData: null,
            countryData: null,
            historicalData: null
        }
        this.mapComponent = React.createRef();

    }

    componentDidMount() {
        
       this.loadWorldData();
       this.loadCountryData();
       this.loadHistoricalData();
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

    loadHistoricalData(){
        fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
            .then((response)=>{
                return response.json()
            }).then((data)=>{
                this.setState({historicalData: data, isLoading: false});
            });
    }

    caseTypeChanged(caseType){
        console.log(caseType);
        this.mapComponent.current.changeSelectedCaseType(caseType);
    }

    render(){
 
    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }

        return (
            <div className="container-fluid main">
                <div className="row">
                    <div className="col-8">
                        <Header countryData={this.state.countryData} />
                        <Tab worldData={this.state.worldData} caseTypeChanged={(caseType) => this.caseTypeChanged(caseType)}/>
                        <Map countryData={this.state.countryData} ref={this.mapComponent}/>
                        <Stats historicalData={this.state.historicalData} worldData={this.state.worldData}/>       
                    </div>
                    <ListTable countryData={this.state.countryData}/>
                </div>
            </div>
        );
    }
}

export default Main;