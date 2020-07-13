import React, {Component} from 'react';


class ListTable extends Component{
    constructor(props){
        super(props);
        this.countryTableRef = React.createRef();
    }

    componentDidMount(){
        this.showDataInTable(this.props.countryData,this.countryTableRef.current);
    }

    showDataInTable = (data, countryTableRef) => {
        var html = '';
        data.forEach((country)=>{
            html += `
            <tr>
                <td>${country.country}</td>
                <td>${country.cases}</td>
                <td>${country.recovered}</td>
                <td>${country.deaths}</td>
            </tr>
            `
        })
        countryTableRef.innerHTML = html;
    }

    render(){
        return (
            <div class="col-4 countries-container mt-3 my-custom-scrollbar table-wrapper-scroll-y">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Country</th>
                            <th scope="col">Cases</th>
                            <th scope="col">Recovered</th>
                            <th scope="col">Death</th>
                        </tr>
                    </thead>
                    <tbody id="countries-table-body" ref={this.countryTableRef}>
                        <tr>
                            <th>Germany</th>
                            <td>19200</td>
                            <td>8000</td>
                            <td>180000</td>
                            <td>8000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}



export default ListTable;