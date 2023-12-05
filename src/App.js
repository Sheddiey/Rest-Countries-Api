import React from "react";
import Countries from "./Components/CountriesComponent/Countries";
import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";

const App = () => {
  return (
    <div>
      <Header />
      <Filter />
      <Countries />
    </div>
  );
};

export default App;
