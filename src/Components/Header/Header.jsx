import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./header.css";

const Header = ({headerClasses, toggleDarkMode}) => {
 

  return (
    <>
      <header className={headerClasses}>
        <div>
          <h1>Where in the world?</h1>
        </div>
        <div>
          <FontAwesomeIcon
            className="moon-icon"
            icon={faMoon}
            onClick={toggleDarkMode}
          />{" "}
          Dark Mode
        </div>
      </header>
    </>
  );
};

export default Header;
