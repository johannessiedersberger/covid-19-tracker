import React, {Component} from 'react';


class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            
            <div className="row header-container">
                <div className="col title-container">
                    <h1>Covid-19</h1>
                    <h4>Coronavirus</h4>
                </div>
                <div className="col search-container">
                    <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i class="fa fa-search" aria-hidden="true"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Search Location" aria-label="Search Location" aria-describedby="basic-addon1"></input>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;