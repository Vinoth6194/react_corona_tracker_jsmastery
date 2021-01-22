import React, { useEffect, useState } from "react";
import { countriesApi } from "../../api";
function CountryPicker() {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchCountriesApi = async () => {
      setFetchedCountries(await countriesApi());
    };
    fetchCountriesApi();
    // console.log("Countries api", +fetchedCountries);
  }, []);

  return <div>()</div>;
}

export default CountryPicker;
