import "./App.css";
import { Cards, Chart, CountryPicker } from "./components";

function App() {
  return (
    <div className="App">
      <h1>Corona Tracker using Javascript Mystery</h1>
      <Cards></Cards>
      <CountryPicker></CountryPicker>
      <Chart></Chart>
    </div>
  );
}

export default App;
