import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../api";
import { Bar, Line } from "react-chartjs-2";
function Chart() {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchApi();
    console.log(dailyData);
  }, []);

  const lineChart = dailyData[0] ? <Line 
  data={{
      labels:"",
      datasets:[{},{}]
  }}/> : null;
  return <div>Chart</div>;
}

export default Chart;
