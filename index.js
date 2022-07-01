import React, { Component } from 'react';
import { render } from 'react-dom';
import { withScriptjs } from "react-google-maps";
import Map from './Map';


const App = () => {
  const MapLoader = withScriptjs(Map);

  return (
    <MapLoader
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC1THYvu7gZez3FRdeuDxodPlqoxivOFLw&libraries=places"
      loadingElement={<div style={{ height: `100%` }} />}
    />
  );
};

render(<App />, document.getElementById('root'));
