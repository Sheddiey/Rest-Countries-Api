import React, { useEffect, useState } from "react";

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <>
      <section className="grid">
        {countries.map((country) => {
          const { cca3, flags, name, population, region, capital } = country;

          return (
            <article key={cca3}>
              <div>
                <img src={flags.svg} alt={name.common} />
                <h3>{name.common}</h3>
                <h4>
                  Population: <span>{population}</span>
                </h4>
                <h4>
                  Region: <span>{region}</span>
                </h4>
                <h4>
                  Capital: <span>{capital}</span>
                </h4>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
