import React, {Component} from 'react';
import DropdownList from './DropdownComponent';

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
                    <DropdownList countryData={this.props.countryData}/>
                </div>
            </div>
        );
    }
}


export default Header;