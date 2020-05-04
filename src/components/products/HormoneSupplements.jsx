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
import alpha from "./images/alpha-jack.jpg";
import estroControll from "./images/estro-controll.jpg";
import hormone from "./images/synermag.png";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import headerStyles from "../header/header.module.scss";
import Hidden from "@material-ui/core/Hidden";
import LazyLoad from "react-lazyload";

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
    padding: "1rem 0",
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
    backgroundSize: "cover",
  },
  mediaTwo: {
    height: "100%",
    backgroundSize: "contain ",
    [theme.breakpoints.down(950)]: {
      display: "none",
    },
  },
  listStyles: {
    fontWeight: "bold",
    listStyle: "none",
    padding: "0",
    lineHeight: " 1.5rem",
    color: "rgba(0,0,0, 0.7)",
  },
  starIconColor: {
    color: "rgba(170, 130, 0, 0.69)",
  },
  content: {
    margin: "0 10% 0 10%",
    [theme.breakpoints.down(1050)]: {
      margin: "0 3% 0 3%",
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
  itemInfo: {
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down(1050)]: {
      display: "none",
    },
  },
}));

const Hormones = () => {
  const classes = useStyles();
  return (
    <div id="hormone" className={classes.container}>
      <Grid container>
        <Grid item sx={12} md={6}>
          <Box className={classes.content}>
            <Typography className={classes.title}>
              Hormone Supplements
            </Typography>
            <Typography className={classes.body} variant="body1">
              A synergistic combination of efficiently-dosed, research-backed,
              ingredients aimed at optimizing male health. Helps to support
              healthy estrogen metabolism and balance.* Provides antioxidants
              for the maintenance of good health.*
            </Typography>
            <div className={classes.itemInfo}>
              <ul className={classes.listStyles}>
                <li>No GMOs </li>
                <li>No Artificial Colors </li>
              </ul>
              <ul className={classes.listStyles}>
                <li>No Titanium Dioxide</li>
                <li>No Magnesium Stearate </li>
              </ul>
              <ul className={classes.listStyles}>
                <li>No Artificial Sweeteners </li>
                <li>Premium Ingredients </li>
              </ul>
            </div>
            <div className={classes.mediaGrid}>
              <Card elevation={0} variant="outlined" className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={estroControll}
                    title="Estro Control"
                    style={{ opacity: ".9" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Estro Control
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Helps to promote healthy estrogen metabolism. A unique and
                      100% natural new formula (3.0). <br /> *
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
                    image={alpha}
                    title="Alpha Jack"
                    style={{ opacity: ".9" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Alpha Jack
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      A synergistic combination of efficiently-dosed,
                      research-backed, ingredients aimed at optimizing male
                      health.
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
                  <StarIcon style={{ color: "rgba(170, 130, 0, 0.69)" }} />
                  <StarIcon style={{ color: "rgba(170, 130, 0, 0.69)" }} />
                  <StarIcon style={{ color: "rgba(170, 130, 0, 0.69)" }} />
                  <StarHalfIcon style={{ color: "rgba(170, 130, 0, 0.69)" }} />
                </CardActions>
              </Card>
            </div>
          </Box>
        </Grid>
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
                image={hormone}
                title="Alpha Jack"
              />
            </LazyLoad>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default Hormones;
