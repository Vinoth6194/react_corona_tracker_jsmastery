import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";

import React, { Component } from "react";

export class App extends Component {
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
