import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img
        className="center"
        id="logo"
        src={process.env.PUBLIC_URL + "/logo.png"}
        alt="chocosetup logo"
      ></img>
    </header>
  );
}

export default Header;
