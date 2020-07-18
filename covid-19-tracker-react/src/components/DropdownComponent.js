import React, {Component} from 'react';
import {Dropdown} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const countryOptions = [
    { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
    { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
    { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
    { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
    { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
    { key: 'de', value: 'de', flag: 'de', text: 'Germany' },
  ]
  

  class DropdownList extends Component{
    constructor(props){
        super(props);
     
    }

    countryOptions = () =>{
        var countryOptions = [];
        this.props.countryData.map(
            (country) => {
                var iso = country.countryInfo.iso2;
                if(iso !== null){
                    iso = iso.toLowerCase();
                
                
                    countryOptions.push(
                        {
                            
                            key: iso,
                            value: iso,
                            flag: iso,
                            text: country.country
                        }
                    )
                }
                   
            }
        );
        return countryOptions;
      
        
    }

    render(){
        return(
            <Dropdown
              placeholder='Select Country'
              fluid
              search
              selection
              options={this.countryOptions()}
            />
          );
    }
  }
  

  export default DropdownList;