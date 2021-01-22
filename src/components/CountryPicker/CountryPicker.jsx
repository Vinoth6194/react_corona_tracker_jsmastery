import React, { useEffect, useState } from "react";
import { countriesApi } from "../../api";
import { NativeSelect } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import styles from "./Country.module.css";
function CountryPicker({ handleCountryChange }) {
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
    <div className={styles.formControl}>
      <FormControl>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">United States</option>
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
