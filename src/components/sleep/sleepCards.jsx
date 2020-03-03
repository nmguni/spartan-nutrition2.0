import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";

import ReactDOM from "react-dom";

import Avatar from "@material-ui/core/Avatar";

import Divider from "@material-ui/core/Divider";

// icons
import Brightness3Icon from "@material-ui/icons/Brightness3";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {},
  control: {
    padding: theme.spacing(2)
  },
  //   Card styles --------
  card: {
    width: 350,
    height: 550,
    position: "relative",
    marginTop: "3rem",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    },
    cardContent: {
      width: 350,
      height: 550,
      marginTop: "3rem",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
      }
    }
  },
  cardThree: {
    width: 200,
    positsion: "center,"
  },
  media: {
    paddingTop: "100%",
    width: "100%"
  },
  content: {},
  divider: {},
  heading: {
    fontWeight: "bold"
  },
  subheading: {},

  overlay: {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    color: "black",
    backgroundColor: "white",
    padding: ".8rem",
    borderRadius: "10px",
    fontWeight: "bold",
    letterSpacing: ".1rem"
  },
  innerText: {
    color: "green",
    marginLeft: "1.5rem",
    fontSize: ".8rem",
    fontWeight: "100"
  }
}));

export default function SleepCards() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    <div>
      <Grid container className={classes.root} spacing={1}>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardMedia className={classes.media} />

            <Typography
              className={classes.overlay}
              variant="contained"
              color="primary"
            >
              Sleep Wellness{" "}
              <span className={classes.innerText}>Read Article > </span>
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Typography
            variant="h6"
            style={{ marginTop: "3rem" }}
            className={classes.cardContent}
          >
            <Brightness3Icon /> Fall asleep, stay asleep
          </Typography>
          <Box mt={3}>
            <Typography Typography="subtitle1">
              {" "}
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
            <Box mt={2}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}>
                    {" "}
                    <CheckCircleIcon style={{ fontSize: "17" }} />
                    Get Back to Healthy Sleep
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}>
                    {" "}
                    <CheckCircleIcon style={{ fontSize: "17" }} />
                    Wake up Refreashed
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}>
                    {" "}
                    <CheckCircleIcon style={{ fontSize: "17" }} />
                    Set a Healthier Sleep Pattern
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}>
                    {" "}
                    <CheckCircleIcon style={{ fontSize: "17" }} />
                    Boost Energy & Metabolism
                  </Paper>
                </Grid>
              </Grid>

              <Box mt={2}>
                <Grid container spacing={2}>
                  <Grid item sx={6}>
                    <Card className={classes.root}>
                      <CardContent>
                        <Typography
                          className={classes.title}
                          color="textSecondary"
                          gutterBottom
                        >
                          Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2"></Typography>
                        <Typography
                          className={classes.pos}
                          color="textSecondary"
                        >
                          adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                          well meaning and kindly.
                          <br />
                          {'"a benevolent smile"'}
                        </Typography>
                      </CardContent>

                      <Button size="small">Learn More</Button>
                    </Card>
                  </Grid>
                  <Grid item sx={6}>
                    <Card className={classes.root}>
                      <CardContent>
                        <Typography
                          className={classes.title}
                          color="textSecondary"
                          gutterBottom
                        >
                          Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2"></Typography>
                        <Typography
                          className={classes.pos}
                          color="textSecondary"
                        >
                          adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                          well meaning and kindly.
                          <br />
                          {'"a benevolent smile"'}
                        </Typography>
                      </CardContent>

                      <Button size="small">Learn More</Button>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
