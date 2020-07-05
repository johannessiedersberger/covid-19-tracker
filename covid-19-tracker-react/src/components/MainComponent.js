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
    }

    render(){
        return (
            <div class="container-fluid main">
                <div class="row">
                    <div class="col-8">
                        <Header />
                        <Tab/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;