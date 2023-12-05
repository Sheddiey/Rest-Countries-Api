import React from "react";
import "./filter.css";

const Filter = () => {
  return (
    <section className="filter">
      <form action="" className="form-control">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country"
        />
      </form>
      <div>
        <select name="select" id="select" className="select">
          <option value="Filter by region">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Ocienia</option>
        </select>
      </div>
    </section>
  );
};

export default Filter;