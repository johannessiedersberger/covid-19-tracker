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
            tabCasesRefs: {
                allCasesRef : React.createRef(),//cases
                activeCasesRef: React.createRef(),//active
                recoveredCasesRef: React.createRef(),//recovered
                deathsCasesRef: React.createRef()//deaths
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
        this.placeEvents();
    }

    setCardValues = () => {
        var colors = Object.values(this.state.colors);
        var tabRefs = Object.values(this.state.tabCasesRefs);
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

    placeEvents(){
        this.state.tabRefs.allCasesRef.current.addEventListener('click', () => {
          this.changeSelectedButton(this.state.tabRefs.allCasesRef);
        }, false);
        this.state.tabRefs.activeCasesRef.current.addEventListener('click', () => {
            this.changeSelectedButton(this.state.tabRefs.activeCasesRef);
         }, false);
         this.state.tabRefs.recoveredCasesRef.current.addEventListener('click', () => {
            this.changeSelectedButton(this.state.tabRefs.recoveredCasesRef);
         }, false);
         this.state.tabRefs.deathsCasesRef.current.addEventListener('click', () => {
            this.changeSelectedButton(this.state.tabRefs.deathsCasesRef);
         }, false);
    }

    changeSelectedButton(buttonElement){
        var cardList = Object.values(this.state.tabRefs);
        cardList.forEach((cardElement) => {
            cardElement.current.style.backgroundColor = "#EFF2F6";
        });
        buttonElement.current.style.backgroundColor = "lightgrey";
    }

    render(){
        return(
            <div class="row stats-container">
                <div class="col">
                    <div class="card" ref={this.state.tabRefs.allCasesRef}>
                        <div class="card-body">
                            <h5 class="card-title">Total Cases</h5>
                            <h6 class="card-subtitle mb-2 text-muted" ref={this.state.tabCasesRefs.allCasesRef}></h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" ref={this.state.tabRefs.activeCasesRef}>
                        <div class="card-body">
                            <h5 class="card-title">Active Cases</h5>
                            <h6 class="card-subtitle mb-2 text-muted" ref={this.state.tabCasesRefs.activeCasesRef}></h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" ref={this.state.tabRefs.recoveredCasesRef}>
                        <div class="card-body">
                            <h5 class="card-title">Recovered</h5>
                            <h6 class="card-subtitle mb-2 text-muted " ref={this.state.tabCasesRefs.recoveredCasesRef}></h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" ref={this.state.tabRefs.deathsCasesRef}>
                        <div class="card-body">
                            <h5 class="card-title">Deaths</h5>
                            <h6 class="card-subtitle mb-2 text-muted " ref={this.state.tabCasesRefs.deathsCasesRef}></h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tab;
