import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import headerStyles from "./header.module.scss";

import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";

// let theme = createMuiTheme();

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
    boxShadow: "none",
    height: "100%",
    // backgroundColor: "#cccccc47",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  root: {
    color: theme.palette.text.primary,
  },
  btnMargin: {
    marginRight: "1rem",
    color: "#256d52",
    backgroundColor: "#c7c7c71a",
    boxShadow: "none",
  },
  title: {
    fontWeight: "400",
    color: "#256d52",
    fontSize: "10rem",
  },
}));

export default function HeaderContent() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.paper}>
        <HeaderLeftContent />
      </Paper>
    </div>
  );
}

const theme = createMuiTheme();

const HeaderLeftContent = () => {
  const classes = useStyles();

  return (
    <div className={headerStyles.headColor}>
      <Box
        display="flex"
        flexDirection="column"
        alignContent="center"
        alignItems="center"
        justifyContent="space-around  "
        style={{ marginTop: " 15%" }}
      >
        <Typography className={classes.title} variant="h1">
          Spartan Nutrition
        </Typography>

        <Typography
          gutterBottom
          style={{
            fontSize: "3.5rem",

            opacity: ".1",
            textAlign: "center",
          }}
          variant="body1"
        >
          ASK THE EXPERTS!
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          alignContent="center"
          alignItems="center"
        >
          <Button className={classes.btnMargin} variant="contained">
            Shop All Suplements
          </Button>
          <Typography>Local Same Day Delivery Only $5.00</Typography>
        </Box>
      </Box>
    </div>
  );
};
