import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  Itemroot: {
    padding: ".5rem"
  },
  root: {
    flexGrow: 1
  }
}));

export default function Links() {
  const classes = useStyles();
  return (
    <div>
      <Box>
        <Grid className={classes.root} container>
          <Grid item className={classes.Itemroot} md={4}>
            <Paper style={{ height: "4rem" }}>
              <Typography variant="subtitle1">Protein</Typography>
            </Paper>
          </Grid>
          <Grid item className={classes.Itemroot} md={4}>
            <Paper>
              <Typography variant="subtitle1">Protein</Typography>
            </Paper>
          </Grid>
          <Grid item className={classes.Itemroot} md={4}>
            <Paper>
              <Typography variant="subtitle1">Protein</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item className={classes.Itemroot} md={4}>
            <Paper>
              <Typography variant="subtitle1">Protein</Typography>
            </Paper>
          </Grid>
          <Grid item className={classes.Itemroot} md={4}>
            <Paper>
              <Typography variant="subtitle1">Protein</Typography>
            </Paper>
          </Grid>
          <Grid item className={classes.Itemroot} md={4}>
            <Paper>
              <Typography variant="subtitle1">Protein</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
