import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import mma from "./images/mma-logo2.png";
import lightning from "./images/lighning.jpg";
import mustang from "./images/mustangsj.jpg";
import london from "./images/london-knights.png";
import team from "./images/our-team.jpg";
import LazyLoad from "react-lazyload";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    margin: "0 5% 0 5%",
    [theme.breakpoints.down(600)]: {
      textAlign: "center",
      height: "100%",
    },
  },
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
    margin: "0  5% 0 0",
  },
  rootTwo: {
    maxWidth: "100%",
    height: "100%",
  },
  media: {
    height: "100%",
    width: "100%",
    backgroundSize: "contain",
  },
  mediaTwo: {
    height: "100%",
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  small: {
    width: theme.spacing(13),
    height: theme.spacing(13),
    opacity: ".3",
    filter: "grayscale(30%)",
  },
  bottomImageRow: {
    width: "100%",
    display: "flex",
    marginTop: "5%",
  },
  image: {
    display: "flex",
    justifyContent: "center",
  },
  btn: {
    marginTop: ".5rem",
    color: "#256d52",
    fontWeight: "bold",
    border: "solid #256d52 1px",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div id="about" className={classes.container}>
      <Grid container>
        <Grid item sm={12} md={6}>
          {/* ----------------- */}

          <Box pt={2} mr={3}>
            <Typography className={classes.title} variant="h4">
              Meet Our Team
            </Typography>
            <Typography className={classes.bodyText} variant="body1">
              Aaron Brady, the founder of Spartan Nutrition, earned his degree
              at Queen’s University in physical & health education as well as
              geography. During his time at Queen’s, Aaron was on the varsity
              Football team and since than has dedicated much of his time to
              weight training. Knowing that he had a passion for physical
              fitness and a strong entrepreneurial drive he turned his interests
              into a career and now has 3 successful stores in London.
            </Typography>
            <Typography className={classes.bodyText} variant="body1">
              Spartan Nutrition employs the most knowledgeable staff who are
              there to help each of our customers to determine the best products
              to improve both their physical fitness and lifestyle. Our stores
              have a large variety of products with a strong presence of
              Canadian-made brands.
            </Typography>
            <Button className={classes.btn} variant="outlined">
              Read More About Us <NavigateNextIcon />{" "}
            </Button>
          </Box>
        </Grid>
        {/* ------------ */}
        <Grid item sm={12} md={6}>
          <LazyLoad height={200} offset={100}>
            <CardMedia
              className={classes.media}
              image={team}
              title="team picture"
            />
          </LazyLoad>
          {/* ------------------- */}
        </Grid>
        {/* ---------------------- */}
        <Box className={classes.bottomImageRow}>
          <Grid container>
            <Grid className={classes.image} item sm={12} md={6}>
              <Avatar
                variant="square"
                alt="Remy Sharp"
                src={mma}
                className={classes.small}
              />
            </Grid>
            <Grid className={classes.image} item sm={12} md={6}>
              <Avatar
                alt="Remy Sharp"
                src={lightning}
                className={classes.small}
              />
            </Grid>
          </Grid>
          {/* ---------- */}
          <Grid container>
            <Grid className={classes.image} item sm={12} md={6}>
              <Avatar
                alt="Remy Sharp"
                src={mustang}
                className={classes.small}
              />
            </Grid>
            <Grid className={classes.image} item sm={12} md={6}>
              <Avatar alt="Remy Sharp" src={london} className={classes.small} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default About;
