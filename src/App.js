import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";

import React, { Component } from "react";
import { fetchData } from "./api";
export class App extends Component {
  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
  }
  render() {
    return (
      <div className={styles.container}>
        {/* <h1>Corona Tracker using Javascript Mystery</h1> */}
        <Cards></Cards>
        <CountryPicker></CountryPicker>
        <Chart></Chart>
      </div>
    );
  }
}

export default App;
