import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../api";
import { Bar, Line } from "react-chartjs-2";
function Chart() {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchDailyApi = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchDailyApi();
    console.log("Dailydata ----" + dailyData);
  }, []);
  // const lineChart = dailyData[0] ? (
  //   <Line
  //     data={{
  //       labels: "",
  //       datasets: [{}, {}],
  //     }}
  //   />
  // ) : null;
  return <div>Chart</div>;
}

export default Chart;
