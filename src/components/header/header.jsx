import React from "react";
import headerStyles from "./header.module.scss";
import NavBar from "../navbar/navbar";
import HeaderContent from "./headerContent";

// import Container from "../container/container";

const Header = () => {
  return (
    <div>
      <header className={headerStyles.header}>
        <NavBar />
        <HeaderContent />
      </header>
    </div>
  );
};

export default Header;
