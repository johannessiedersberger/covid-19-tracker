

window.onload = () => {
    mapState = { color: colors.allCases , cases : 'cases'}
    getCountryData();
    getHistoricalData();
    getWorldData();
}

var map;
var infoWindow;

var colors = {
    allCases: '#1d2c4d',
    activeCases : '#FF0000',
    recoveredCases: '#25b840',
    deathsCases: '#020d1f'
}

var mapState = {
    color: '',
    cases: ''
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 39.8283, lng: -98.5795},
        zoom: 3,
        styles: mapStyle
    });
    infoWindow = new google.maps.InfoWindow();
}


var countryData = null;

const getCountryData = () => {
    fetch("https://disease.sh/v3/covid-19/countries")
    .then((response)=>{
        return response.json()
    }).then((data)=>{
        showDataOnMap(data);
        countryData = (data);
    })
}


const getWorldData = () => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then((response)=>{
        return response.json()
    }).then((data)=>{

        var cardValues = {
            caseNumbers: [data.cases, data.active, data.recovered, data.deaths],
            stringColors: [colors.allCases, colors.activeCases, colors.recoveredCases, colors.deathsCases],
            idStrings : ['total-cases', 'active-cases', 'recovered-cases', 'death-cases']
        }

        setCardValues(cardValues);

        
        buildPieChart(cardValues.caseNumbers);
        var cards = ['total-cases-card', 'active-cases-card', 'recovered-cases-card', 'death-cases-card'];

        var totalCasesButton = document.getElementById(cards[0]);
        var activeCasesButton = document.getElementById(cards[1]);
        var recoverdCasesButton = document.getElementById(cards[2]);
        var deathCasesButton = document.getElementById(cards[3]);

        totalCasesButton.addEventListener('click', function() {
            mapState = { color: colors.allCases , cases : 'cases'};
            cleanMap();
            showDataOnMap(countryData);
            changeSelectedButton(totalCasesButton);
        }, false);
        activeCasesButton.addEventListener('click', function() {
            mapState = { color: colors.activeCases , cases : 'active'};
            cleanMap();
            showDataOnMap(countryData);
            changeSelectedButton(activeCasesButton);
            
        }, false);
        recoverdCasesButton.addEventListener('click', function() {
            mapState = { color: colors.recoveredCases , cases : 'recovered'};
            cleanMap();
            showDataOnMap(countryData);
            changeSelectedButton(recoverdCasesButton);
        }, false);
        deathCasesButton.addEventListener('click', function() {
            mapState = { color: colors.deathsCases , cases : 'deaths'};
            cleanMap();
            showDataOnMap(countryData);
            changeSelectedButton(deathCasesButton);
        }, false);
        
    });

    const setCardValues = (values) => {
        for( i=0; i < values.caseNumbers.length; i++){
            var html = `
                <div style="color:${values.stringColors[i]}" >
                    ${setCommas(values.caseNumbers[i])}
                </div>
            `;
            document.getElementById(values.idStrings[i]).innerHTML = html;
        }
    }

    const setCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

   
}

const changeSelectedButton = (element) => {
    var cards = ['total-cases-card', 'active-cases-card', 'recovered-cases-card', 'death-cases-card'];

    var cardlist = [];
    cards.forEach((cardId) => {
        cardlist.push(document.getElementById(cardId));
    });
    cardlist.forEach((cardElement) => {
        cardElement.style.backgroundColor = "#EFF2F6";
    });
    element.style.backgroundColor = "grey";
    buildChart(chartData);
   
}

var chartData = null;

const getHistoricalData = () => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
    .then((response)=>{
        return response.json()
    }).then((data)=>{
        chartData = buildChartData(data);
        buildChart(chartData);
    });
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


const buildChart = (chartData) => {
    console.log("All if good");
    var timeFormat = 'MM/DD/YY';
    var ctx = document.getElementById('myChart').getContext('2d');
    var data = [
        {
            label: 'Total Cases',
            backgroundColor: colors.allCases,
            borderColor: colors.allCases,
            data: chartData.allCases
        },
        {
            label: 'Recovered Cases',
            backgroundColor: colors.recoveredCases,
            borderColor: colors.recoveredCases,
            data: chartData.recovered
        }, 
        {
            label: 'Death Cases',
            backgroundColor: colors.deathsCases,
            borderColor: colors.deathsCases,
            data: chartData.deaths
        },
        {
            label: 'Active Cases',
            backgroundColor: colors.activeCases,
            borderColor: colors.activeCases,
            data: chartData.active
        },
    ]

    var shownChart = () => {
        if(mapState.cases === 'cases'){
            return data[0];
        }
        else if(mapState.cases === 'recovered'){
            return data[1];
        }
        else if(mapState.cases === 'deaths'){
            return data[2];
        }
        else if(mapState.cases === 'active'){
            return data[3];
        }
        
    }


    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            datasets: [
                shownChart(),
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

const buildPieChart = (chartData) => {
    var timeFormat = 'MM/DD/YY';
    var ctx = document.getElementById('pieChart').getContext('2d');

    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            datasets: [{
                data: [chartData[1], chartData[2], chartData[3]],
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


const openInfoWindow = () => {
    infoWindow.open(map);
}

const circles = [];

const showDataOnMap = (data) => {
    data.map((country)=>{
        let countryCenter = {
            lat: country.countryInfo.lat,
            lng: country.countryInfo.long
        }

        var values = {
            color: mapState.color,
            cases: country[mapState.cases]
        }
        
        var countryCircle = new google.maps.Circle({
            strokeColor: values.color,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: values.color,
            fillOpacity: 0.35,
            map: map,
            center: countryCenter,
            radius: values.cases
        });

        circles.push(countryCircle);

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

        var infoWindow = new google.maps.InfoWindow({
            content: html,
            position: countryCircle.center
        });
        google.maps.event.addListener(countryCircle, 'mouseover', function() {
            infoWindow.open(map);
        });

        google.maps.event.addListener(countryCircle, 'mouseout', function(){
            infoWindow.close();
        });

    })
}

const cleanMap = () => {
    circles.forEach((circle => {
        circle.setMap(null);
    }))
}


