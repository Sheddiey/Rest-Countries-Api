import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './header.css'

const Header = () => {
  return (
    <>
      <header className="header">
        <div>
          <h1>Where in the world?</h1>
        </div>
        <div>
          <FontAwesomeIcon icon={faMoon} /> Dark Mode
        </div>
      </header>
    </>
  );
};

export default Header;
