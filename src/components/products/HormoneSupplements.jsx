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
import alpha from "./images/alpha-jack.jpg";
import estroControll from "./images/estro-controll.jpg";
import estroBgImge from "./images/estro-control.png";
import hormone from "./images/synermag.png";

// icons
import StarIcon from "@material-ui/icons/Star";
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
    backgroundSize: "cover",
  },
  mediaTwo: {
    height: "100%",
    backgroundSize: "contain ",
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
}));

const Hormones = () => {
  const classes = useStyles();
  return (
    <div className={productStyles.container}>
      <Grid container>
        <Grid item sx={12} md={6}>
          <Box className={productStyles.content}>
            <Typography className={classes.title}>
              Hormone Supplements
            </Typography>
            <Typography className={classes.body} variant="body1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lore. Lore. Lorem Ipsum has been them Ipsum has been
              them Ipsum has been the industry's{" "}
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Card elevation={0} variant="outlined" className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={estroControll}
                    title="Contemplative Reptile"
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
                    title="Contemplative Reptile"
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
            image={hormone}
            title="Contemplative Reptile"
          />
          {/* </Card> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Hormones;
