import React, {Component} from 'react';

class Tab extends Component{
    constructor(props){
        super(props);
        this.state = {
            colors: {
                allCases: '#1d2c4d',
                activeCases : '#FF0000',
                recoveredCases: '#25b840',
                deathsCases: '#020d1f'
            },
            tabRefs: {
                allCasesRef : React.createRef(),//cases
                activeCasesRef: React.createRef(),//active
                recoveredCasesRef: React.createRef(),//recovered
                deathsCasesRef: React.createRef()//deaths
            },
            caseNumbers: {
                allCases: this.props.worldData.cases, 
                activeCases: this.props.worldData.active,
                recovered: this.props.worldData.recovered,
                deaths: this.props.worldData.deaths
            }
        }
    }

    componentDidMount(){
        this.setCardValues();
    }

    setCardValues = () => {
        var colors = Object.values(this.state.colors);
        var tabRefs = Object.values(this.state.tabRefs);
        var caseNumbers = Object.values(this.state.caseNumbers);
        for(var i=0; i < colors.length; i++){
            var html = `
                <div style="color:${colors[i]}" >
                    ${this.setCommas(caseNumbers[i])}
                </div>
            `;
            tabRefs[i].current.innerHTML = html;
        }
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
                            <h6 class="card-subtitle mb-2 text-muted" ref={this.state.tabRefs.allCasesRef}></h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" id="active-cases-card">
                        <div class="card-body">
                            <h5 class="card-title">Active Cases</h5>
                            <h6 class="card-subtitle mb-2 text-muted" ref={this.state.tabRefs.activeCasesRef}></h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" id="recovered-cases-card">
                        <div class="card-body">
                            <h5 class="card-title">Recovered</h5>
                            <h6 class="card-subtitle mb-2 text-muted " ref={this.state.tabRefs.recoveredCasesRef}></h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" id="death-cases-card">
                        <div class="card-body">
                            <h5 class="card-title">Deaths</h5>
                            <h6 class="card-subtitle mb-2 text-muted " ref={this.state.tabRefs.deathsCasesRef}></h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tab;
