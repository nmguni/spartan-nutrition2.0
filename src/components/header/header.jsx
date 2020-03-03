import React from "react";
import headerStyles from "./header.module.scss";
import NavBar from "../navbar/navbar";
import HeaderContent from "./headerContent";
import Sleep from "../sleepSection";
import SleepCards from "../sleep/sleepCards";

// import Container from "../container/container";

const Header = () => {
  return (
    <div>
      <header className={headerStyles.header}>
        <NavBar />
        <HeaderContent />
      </header>
      <Sleep />
    </div>
  );
};

export default Header;
