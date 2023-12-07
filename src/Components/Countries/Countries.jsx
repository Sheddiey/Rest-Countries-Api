import React, { useState } from "react";
import "./countries.css";
import { Link } from "react-router-dom";
import data from "../Assets/data.json";

const Countries = ({countriesClasses}) => {
  const [countries, setCountries] = useState(data);

  const removeCountry = (numericCode) => {
    const newCountries = countries.filter(
      (country) => country.numericCode !== numericCode
    );
    setCountries(newCountries);
  };

  return (
    <>
      <section className="grid">
        {countries.map((country) => {
          const { numericCode, flags, name, population, region, capital } =
            country;

          return (
            <article key={numericCode}>
              <div>
                <img src={flags.svg} alt={name} />
                <div className={countriesClasses}>
                  <h3>{name}</h3>
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
