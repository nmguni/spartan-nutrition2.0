import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

// imges
import focus from "./images/adult-beard-concentrated-concentration.jpg";
import vitamins from "./images/colors-colours-health-medicine.jpg";
import rest from "./images/photo-of-person-holding-alarm-clock.jpg";

// icon
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import headerStyles from "../header/header.module.scss";
import CardHeader from "@material-ui/core/CardHeader";
import { Button } from "@material-ui/core";

import LazyLoad from "react-lazyload";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "2.5rem",
    color: "#313131ea",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "2rem",
  },
  body: {
    paddingTop: ".5rem",
    lineHeight: "1.8rem",
    color: "#313131ba",
    textAlign: "center",
    margin: "0 10% 0 10% ",
  },
  rootTwo: {
    height: "100vh",
    margin: "0 10% 0 10% ",
  },
  root: {
    maxWidth: 345,
    // flexBasis: "unset",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  // ---------------------- new
  griFlex: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down(950)]: {
      justifyContent: "space-evenly",
    },
  },
  date: {
    color: "#ccc",
  },
  descriptionColor: {
    color: "rgb(150, 150, 150)",
  },
  CardHeader: {
    padding: "0px",
    color: "rgb(37, 109, 82)",
    fontWeight: "bold",
  },
  cardActions: {
    display: "flex",
    justifyContent: "start",
  },
  cardContent: {
    margin: "1rem",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down(950)]: {
      margin: ".6rem",
    },
  },
  buttonColor: {
    color: "rgb(150, 150, 150)",
  },
  bottomBtn: {
    color: "#313131ea",
    fontSize: "1.2rem",
    fontWeight: "bold",
    background: "#ededed",
    padding: ".1rem .5rem",
    borderRadius: "4px",
  },
  centerBotBtn: {
    display: "flex",
    justifyContent: "center",
  },
}));

const BlogPage = () => {
  const classes = useStyles();
  return (
    <div id="blog" className={(classes.rootTwo, headerStyles.headColor)}>
      <Box pb={3}>
        <Typography gutterBottom className={classes.title} variant="h4">
          From the Experts
        </Typography>
        <Typography gutterBottom className={classes.body} variant="body1">
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
        </Typography>
      </Box>
      <Grid className={classes.griFlex} container>
        <Grid className={classes.gridItem} item md={4}>
          <Card elevation={0} variant="outlined" className={classes.root}>
            <LazyLoad height={200} offset={100}>
              <CardMedia
                className={classes.media}
                image={focus}
                title="Vitamins for Focusing"
              />
            </LazyLoad>
            <CardContent className={classes.cardContent}>
              <Typography className={classes.date}>07 Nov, 2019</Typography>

              <CardHeader
                className={classes.CardHeader}
                title="Vitamins for Focusing"
              />
              <Typography
                className={classes.descriptionColor}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                So what are these vitamins? Let’s take you through them to help
                you pick out the ones you need!..
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions} disableSpacing>
              {" "}
              <Button className={classes.buttonColor}>
                go to article
              </Button>{" "}
            </CardActions>
          </Card>
        </Grid>
        <Grid className={classes.gridItem} item md={4}>
          <Card elevation={0} variant="outlined" className={classes.root}>
            <LazyLoad height={200} offset={100}>
              <CardMedia
                className={classes.media}
                image={vitamins}
                title="Wellness Supplements"
              />
            </LazyLoad>
            <CardContent className={classes.cardContent}>
              <Typography className={classes.date}>07 Nov, 2019</Typography>

              <CardHeader
                className={classes.CardHeader}
                title="Wellness Supplements"
              />
              <Typography
                className={classes.descriptionColor}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                We’ve listed a few improvements you’ll notice once you start
                taking some wellness supplements...
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions} disableSpacing>
              {" "}
              <Button className={classes.buttonColor}>
                go to article
              </Button>{" "}
            </CardActions>
          </Card>
        </Grid>
        <Grid className={classes.gridItem} item md={4}>
          <Card elevation={0} variant="outlined" className={classes.root}>
            <LazyLoad height={200} offset={100}>
              <CardMedia
                className={classes.media}
                image={rest}
                title="Rest and Recovery"
              />
            </LazyLoad>
            <CardContent className={classes.cardContent}>
              <Typography className={classes.date}>07 Nov, 2019</Typography>
              <CardHeader
                className={classes.CardHeader}
                title="Rest and Recovery "
              />
              <Typography variant="body2" color="textSecondary" component="p">
                For the success of any training program, rest and recovery both
                hold very tremendous importance...
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions} disableSpacing>
              {" "}
              <Button className={classes.buttonColor}>
                go to article
              </Button>{" "}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Box pt={5} className={classes.centerBotBtn}>
        <Button className={classes.bottomBtn}>
          {" "}
          Read More Articles <NavigateNextIcon />
        </Button>
      </Box>
    </div>
  );
};

export default BlogPage;
