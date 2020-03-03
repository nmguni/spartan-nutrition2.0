import React from "react";
import sleepStyles from "../styles/sleep.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import SleepCards from "./sleep/sleepCards";

import EcoIcon from "@material-ui/icons/Eco";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
    cursor: "pointer"
  }
}));

export default function Sleep() {
  const classes = useStyles();

  return (
    <div className={(classes.root, sleepStyles.section)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            {" "}
            <EcoIcon style={{ fontSize: 15 }} /> Get to Slep
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            {" "}
            <EcoIcon style={{ fontSize: 15 }} /> Feel Super{" "}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            {" "}
            <EcoIcon style={{ fontSize: 15 }} /> Relieve Stress
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            {" "}
            <EcoIcon style={{ fontSize: 15 }} /> For Vegans
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            {" "}
            <EcoIcon style={{ fontSize: 15 }} /> For Kids
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            {" "}
            <EcoIcon style={{ fontSize: 15 }} /> Shop all Supplements
          </Paper>
        </Grid>
      </Grid>
      <SleepCards />
    </div>
  );
}
