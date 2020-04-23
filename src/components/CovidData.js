import React, {Component} from 'react';
import '../App.css';
import './Component.css';

class CovidData extends Component {
    state = {
        currentState: "Georgia",
        stateData: []
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
        const { currentState } = this.state;
        const url = `https://corona.lmao.ninja/v2/states/${currentState}?yesterday=false`
        const stateData = await this.loadData(url);
        this.setState({
            stateData
        })
    }



    render() {
        const { stateData } = this.state;
        return (
            <div className="data">
                        <div className="item">
          <div className="header">COVID-19 Data</div>
          <div className="menu">
            <button className="item" className="dataButton">Global</button>
            <button className="item" className="dataButton">Country</button>
            <button className="item" className="dataButton">State</button>
          </div>
        </div>
                <h5>State: {stateData.state}</h5>
                <h5>Active Cases: {stateData.active}</h5>
                <h5>Total Cases: {stateData.cases}</h5>
                <h5>New Cases Today: {stateData.todayCases}</h5>
                <h5>Today's Death Count: {stateData.todayDeaths}</h5>
            </div>
        )
    }
}

export default CovidData;