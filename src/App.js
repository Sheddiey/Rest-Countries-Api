import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Countries from "./Components/Countries/Countries";
import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";
import Country from "./Components/Country/Country";
import data from "../src/Components/Assets/data.json";
import useSearch from "./Components/Countries/useSearch";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [countries, setCountries] = useState(data);

  const {
    filterData,
    searchValue,
    handleInputChange,
    handleRegionChange,
    selectedRegion,
  } = useSearch();
  const filteredCountries = filterData(countries);

  const removeCountry = (numericCode) => {
    const newCountries = countries.filter(
      (country) => country.numericCode !== numericCode
    );
    setCountries(newCountries);
  };

  const headerClasses = `header ${isDarkMode ? "light-theme" : ""}`;
  const inputClasses = `form-control ${isDarkMode ? "light-theme-input" : ""}`;
  const selectClasses = `select ${isDarkMode ? "light-theme-input" : ""}`;
  const countriesClasses = `details ${
    isDarkMode ? "light-theme-countries" : ""
  }`;
  const countryClasses = `borders ${isDarkMode ? "light-theme-country" : ""}`;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("light-theme");
  };

  return (
    <Router>
      <Header headerClasses={headerClasses} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Filter
                inputClasses={inputClasses}
                selectClasses={selectClasses}
                searchValue={searchValue}
                handleInputChange={handleInputChange}
                handleRegionChange={handleRegionChange}
                selectedRegion={selectedRegion}
              />
              <Countries
                countriesClasses={countriesClasses}
                filteredCountries={filteredCountries}
                removeCountry={removeCountry}
              />
            </>
          }
        />
        <Route
          path="/countries/:numericCode"
          element={<Country countryClasses={countryClasses} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
