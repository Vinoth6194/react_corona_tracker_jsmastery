import axios from "axios";
const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const response = axios.get(url);
    return response;
  } catch (error) {}
};
