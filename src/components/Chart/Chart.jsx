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

  return <div>Chart</div>;
}

export default Chart;
