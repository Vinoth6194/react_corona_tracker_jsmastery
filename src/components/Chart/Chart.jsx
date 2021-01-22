import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../api";
import { Bar, Line } from "react-chartjs-2";
function Chart() {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchDailyApi = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchDailyApi();
    // console.log("Dailydata ----" + dailyData);
  });
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
  return <div>{lineChart}</div>;
}

export default Chart;
