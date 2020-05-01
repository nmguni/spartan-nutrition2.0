import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../navbar/navbar";
import HeaderContent from "./headerContent";
import Wellness from "../products/Wellness";
import Hormones from "../products/HormoneSupplements";
import Protein from "../products/Protein";
import About from "../products/about";
import BlogPage from "../products/blog";
import Contact from "../products/contact";
import Footer from "../products/footer";

const useStyles = makeStyles((theme) => ({
  header: {
    height: "100vh",
    [theme.breakpoints.down(900)]: {
      height: "100%",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <header className={classes.header}>
        <NavBar />
        <HeaderContent />
      </header>
      <Wellness />
      <Hormones />
      <Protein />
      <About />
      <BlogPage />
      <Contact />
      <Footer />
    </div>
  );
};

export default Header;
