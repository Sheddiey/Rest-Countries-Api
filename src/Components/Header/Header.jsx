import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./header.css";

const Header = ({headerClasses, toggleDarkMode, isDarkMode}) => {
 

  return (
    <>
      <header className={headerClasses}>
        <div>
          <h1>Where in the world?</h1>
        </div>
        <div>
          <FontAwesomeIcon
            className="moon-icon"
            icon={isDarkMode ? faMoon : faSun}
            onClick={toggleDarkMode}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
