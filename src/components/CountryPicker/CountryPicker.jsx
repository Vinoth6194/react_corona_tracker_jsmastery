import React, { useEffect, useState } from "react";
import { countriesApi } from "../../api";
import { NativeSelect } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import styles from "./Country.module.css";
function CountryPicker() {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchCountriesApi = async () => {
      setFetchedCountries(await countriesApi());
    };
    fetchCountriesApi();
    // console.log("Countries api", +fetchedCountries);
  }, [setFetchedCountries]);
  console.log(fetchedCountries.join("**"));
  console.log(fetchedCountries);

  return (
    <div className={styles.container}>
      <FormControl>
        <NativeSelect>
          <option value="global">Global</option>
          {fetchedCountries.map((country, i) => (
            <option value={country} key={i}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}

export default CountryPicker;
