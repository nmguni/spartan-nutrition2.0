import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

import EcoIcon from "@material-ui/icons/Eco";

import headerStyles from "./header.module.scss";

const useStyles = makeStyles(theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  root: {
    color: theme.palette.text.primary
  }
}));

export default function HeaderContent() {
  const classes = useStyles();

  return (
    <div>
      <Grid className={headerStyles.headerContent} container spacing={3}>
        <Grid className={headerStyles.bgColorOne} item xs={6}>
          <Paper className={classes.paper}>
            <HeaderLeftContent />
          </Paper>
        </Grid>
        <Grid className={headerStyles.bgcolorTwo} item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h1">RIGHT</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const HeaderLeftContent = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div className={classes.root}>
            <EcoIcon style={{ color: green[500], fontSize: 40 }} />
          </div>
        </Grid>
        <Grid item xs={4}>
          <EcoIcon style={{ color: green[500], fontSize: 40 }} />
        </Grid>
        <Grid item xs={4}>
          <EcoIcon style={{ color: green[500], fontSize: 40 }} />
        </Grid>
      </Grid>
      <Typography className={headerStyles.title} variant="h3">
        Welcome to <br /> Spartan Nutrition{" "}
        <Typography style={{ paddingTop: "2rem" }} variant="body1">
          emaining essentially unchanged. It was popularised <br /> in the 1960s
          with the release of
        </Typography>
      </Typography>

      <Grid container>
        <Grid item xs={6}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Typography>Lifetime Guarantee</Typography>
        </Grid>
      </Grid>
    </div>
  );
};
