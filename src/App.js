import "./App.css";
import Cards from "./components/Cards/Cards";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Chart from "./components/Chart/Chart";

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
