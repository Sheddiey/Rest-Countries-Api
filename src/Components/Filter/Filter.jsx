import React from "react";
import "./filter.css";

const Filter = ({inputClasses, selectClasses}) => {
  return (
    <section className='filter'>
      <form action="" className={inputClasses}>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country"
        />
      </form>
      <div className="region-filter">
        <select name="select" id="select" className={selectClasses}>
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
