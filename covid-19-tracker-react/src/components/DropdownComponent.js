import React, {Component} from 'react';
import {Dropdown} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';  

  class DropdownList extends Component{
    constructor(props){
        super(props);
     
    }

    countryOptions = () =>{
        var countryOptions = [];
        this.props.countryData.map(
            (country) => {

                    var countryLetters = country.countryInfo.iso2;
                    if(countryLetters !== null){
                        countryLetters = countryLetters.toLowerCase();
                    }

                    countryOptions.push(
                        {
                            key: country.country,
                            value: country.country,
                            flag: countryLetters,
                            text: country.country
                        }
                    )
                }
                   
            
        );
        return countryOptions;
    }

    selectionChanged = (selectedCountry) => {
        console.log(selectedCountry);
        this.props.countryData.map((country) => {
            if(country.country === selectedCountry){
                this.props.selectedCountryChanged({
                        country: country, 
                        lat: country.countryInfo.lat,
                        long: country.countryInfo.long,
                    }
                ); 
            }
        });

        
    }

    render(){
        return(
            <Dropdown
              placeholder='Select Country'
              fluid
              search
              selection
              options={this.countryOptions()}
              onChange={(e, selectedCountry) => {
                  this.selectionChanged(selectedCountry.value);
              }}
            />
          );
    }
  }
  

  export default DropdownList;