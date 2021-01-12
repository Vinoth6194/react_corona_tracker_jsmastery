import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";

import React, { Component } from "react";
import { fetchData } from "./api";
export class App extends Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    //console.log(fetchedData);
    this.setState({ data: fetchedData });
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        {/* <h1>Corona Tracker using Javascript Mystery</h1> */}
        <Cards data={data}></Cards>
        <CountryPicker></CountryPicker>
        <Chart></Chart>
      </div>
    );
  }
}

export default App;
