import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import headerStyles from "./header.module.scss";

import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

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
    marginBottom: theme.spacing(1),
    boxShadow: "none",
    height: "500px",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  root: {
    color: theme.palette.text.primary
  },
  btnMargin: {
    marginRight: "1rem"
  }
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
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignContent="center"
        alignItems="center"
        justifyContent="space-around  "
        // p={1}
        // mt={3}
      >
        <Typography className={headerStyles.title} variant="h1">
          Welcome to Spartan Nutrition{" "}
          <Typography
            style={{
              paddingTop: "2rem",
              fontSize: "3.5rem",

              opacity: ".2",
              textAlign: "center"
            }}
            variant="body1"
          >
            ASK THE EXPERTS!
          </Typography>
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          alignContent="center"
          alignItems="center"
          // mt={1}
        >
          <Button className={classes.btnMargin} variant="contained">
            Shop All Suplements
          </Button>
          <Typography>Local Same Day Delivery Only $5.00</Typography>
        </Box>
      </Box>
      {/* <Typography>ASK THE EXPERTS!</Typography> */}
    </div>
  );
};

// const HeaderRightContent = () => {
//   const useStyles = makeStyles(theme => ({
//     root: {
//       display: "flex",
//       flexWrap: "wrap",
//       "& > *": {
//         margin: theme.spacing(1),
//         width: theme.spacing(16),
//         height: theme.spacing(16)
//       }
//     },
//     paper: {
//       padding: theme.spacing(1),
//       color: theme.palette.text.secondary,
//       whiteSpace: "nowrap",
//       marginBottom: theme.spacing(1),
//       boxShadow: "none"
//     }
//   }));

//   const classes = useStyles();

//   return (
//     <div>
//       <Box
//         display="flex"
//         flexDirection="column"
//         alignContent="center"
//         alignItems="center"
//         justifyContent="space-around  "
//         p={1}
//         m={2}
//       >
//         <Paper className={classes.paper}>
//           <ThemeProvider theme={theme}>
//             <Typography className={headerStyles.title} variant="h4">
//               ASK THE EXPERTS!
//             </Typography>
//           </ThemeProvider>
//         </Paper>
//       </Box>
//     </div>
//   );
// };
