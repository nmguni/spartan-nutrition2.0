import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import headerStyles from "./header.module.scss";

import { makeStyles } from "@material-ui/core/styles";

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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    marginTop: " 15%",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down(700)]: {
      height: "60vh",
      marginTop: " 0",
      display: "flex",
      // flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
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
    fontSize: "10vw",
  },
  askText: {
    fontSize: "4vw",
    color: "rgba(118, 118, 118, 0.89)",
    textAlign: "center",
  },
  botLinks: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    [theme.breakpoints.down(650)]: {
      flexDirection: "column",
    },
  },
  devivery: {
    [theme.breakpoints.down(650)]: {
      marginTop: ".5rem",
    },
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

const HeaderLeftContent = () => {
  const classes = useStyles();

  return (
    <div className={headerStyles.headColor}>
      <Box className={classes.innerContainer}>
        <Typography className={classes.title} variant="h1">
          Spartan Nutrition
        </Typography>

        <Typography gutterBottom className={classes.askText} variant="body1">
          ASK THE EXPERTS!
        </Typography>
        <Box className={classes.botLinks}>
          <Button className={classes.btnMargin} variant="contained">
            Shop All Suplements
          </Button>
          <Typography className={classes.devivery}>
            Local Same Day Delivery Only $5.00
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
