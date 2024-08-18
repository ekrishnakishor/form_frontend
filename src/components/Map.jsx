import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Pin from "../assets/pin.png";
import "../Styles/Map.css";

const customIcon = new L.Icon({
  iconUrl: Pin,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const locations = [
  { id: 1, position: [40.712776, -74.005974], name: "New York" },
  { id: 2, position: [43.075968, -107.290283], name: "Wyoming" },
  { id: 3, position: [34.052235, -118.243683], name: "Los Angeles" },
  { id: 4, position: [47.606209, -122.332069], name: "Seattle" },
];

const Map = () => {
  const bounds = [
    [24.396308, -125.0], // Southwest coordinates
    [49.384358, -66.93457], // Northeast coordinates
  ];

  return (
    <div className="map-section">
      <h2>Our Locations</h2>
      <MapContainer
        center={[40.712776, -74.005974]}
        zoom={4}
        className="map-container"
        scrollWheelZoom={false}
        maxBounds={bounds}
        doubleClickZoom={false}
        touchZoom={false}
        dragging={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='<a href="https://carto.com/"></a>'
        />
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
            icon={customIcon}
          >
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
