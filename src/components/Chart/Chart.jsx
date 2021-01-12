import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../api";
import {Bar, Line} from "react-chartjs-2";
function Chart() {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchApi();
  }, []);

  
     
  return <div>Chart</div>;
}

export default Chart;
