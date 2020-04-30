import React from "react";
import headerStyles from "./header.module.scss";
import NavBar from "../navbar/navbar";
import HeaderContent from "./headerContent";
import Wellness from "../products/Wellness";
import Hormones from "../products/HormoneSupplements";
import Protein from "../products/Protein";
import ProductFour from "../products/productFour";
import BlogPage from "../products/blog";
import Contact from "../products/contact";

const Header = () => {
  return (
    <div>
      <header className={headerStyles.header}>
        <NavBar />
        <HeaderContent />
      </header>
      <Wellness />
      <Hormones />
      <Protein />
      <ProductFour />
      <BlogPage />
      <Contact />
    </div>
  );
};

export default Header;
