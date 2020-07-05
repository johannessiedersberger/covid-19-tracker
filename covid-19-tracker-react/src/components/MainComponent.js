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

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            worldData: null,

        }

    }

    componentDidMount() {
        fetch("https://disease.sh/v3/covid-19/all")
            .then((response) => {
                return response.json()
            }).then((data) => {
                this.setState({ worldData: data, isLoading: false });
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
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;