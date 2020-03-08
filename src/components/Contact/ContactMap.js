import React, { Component } from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "./Contact.scss";

export default class ContactMap extends Component {
  state = {
    lat: 44.874241,
    lng: 20.645199,
    zoom: 13
  };

  render() {
    let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow
    });

    L.Marker.prototype.options.icon = DefaultIcon;
    const position = [this.state.lat, this.state.lng];
    return (
      <Map
        center={position}
        zoom={this.state.zoom}
        style={{ width: "100%", height: "400px" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Son Konum</Popup>
        </Marker>
      </Map>
    );
  }
}
