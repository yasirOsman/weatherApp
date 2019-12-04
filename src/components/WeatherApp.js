import React, {Component} from 'react';
import {getDate} from '../functions/functions';
import Dailyval from './DailyVal'; 
import axios from 'axios';
 
class Weatherapp extends Component {
  constructor(){
    super();
    this.state = {
      city: {},
      list: {},
      length: null,
      theList: []
    };
  }

  componentDidMount(){
    axios.get('https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b6907d289e10d714a6e88b30761fae22/')
    .then(res => {
      const data = res.data
      this.setState({ city: data.city, list: data.list});
      const size = this.state.list;
      
      this.setState({length: getDate(size).length, theList: getDate(size) });
      console.log(this.state.theList); 
    })
    .catch(error => console.log('parsing failed', error))
     
  }
  
  render(){
    return(
      <div>
        <h4>A forecast for {this.state.city.name}</h4>
        <table>
          <thead>
            <tr>
              	<th>Date</th>
              	<th>Max Temperature</th>
                <th>Average Humidity</th>
            </tr>
          </thead>    
            <tbody>
            <Dailyval list={this.state.list} theList={this.state.theList}/>
            </tbody>
        </table>
      </div>
    );
  }
}

export default Weatherapp;