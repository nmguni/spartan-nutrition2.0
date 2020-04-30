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
import protein from "./images/protein-powder.png";
import proteinScoop from "./images/protein-scoop.jpg";
import proteinScoopWhite from "./images/protein-scoop-white.jpg";
import headerStyles from "../header/header.module.scss";

import StarIcon from "@material-ui/icons/Star";

import StarHalfIcon from "@material-ui/icons/StarHalf";

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
    backgroundSize: "contain",
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

const Protein = () => {
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
            image={protein}
            title="Contemplative Reptile"
          />
          {/* </Card> */}
        </Grid>
        <Grid item sx={12} md={6}>
          <Box className={productStyles.content}>
            <Typography className={classes.title}>
              Performance & Recovery
            </Typography>
            <Typography className={classes.body} variant="body1">
              Protein powders are very popular among health-conscious people.
              There are numerous types of protein powder made from a wide
              variety of sources. As there are so many options, it can be
              difficult to determine which will provide optimal results.
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <ul className={classes.listStyles}>
                <li>Whey Protein</li>
                <li>Casein Protein </li>
              </ul>
              <ul className={classes.listStyles}>
                <li>Egg Protein</li>
                <li> Pea Protein </li>
              </ul>
              <ul className={classes.listStyles}>
                <li>Hemp Protein </li>
                <li>Brown Rice Protein </li>
              </ul>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Card elevation={0} variant="outlined" className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={proteinScoop}
                    title="Contemplative Reptile"
                    style={{ opacity: ".9" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Whey Protein
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Whey protein comes from milk. <br /> It is the liquid that
                      separates from the curds during the cheesemaking process.
                      It's high in protein but also harbors lactose, a milk
                      sugar that many people have difficulty digesting. Some
                      Wheys come with digestive enzymes
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
                    image={proteinScoopWhite}
                    title="Contemplative Reptile"
                    style={{ opacity: ".9" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Casein Protein
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Like whey, casein is a protein found in milk. However,
                      casein is digested and absorbed much more slowly. Casein
                      forms a gel when it interacts with stomach acid, slowing
                      down stomach emptying and delaying your bloodstream’s
                      absorption of amino acids.
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
      </Grid>
    </div>
  );
};

export default Protein;
