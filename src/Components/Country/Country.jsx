import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../Assets/data.json";
import "./country.css";
import { Li } from "react-flags-select";

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
    borders,
  } = country;

  return (
    <>
      <section className="country">
        <Link to="/" className="btn btn-light">
          <FontAwesomeIcon icon={faArrowLeft} />
          {" "} Back
        </Link>
        <article key={countryNumericCode}>
        <div className="country-inner">
        <div className="flag">
            {country && country.flags && country.flags.svg && (
              <img src={country.flags.svg} alt={country.name} />
            )}
          </div>
          <div className="country-details">
            <div>
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
            </div>
            <div>
              {" "}
              <h5>
                Top Level Domain: <span>{topLevelDomain}</span>
              </h5>
              <h5>
                Currencies:{" "}
                <span>
                  {currencies.map((currency) => currency.name).join(", ")}
                </span>
              </h5>
              <h5>
                Languages:{" "}
                <span>
                  {languages.map((language) => language.name).join(", ")}
                </span>
              </h5>
            </div>
          </div>
        </div>
          

          <div>
              <h3>Border Countries:</h3>
              <div className="borders">
                <ul>
                  {borders && borders.length > 0 ? (
                    borders.map((border) => <li key={border}>{border}</li>)
                  ) : (
                    <li>No Bordering Countries</li>
                  )}
                </ul>
              </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Country;
