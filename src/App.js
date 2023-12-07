import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Countries from "./Components/Countries/Countries";
import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";
import Country from "./Components/Country/Country";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const headerClasses = `header ${isDarkMode ? "light-theme" : ""}`;
  const inputClasses = `form-control ${isDarkMode ? "light-theme-input" : ""}`;
  const selectClasses = `select ${isDarkMode ? "light-theme-input" : ""}`;
  const countriesClasses = `details ${isDarkMode ? 'light-theme-countries' : ''}`;

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
              />
              <Countries countriesClasses={countriesClasses} />
            </>
          }
        />
        <Route path="/countries/:numericCode" element={<Country />} />
      </Routes>
    </Router>
  );
};

export default App;
