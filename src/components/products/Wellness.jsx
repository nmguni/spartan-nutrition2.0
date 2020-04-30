import React from "react";
import productStyles from "./product.module.scss";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

// imges
import bgImg from "./images/test.png";
import blueberries from "./images/blueberries-raspberries.jpg";
import veggies from "./images/assorted-vegetable.jpg";

// ICONS

import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";

import headerStyles from "../header/header.module.scss";
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "2rem",
    color: "#313131ea",
    fontWeight: "bold",
  },
  body: {
    paddingTop: ".5rem",
    lineHeight: "1.5rem",
    color: "#313131ba",
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
}));

const Wellness = () => {
  const classes = useStyles();
  return (
    <div className={productStyles.container}>
      <Grid container>
        <Grid
          className={headerStyles.headColor}
          style={{ padding: "2.5rem" }}
          item
          sx={12}
          md={6}
        >
          {/* <Card elevation={0} variant="outlined" className={classes.rootTwo}> */}
          <CardMedia
            className={classes.mediaTwo}
            image={bgImg}
            title="Contemplative Reptile"
          />
          {/* </Card> */}
        </Grid>
        <Grid item sx={12} md={6}>
          <Box className={productStyles.content}>
            <Typography className={classes.title}>
              HEALTH AND WELLNESS
            </Typography>
            <Typography className={classes.body} variant="body1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lore. Lore. Lorem Ipsum has been them Ipsum has been
              them Ipsum has been the industry's
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <ul className={classes.listStyles}>
                <li> Antioxidants </li>
                <li>Phytonutrients </li>
              </ul>
              <ul className={classes.listStyles}>
                <li> Fruit Concentrates </li>
                <li> Berry Concentrates</li>
              </ul>
              <ul className={classes.listStyles}>
                <li> Romotes mental clarity</li>
                <li>Increases energy </li>
              </ul>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Card elevation={0} variant="outlined" className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={blueberries}
                    title="Contemplative Reptile"
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
                  <StarIcon style={{ color: "rgba(170, 130, 0, 0.69)" }} />
                  <StarIcon style={{ color: "rgba(170, 130, 0, 0.69)" }} />
                  <StarIcon style={{ color: "rgba(170, 130, 0, 0.69)" }} />
                  <StarHalfIcon style={{ color: "rgba(170, 130, 0, 0.69)" }} />
                </CardActions>
              </Card>
              <Card elevation={0} variant="outlined" className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={veggies}
                    title="Contemplative Reptile"
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
                  <StarIcon style={{ color: "rgba(170, 130, 0, 0.69)" }} />
                  <StarIcon style={{ color: "rgba(170, 130, 0, 0.69)" }} />
                  <StarIcon style={{ color: "rgba(170, 130, 0, 0.69)" }} />
                  <StarBorderIcon
                    style={{ color: "rgba(170, 130, 0, 0.69)" }}
                  />
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
