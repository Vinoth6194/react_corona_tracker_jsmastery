import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";

import React, { Component } from "react";
import { fetchData } from "./api";
export class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    //console.log(fetchedData);
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });

    console.log(country);

    console.log(fetchedData);
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        {/* <h1>Corona Tracker using Javascript Mystery</h1> */}
        <Cards data={data}></Cards>
        <CountryPicker
          handleCountryChange={this.handleCountryChange}
        ></CountryPicker>
        <Chart data={data} country={country}></Chart>
      </div>
    );
  }
}

export default App;
