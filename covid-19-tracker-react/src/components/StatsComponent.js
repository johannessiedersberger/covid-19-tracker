import React, { Component } from 'react';
import Chart from 'chart.js';
import numeral from 'numeral';
import '../styles/new-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Stats extends Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
        
        
    }




    componentDidMount(){
        var chartdata = buildChartData(this.props.historicalData);
        buildChart(chartdata, this.myRef.current, 'cases');
        //buildPieChart(this.props.worldData,this.pieChartRef.current );
    }

    changeSelectedCaseType(caseType){
        var chartdata = buildChartData(this.props.historicalData);
        buildChart(chartdata, this.myRef.current, caseType);
    }

    render(){
        return(
            <div className="row chart-container mt-3">
                <div className="col linear-chart">
                    <canvas id="myChart" ref={this.myRef}></canvas>
                </div>
                
            </div>
        );
    }
}

var colors = {
    allCases: '#1d2c4d',
    activeCases : '#FF0000',
    recoveredCases: '#25b840',
    deathsCases: '#020d1f'
}

const buildChartData = (data) => {
    let chartData ={
        allCases: [],
        deaths: [],
        recovered: [],
        active: []
    }
    for(let date in data.cases){
        let newDataPoint = {
            x: date,
            y: data.cases[date]
        }
        chartData.allCases.push(newDataPoint);
    }
    for(let date in data.deaths){
        let newDataPoint = {
            x: date,
            y: data.deaths[date]
        }
        chartData.deaths.push(newDataPoint);
    }
    for(let date in data.recovered){
        let newDataPoint = {
            x: date,
            y: data.recovered[date]
        }
        chartData.recovered.push(newDataPoint);
    }
    for(let date in data.cases){
        let newDataPoint = {
            x: date,
            y: data.cases[date] - data.recovered[date] - data.deaths[date]
        }
        chartData.active.push(newDataPoint);
    }
    console.log(chartData);
    return chartData;
}

var chart = null;

const buildChart = (chartData, chartRef, caseType) => {
    console.log("All if good");
    var timeFormat = 'MM/DD/YY';
    console.log(chartRef);
    
    var ctx = chartRef.getContext('2d');
    
    var data = {
        cases: {
            label: 'Total Cases',
            backgroundColor: colors.allCases,
            borderColor: colors.allCases,
            data: chartData.allCases
        },
        recovered: {
            label: 'Recovered Cases',
            backgroundColor: colors.recoveredCases,
            borderColor: colors.recoveredCases,
            data: chartData.recovered
        }, 
        deaths: {
            label: 'Death Cases',
            backgroundColor: colors.deathsCases,
            borderColor: colors.deathsCases,
            data: chartData.deaths
        },
        active: {
            label: 'Active Cases',
            backgroundColor: colors.activeCases,
            borderColor: colors.activeCases,
            data: chartData.active
        },
    }

    if(chart !== null)
        chart.destroy();
        
    chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            datasets: [
                data[caseType],
            ]
        },

        // Configuration options go here
        options: {
            maintainAspectRatio: false,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            scales:     {
                xAxes: [{
                    type: "time",
                    time: {
                        format: timeFormat,
                        tooltipFormat: 'll'
                    }
                }],
                yAxes: [{
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function(value, index, values) {
                            return numeral(value).format('0,0');
                        }
                    },            
                }]
            }
        }
    });
}

const buildPieChart = (chartData, pieChartRef) => {
    var timeFormat = 'MM/DD/YY';
    var ctx = pieChartRef.getContext('2d');
    var caseNumbers= [chartData.cases, chartData.active, chartData.recovered, chartData.deaths];
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            datasets: [{
                data: [caseNumbers[1], caseNumbers[2], caseNumbers[3]],
                backgroundColor: [
                    colors.activeCases,
                    colors.recoveredCases,
                    colors.deathsCases,
                ]
            }],
            labels: [
                'Active',
                'Recovered',
                'Death'
            ]
        },
        options: {
            maintainAspectRatio: false,
            tooltips: {
                mode: 'index',
                intersect: false
            },
        },
       
    });
}

export default Stats;