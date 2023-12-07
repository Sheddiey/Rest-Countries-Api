import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("light-theme");
  };

  return (
    <>
      <header className="header">
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
