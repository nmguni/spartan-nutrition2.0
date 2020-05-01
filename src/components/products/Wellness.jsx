import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import bgImg from "./images/test.png";
import blueberries from "./images/blueberries-raspberries.jpg";
import veggies from "./images/assorted-vegetable.jpg";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import LazyLoad from "react-lazyload";
import Hidden from "@material-ui/core/Hidden";
import headerStyles from "../header/header.module.scss";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    marginTop: "1rem",
    [theme.breakpoints.down(950)]: {
      height: "100%",
      marginTop: "5%",
    },
  },
  title: {
    fontSize: "2rem",
    color: "#313131ea",
    fontWeight: "bold",
    [theme.breakpoints.down(950)]: {
      textAlign: "center",
    },
  },
  body: {
    paddingTop: ".5rem",
    lineHeight: "1.5rem",
    color: "#313131ba",
    padding: "1rem",
    [theme.breakpoints.down(1050)]: {
      textAlign: "center",
    },
  },
  root: {
    maxWidth: 260,
  },
  rootTwo: {
    maxWidth: "100%",
    height: "100%",
  },
  media: {
    height: "150px",
    backgroundSize: "auto",
  },
  mediaTwo: {
    height: "100%",
    backgroundSize: "cover",
  },
  starIconColor: {
    color: "rgba(170, 130, 0, 0.69)",
  },
  listStyles: {
    fontWeight: "bold",
    listStyle: "none",
    padding: "0",
    lineHeight: " 1.5rem",
    color: "rgba(0,0,0, 0.7)",
  },
  itemInfo: {
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down(1050)]: {
      display: "none",
    },
  },
  mediaGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: ".5rem",
    [theme.breakpoints.down(950)]: {
      display: "flex",
      justifyContent: "space-evenly",
    },
    [theme.breakpoints.down(550)]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  content: {
    margin: "0 10% 0 10%",
    [theme.breakpoints.down(1050)]: {
      margin: "0 3% 0 3%",
    },
  },
}));

const Wellness = () => {
  const classes = useStyles();
  return (
    <div id="health" className={classes.container}>
      <Grid container>
        <Hidden only="sm">
          <Grid
            className={headerStyles.headColor}
            style={{ padding: "2.5rem" }}
            item
            sx={12}
            md={6}
          >
            <LazyLoad height={200}>
              <CardMedia
                className={classes.mediaTwo}
                image={bgImg}
                title="Phyto Berry"
              />
            </LazyLoad>
          </Grid>
        </Hidden>
        <Grid item sx={12} md={6}>
          <Box className={classes.content}>
            <Typography className={classes.title}>
              HEALTH AND WELLNESS
            </Typography>
            <Typography className={classes.body} variant="body1">
              With 9 distinctive blends of green foods and plant extracts,
              VegeGreens supplies an extraordinary spectrum of nutrients ranging
              from the rare trace minerals found in sea vegetables to the
              health-enhancing compounds exclusive to cruciferous vegetables
            </Typography>
            <div className={classes.itemInfo}>
              <ul className={classes.listStyles}>
                <li> Antioxidants </li>
                <li>Phytonutrients </li>
              </ul>
              <ul className={classes.listStyles}>
                <li> Fruit Concentrates </li>
                <li> Berry Concentrates</li>
              </ul>
              <ul className={classes.listStyles}>
                <li> Mental clarity</li>
                <li>Increases energy </li>
              </ul>
            </div>
            <div className={classes.mediaGrid}>
              <Card elevation={0} variant="outlined" className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={blueberries}
                    title="Phytoberry berrys"
                    style={{ opacity: ".9" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      PHYTOBERRY
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      PhytoBerry® is a highly concentrated berry based whole
                      food supplement loaded with natural antioxidants.
                      Featuring over 40 fruit concentrates, phytonutrients, and
                      plant oils
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography
                    style={{ textDecoration: "line-through" }}
                    variant="body2"
                  >
                    12.66
                  </Typography>
                  <Typography variant="body2">8.99</Typography>
                  <StarIcon className={classes.starIconColor} />
                  <StarIcon className={classes.starIconColor} />
                  <StarIcon className={classes.starIconColor} />
                  <StarHalfIcon className={classes.starIconColor} />
                </CardActions>
              </Card>
              <Card elevation={0} variant="outlined" className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={veggies}
                    title="vegegreens"
                    style={{ opacity: ".9" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      VEGEGREENS
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      VegeGreens® contains a wonderful array of vegetables from
                      around the world. Each small scoop makes a great tasting
                      drink that offers the antioxidant equivalent of 6 to 8
                      servings of fresh veggies.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography
                    style={{ textDecoration: "line-through" }}
                    variant="body2"
                  >
                    15.66
                  </Typography>
                  <Typography variant="body2">10.99</Typography>
                  <StarIcon className={classes.starIconColor} />
                  <StarIcon className={classes.starIconColor} />
                  <StarIcon className={classes.starIconColor} />
                  <StarBorderIcon className={classes.starIconColor} />
                </CardActions>
              </Card>
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Wellness;
