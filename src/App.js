import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Countries from "./Components/Countries/Countries";
import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";
import Country from "./Components/Country/Country";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Filter />
              <Countries />
            </>
          }
        />
        <Route path="/countries/:numericCode" element={<Country />} /> 
      </Routes>
    </Router>
  );
};

export default App;
