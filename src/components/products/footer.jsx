import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  root: {
    height: " 6rem",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    padding: "0",
    margin: "0",
  },
  links: {
    textDecoration: "none",
    color: "#313131ea",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        {" "}
        <p className={classes.text}>
          © Copyright 2019 | All Rights Reserved | Spartan Nutrition
        </p>
      </div>
      <div className={classes.icons}>
        {" "}
        <a
          className={classes.links}
          href="https://www.facebook.com/Spartannutritionlondon"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FacebookIcon fontSize="large" />
        </a>
        <a
          className={classes.links}
          href="https://twitter.com/SpartanLondon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon fontSize="large" />
        </a>
        <a
          className={classes.links}
          href="https://www.instagram.com/spartanlondon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <InstagramIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
}
