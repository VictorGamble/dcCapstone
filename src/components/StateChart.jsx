import React, { Component } from 'react';
import {Line} from 'react-chartjs-2'

class StateChart extends Component {
  state = {
    chartData: [],
    chartReference: React.createRef()
  }

   loadData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json()
            return data;
        } catch (error) {
            console.error("error", error);
            return error;
        }
   }
  
  async componentDidMount() {
    const {chartReference} = this.state
    console.log("chartReference =>", chartReference)
    const url = `https://covidtracking.com/api/v1/us/daily.json`
    const chartData = await this.loadData(url);

    this.setState({
      chartData
    })
  }


  render() {
    const {chartData} = this.state
    return (
      <Line 
        width={100}
        height={50}
        data={chartData}
        label1= "Positive Test"
        />
    )
  }


}

 


export default StateChart;