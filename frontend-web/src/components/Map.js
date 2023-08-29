import React from "react";
import GoogleMapReact from 'google-map-react';

const Marker = () => (
  
    <div
      style={{
        position: "absolute",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: "50%",
        color: "red",
        fontWeight: "bold"
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
       
        <path fill="red" d="M11 2a9 9 0 0 0-9 9c0 2.626 1.149 4.956 2.964 6.581l4.985 5.032a.5.5 0 0 0 .811 0l4.985-5.032A8.963 8.963 0 0 0 20 11c0-4.97-4.03-9-9-9zm0 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
      </svg>
    </div>
  );
export function SimpleMap({x,y}){
    console.log("run map")
  const defaultProps = {
    center: {
      lat: y,
      lng: x
    },
    zoom: 15
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDlrNI37h9D8pTA84nnYd-ydeFAJbijxP4" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={y}
          lng={x}
        fixed
        />
      </GoogleMapReact>
    </div>
  );
}