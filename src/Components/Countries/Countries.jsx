import React from "react";
import "./countries.css";
import { Link } from "react-router-dom";

const Countries = ({ countriesClasses, filteredCountries, removeCountry }) => {
  


  return (
    <>
      <section className="grid">
        {filteredCountries.map((country) => {
          const { numericCode, flags, name, population, region, capital } =
            country;

          return (
            <article key={numericCode}>
              <div>
                <img src={flags.svg} alt={name} />
                <div className={countriesClasses}>
                  <h3 className="country-name">{name}</h3>
                  <h4>
                    Population: <span>{population}</span>
                  </h4>
                  <h4>
                    Region: <span>{region}</span>
                  </h4>
                  <h4>
                    Capital: <span>{capital}</span>
                  </h4>
                  <div className="buttons">
                    <Link className="btn" to={`/countries/${numericCode}`}>
                      Learn more
                    </Link>
                    <button
                      className="btn"
                      onClick={() => removeCountry(numericCode)}
                    >
                      Remove Country
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
