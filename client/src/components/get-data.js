import React from 'react';
import axios from 'axios';

export default class GetData extends React.Component{


  componentDidMount(){
    this.getData();
    this.getHumans();
  }
  async getData(){
    const URL = "/api/get-stuff";
    const response = await axios.get(URL);
    console.log('Resp', response);
  }
  async getHumans(){
    const URL = "/api/get-humans";
    const response = await axios.get(URL);
    console.log('Resp', response);
  }
  render(){
    return(
      <div>
        <h1>Friday on WAYNE!! </h1>
        <p>Party On GARTH!! </p>
      </div>
    )
  }
}
