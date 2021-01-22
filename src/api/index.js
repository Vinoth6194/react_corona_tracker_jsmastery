import axios from "axios";
const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    // const response = await axios.get(url);
    // return response;
    //* destructuring the data object from response
    // const { data } = await axios.get(url);
    // const modifiedData = {
    //   confirmed: data.confirmed,
    //   recovered: data.recovered,
    //   deaths: data.deaths,
    //   lastUpdate: data.lastUpdate,
    // };
    //* re destructuring the data object from response
    // const {
    //   data: { confirmed, recovered, deaths, lastUpdate },
    // } = await axios.get(url);
    // const modifiedData = {
    //   confirmed: confirmed,
    //   recovered: recovered,
    //   deaths: deaths,
    //   lastUpdate: lastUpdate,
    // };
    //* as both the key and values have the same name in object we can directly do  as below instead of the above format
    // const {
    //   data: { confirmed, recovered, deaths, lastUpdate },
    // } = await axios.get(url);
    // const modifiedData = {
    //   confirmed,
    //   recovered,
    //   deaths,
    //   lastUpdate,
    // };
    //* return the obj directly instead of assigning to the variable
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    console.log(data);
  } catch (error) {}
};
