import React from "react";
import sleepStyles from "../styles/sleep.module.scss";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
    cursor: "pointer"
  },
  paperRoot: {
    display: "flex",
    "& > *": {
      // margin: theme.spacing(1),
      width: theme.spacing(35),
      height: theme.spacing(40)
    }
  },
  imgRoot: {
    display: "flex",
    "& > *": {
      // margin: theme.spacing(1),
      width: theme.spacing(50),
      height: theme.spacing(63)
    }
  },
  centerContent: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center"
    // justifyContent:"space-around  "
  }
}));

export default function Sleep() {
  const classes = useStyles();

  return (
    <div className={(classes.root, sleepStyles.section)}>
      <Grid style={{ height: "100vh" }} container>
        <Grid item sm={12} md={6}>
          <SleepImgCard />
        </Grid>
        <Grid item sm={12} md={6}>
          <SleepContentCard />
        </Grid>
      </Grid>
    </div>
  );
}

// responsive font
const theme = createMuiTheme();

theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem"
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem"
  }
};

// SLEEP RIGHT CARD
const SleepImgCard = () => {
  const classes = useStyles();

  return (
    <div>
      <Box mt={15}>
        <div className={classes.imgRoot}>
          <Paper variant="outlined">1</Paper>
        </div>
      </Box>
    </div>
  );
};

// SLEEP LEFT CARD

const SleepContentCard = () => {
  const classes = useStyles();

  return (
    <div>
      <Box mt={15} width={600}>
        <ThemeProvider theme={theme}>
          <Typography variant="h3">Fall asleep, stay asleep</Typography>
          <Typography style={{ paddingTop: "15px" }} variant="subtitle1">
            d not only five centuries, but also the leap into typesetting,
            remaining essentially unchanged. It was popularised in
          </Typography>
        </ThemeProvider>
        <Grid style={{ paddingTop: "15px" }} container>
          <Grid item sm={12} md={6}>
            <Typography>
              <CheckCircleIcon style={{ fontSize: 15, color: grey[500] }} /> Get
              Back to Healthy Sleep
            </Typography>
            <Typography>
              <CheckCircleIcon style={{ fontSize: 15, color: grey[500] }} /> Get
              Back to Healthy Sleep
            </Typography>
          </Grid>
          <Grid item sm={12} md={6}>
            <Typography>
              <CheckCircleIcon style={{ fontSize: 15, color: grey[500] }} /> Get
              Back to Healthy Sleep
            </Typography>
            <Typography>
              <CheckCircleIcon style={{ fontSize: 15, color: grey[500] }} /> Get
              Back to Healthy Sleep
            </Typography>
          </Grid>
        </Grid>

        <Grid style={{ paddingTop: "15px" }} container>
          <Grid item sm={12} md={6}>
            <div className={classes.paperRoot}>
              <Paper variant="outlined">1</Paper>
            </div>
          </Grid>
          <Grid item sm={12} md={6}>
            <div className={classes.paperRoot}>
              <Paper className={classes.paperRoot} variant="outlined">
                1
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
