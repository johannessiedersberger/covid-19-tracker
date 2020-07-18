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
        this.changeSelectedButton(this.state.tabRefs.allCasesRef);
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
          this.props.caseTypeChanged('cases');
        }, false);
        this.state.tabRefs.activeCasesRef.current.addEventListener('click', () => {
            this.changeSelectedButton(this.state.tabRefs.activeCasesRef);
            this.props.caseTypeChanged('active');
         }, false);
         this.state.tabRefs.recoveredCasesRef.current.addEventListener('click', () => {
            this.changeSelectedButton(this.state.tabRefs.recoveredCasesRef);
            this.props.caseTypeChanged('recovered');
         }, false);
         this.state.tabRefs.deathsCasesRef.current.addEventListener('click', () => {
            this.changeSelectedButton(this.state.tabRefs.deathsCasesRef);
            this.props.caseTypeChanged('deaths');
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
            <div className="row stats-container">
                <div className="col">
                    <div className="card" ref={this.state.tabRefs.allCasesRef}>
                        <div className="card-body">
                            <h5 className="card-title">Total Cases</h5>
                            <h6 className="card-subtitle mb-2 text-muted" ref={this.state.tabCasesRefs.allCasesRef}></h6>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" ref={this.state.tabRefs.activeCasesRef}>
                        <div className="card-body">
                            <h5 className="card-title">Active Cases</h5>
                            <h6 className="card-subtitle mb-2 text-muted" ref={this.state.tabCasesRefs.activeCasesRef}></h6>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" ref={this.state.tabRefs.recoveredCasesRef}>
                        <div className="card-body">
                            <h5 className="card-title">Recovered</h5>
                            <h6 className="card-subtitle mb-2 text-muted " ref={this.state.tabCasesRefs.recoveredCasesRef}></h6>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" ref={this.state.tabRefs.deathsCasesRef}>
                        <div className="card-body">
                            <h5 className="card-title">Deaths</h5>
                            <h6 className="card-subtitle mb-2 text-muted " ref={this.state.tabCasesRefs.deathsCasesRef}></h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tab;
