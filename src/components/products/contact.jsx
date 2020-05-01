import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
} from "react-google-maps";
import mapStyles from "../../styles/mapStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Hidden from "@material-ui/core/Hidden";
import LazyLoad from "react-lazyload";

const useStyles = makeStyles((theme) => ({
  root: {
    Width: "300px",
  },
  contactRoot: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "1.8rem",
    [theme.breakpoints.down(600)]: {
      justifyContent: "center",
    },
  },

  title: {
    fontSize: "1.5rem",
    color: "#fff",
  },
  pos: {
    marginBottom: 12,
    color: "#000",
  },
  titleOne: {
    fontSize: "2.8rem",
    fontWeight: "bold",
    marginTop: "1rem",
    color: "#313131ea",
  },
  cards: {
    backgroundColor: "#364f6bc2",
    padding: "1.2rem",
    margin: ".5rem",
  },
  number: {
    color: "#313131ea",
    textDecoration: "none",
    fontWeight: "bold",
  },
  address: {
    marginTop: ".5rem",
    fontWeight: "bold",
    color: "#313131ea",
  },
  Contactcontainer: {
    height: "100vh",
  },
}));

export default function Contact() {
  return (
    <div id="contact">
      <Grid container style={{ height: "100vh" }} spacing={2}>
        <Hidden only="sm">
          <Grid item sm={12} md={6}>
            <LazyLoad height={300}>
              <GoogleMaps />
            </LazyLoad>
          </Grid>
        </Hidden>
        <Grid item sm={12} md={6}>
          <ContactInfo />
        </Grid>
      </Grid>
    </div>
  );
}

function Map() {
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 42.984924, lng: -81.245277 }}
      defaultOptions={{ styles: mapStyles }}
    >
      <Marker
        position={{ lat: 43.02763, lng: -81.27553 }}
        onClick={() => {}}
      ></Marker>
      <Marker position={{ lat: 42.94014, lng: -81.2837 }}></Marker>
      <Marker position={{ lat: 42.9427, lng: -81.22638 }}></Marker>
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));
const REACT_APP_GOOGLE_KEY = "AIzaSyBSaH0qezKKMHsCLifGQP4sm_Bq0vhTO84";
const GoogleMaps = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

// SLEEP LEFT CARD

const ContactInfo = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.contactRoot}>
        <Typography className={classes.titleOne}>Contact Info</Typography>
        <Card className={classes.cards} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Masonville Location
            </Typography>
            <Typography variant="h5" component="h2"></Typography>
            <a className={classes.number} href="tel:519-601-5911 ">
              519-601-5911{" "}
            </a>
            <Typography
              className={classes.address}
              variant="body2"
              component="p"
            >
              109 Fanshawe Park Rd E, London, ON N5X 3X3
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.cards} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Pine Valley Location
            </Typography>
            <Typography variant="h5" component="h2"></Typography>
            <Typography className={classes.pos} color="textSecondary">
              <a className={classes.number} href="tel:519-601-9440 ">
                519-601-9440{" "}
              </a>
            </Typography>
            <Typography
              className={classes.address}
              variant="body2"
              component="p"
            >
              151 Pine Valley Blvd #2, London, ON N6K 3T6
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.cards} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Wellington Location
            </Typography>
            <Typography variant="h5" component="h2"></Typography>
            <Typography className={classes.pos} color="textSecondary">
              <a className={classes.number} href="tel:519-690-1800">
                519-690-1800{" "}
              </a>
            </Typography>
            <Typography
              className={classes.address}
              variant="body2"
              component="p"
            >
              841 Wellington Road, London, Ontario N6E 3R5
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
