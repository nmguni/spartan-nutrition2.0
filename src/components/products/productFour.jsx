import React from "react";
import productStyles from "./product.module.scss";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import headerStyles from "../header/header.module.scss";

import Avatar from "@material-ui/core/Avatar";

import mma from "./images/mma-logo2.png";
import lightning from "./images/lighning.jpg";
import mustang from "./images/mustangsj.jpg";
import london from "./images/london-knights.png";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "2.5rem",
    color: "#313131ea",
    fontWeight: "bold",
    padding: ".5rem",
  },
  body: {
    paddingTop: ".5rem",
    lineHeight: "1.5rem",
    color: "#313131ba",
  },
  bodyText: {
    lineHeight: "2rem",
    color: "#313131cf",
    margin: "0 3rem 0 3rem",
  },
  root: {
    // maxWidth: 260,
  },
  rootTwo: {
    maxWidth: "100%",
    height: "100%",
  },
  media: {
    height: "100%",
    width: "100%",
    // backgroundposition: "center",
    backgroundSize: "fit",
    // backgroundPosition: "unset"
  },
  mediaTwo: {
    height: "100%",
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  small: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    opacity: ".9",
  },
  rootTwo: {
    display: "flex",
    "& > *": {
      // margin: theme.spacing(1),
    },
  },
}));

const ProductFour = () => {
  const classes = useStyles();
  return (
    <div className={productStyles.container}>
      <Grid container>
        <Grid item sm={12} md={6}>
          {/* ----------------- */}

          <Box pt={2} mr={3}>
            <Typography
              style={{ textAlign: "center", marginTop: "1.2rem" }}
              className={classes.title}
              variant="h4"
            >
              About
            </Typography>
            <Typography className={classes.bodyText} variant="body1">
              Since 1996, Spartan Nutrition has proudly served the London area.
              Aaron Brady, the founder of Spartan Nutrition, earned his degree
              at Queen’s University in physical & health education as well as
              geography. During his time at Queen’s, Aaron was on the varsity
              Football team and since than has dedicated much of his time to
              weight training. Knowing that he had a passion for physical
              fitness and a strong entrepreneurial
            </Typography>
            <Typography
              style={{ paddingTop: ".5rem" }}
              className={classes.bodyText}
              variant="body1"
            >
              Our stores have a large variety of products with a strong presence
              of Canadian-made brands. . Come into Spartan today for all your
              supplement needs! We also offer fitness apparel, shakers, in-store
              product demos and much more! See our locations and store hours
              here.
            </Typography>
          </Box>
        </Grid>
        {/* ------------ */}
        {/* <div style={{ backgroundColor: "#ccc" }} ></div> */}
        <Grid className={headerStyles.headColor} item sm={12} md={6}>
          <Box>
            <Typography
              style={{ textAlign: "center" }}
              className={classes.title}
              variant="h4"
            >
              Proud Partners
            </Typography>
            <Grid container>
              <Grid
                style={{
                  display: "flex",
                  // flexDirection: "column",
                  justifyContent: "center",
                  // margin: "0 auto",
                }}
                item
                sm={12}
                md={6}
              >
                <Typography variant="h6">
                  <Avatar
                    // style={{ width: "100px" }}
                    variant="square"
                    alt="Remy Sharp"
                    src={mma}
                    className={classes.small}
                  />
                  Adrenaline MMA
                </Typography>
              </Grid>
              <Grid
                style={{
                  display: "flex",
                  // flexDirection: "column",
                  justifyContent: "center",
                  // margin: "0 auto",
                }}
                item
                sm={12}
                md={6}
              >
                <Typography variant="h6">
                  <Avatar
                    alt="Remy Sharp"
                    src={lightning}
                    className={classes.small}
                  />
                  London Lightning
                </Typography>
              </Grid>
            </Grid>
            {/* ---------- */}
            <Grid container>
              <Grid
                style={{
                  display: "flex",
                  // flexDirection: "column",
                  justifyContent: "center",
                  // margin: "0 auto",
                }}
                item
                sm={12}
                md={6}
              >
                <Typography variant="h6">
                  <Avatar
                    alt="Remy Sharp"
                    src={mustang}
                    className={classes.small}
                  />
                  Junior Mustangs
                </Typography>
              </Grid>
              <Grid
                style={{
                  display: "flex",
                  // flexDirection: "column",
                  justifyContent: "center",
                  // margin: "0 auto",
                }}
                item
                sm={12}
                md={6}
              >
                <Typography variant="h6">
                  <Avatar
                    alt="Remy Sharp"
                    src={london}
                    className={classes.small}
                  />
                  London Knights
                </Typography>
              </Grid>
            </Grid>
          </Box>

          {/* ------------------- */}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductFour;
