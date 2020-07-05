import React, {Component} from 'react';


class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            
            <div class="row header-container">
                <div class="col title-container">
                    <h1>Covid-19</h1>
                    <h4>Coronavirus</h4>
                </div>
                <div class="col search-container">
                    <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-search" aria-hidden="true"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Search Location" aria-label="Search Location" aria-describedby="basic-addon1"></input>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;