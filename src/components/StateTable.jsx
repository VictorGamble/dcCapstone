import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class StateTable extends Component {
    state = {
        data: []
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
        const url = `https://covidtracking.com/api/v1/states/current.json`
        const stateData = await this.loadData(url);
        const data =  stateData.map(state => state)
        console.log("Data is =>", data);
        this.setState({
            data
        })

    }


    render() {
        const { data } = this.state;
        return (
            <div>
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">State</th>
      <th scope="col">Recovered</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>{data.map(state => <tr>{state.state}</tr>)}</td>
        <td>{data.map(state => <tr>{state.recovered}</tr>)}</td>
    </tr>
  </tbody>
</table>
    </div>
        )
    }
}


export default StateTable;