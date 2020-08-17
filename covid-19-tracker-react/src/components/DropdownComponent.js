import React, {Component} from 'react';
import {Dropdown} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';  

  class DropdownList extends Component{
    constructor(props){
        super(props);
    }

    countryOptions = () =>{
        var countryOptions = [];

        countryOptions.push(
            {
                key: 'worldwide',
                value: 'worldwide',
                text: 'worldwide'
            }
        );

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
          if (selectedCountry === 'worldwide') {
              this.props.selectedCountryChanged({
                  country: 'worldwide',
                  lat: 48.135124,
                  long: 11.581981,
              }
              );
          }
          else {
              this.props.countryData.map((country) => {
                  if (country.country === selectedCountry) {
                      this.props.selectedCountryChanged({
                          country: country.country,
                          lat: country.countryInfo.lat,
                          long: country.countryInfo.long,
                      }
                      );
                  }
              });
          }
        

        
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