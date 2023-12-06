import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../Assets/data.json";

const Country = () => {
  const [country, setCountry] = useState({});
  const { numericCode } = useParams();

  useEffect(() => {
    const selectedCountry = data.find(
      (country) => country.numericCode === numericCode
    );

    if (selectedCountry) setCountry(selectedCountry);
  }, [numericCode]);

  if (Object.keys(country).length === 0) {
    return null;
  }

  const {
    numericCode: countryNumericCode,
    flags,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
  } = country;

  return (
    <>
      <Link to="/" className="btn btn-light">
        <FontAwesomeIcon icon={faArrowLeft} />
        Back
      </Link>
      <section className="country">
        <article key={countryNumericCode}>
          <div className="flag">
            <img src={flags.svg} alt={name} />
          </div>
          <div className="country-details">
            <h2>{name}</h2>
            <h5>
              Native Name: <span>{nativeName}</span>
            </h5>
            <h5>
              Population: <span>{population}</span>
            </h5>
            <h5>
              Region: <span>{region}</span>
            </h5>
            <h5>
              Sub Region: <span>{subregion}</span>
            </h5>
            <h5>
              Capital: <span>{capital}</span>
            </h5>
            <h5>
              Top Level Domain: <span>{topLevelDomain}</span>
            </h5>
            <h5>
              Currencies: <span>{currencies.map((currency) => currency.name).join(", ")}</span>
            </h5>
            <h5>
              Languages: <span>{languages.map((language) => language.name.name).join(", ")}</span>
            </h5>
          </div>
        </article>
      </section>
    </>
  );
};

export default Country;
