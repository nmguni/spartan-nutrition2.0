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
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import grey from "@material-ui/core/colors/grey";

import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
  InfoWindow
} from "react-google-maps";

import mapStyles from "../styles/mapStyles";

export default function Contact() {
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      {" "}
      <Grid container style={{ height: "100vh" }} spacing={2}>
        <Grid item sm={12} md={6}>
          <GoogleMaps />
        </Grid>
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

      <InfoWindow
        className="clicked"
        position={{ lat: 43.02763, lng: -81.27553 }}
      >
        <div>Masionvill Location</div>
      </InfoWindow>
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));
const REACT_APP_GOOGLE_KEY = "AIzaSyBSaH0qezKKMHsCLifGQP4sm_Bq0vhTO84";
const GoogleMaps = () => {
  return (
    <div style={{ width: "100%", height: "90vh" }}>
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
  return (
    <div>
      <Box style={{ backgroundColor: "#eee" }} mt={15}>
        <Paper>
          <Typography variant="h2">CONTACT INFO</Typography> <br />
          <Typography variant="h4">Masonville Location</Typography>
          <Typography variant="body1">519-601-5911</Typography>
          <Typography variant="h4">Pine Valley Location</Typography>
          <Typography variant="body1">519-601-9440</Typography>
          <Typography variant="h4">Wellington Location</Typography>
          <Typography variant="body1">519-690-1800</Typography>
        </Paper>
      </Box>
    </div>
  );
};
