import React from "react";
import "./filter.css";

const Filter = ({
  inputClasses,
  selectClasses,
  handleInputChange,
  searchValue,
  handleRegionChange,
  selectedRegion,
}) => {
  return (
    <section className="filter">
      <form action="" className="form-control">
        <input
        className={inputClasses}
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country"
          value={searchValue}
          onChange={handleInputChange}
        />
      </form>
      <div className="region-filter">
        <select
          name="select"
          id="select"
          className={selectClasses}
          value={selectedRegion}
          onChange={handleRegionChange}
        >
          <option value="">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default Filter;
