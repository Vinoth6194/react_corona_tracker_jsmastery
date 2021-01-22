import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../api";
import { Bar, Line } from "react-chartjs-2";
import styles from "./Chart.module.css";
function Chart({ data: { confirmed, recovered, deaths }, country }) {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchDailyApi = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchDailyApi();
    // console.log("Dailydata ----" + dailyData);
  }, []);
  //*Line chart will be displayed only if at least one item is present in the dailydata array.
  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "#red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "people",
            backgroundColor: [
              "rgba(0,0,255,0.5)",
              "rgba(0,255,0,0.5)",
              "rgba(255,0,0,0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current statistics in ${country}` },
      }}
    />
  ) : null;
  return (
    <div className={styles.container}>{country ? barChart : lineChart} </div>
  );
}

export default Chart;
