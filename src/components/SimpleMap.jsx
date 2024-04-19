import { useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import cities from "../data/data";
import MapAnimation from "./MapAnimation";

const SimpleMap = () => {
  const mapRef = useRef(null);
  const maxBounds = [
    [-90, -180],
    [90, 180],
  ]; // Full world bounds
  const minBounds = [
    [-85, -180],
    [85, 180],
  ];

  return (
    <div style={{ position: "relative", zIndex: "0" }}>
      <MapContainer
        center={[30, 0]} // Set the initial center of the map
        zoom={3} // Set the initial zoom level of the map
        ref={mapRef}
        scrollWheelZoom={false} // Enable scroll wheel zoom
        style={{ height: `calc(100vh - 60px)`, width: "100vw" }}
        maxBounds={maxBounds}
        minBounds={minBounds}
        zoomControl={false} // Disable default zoom control
        minZoom={3}
      >
        <MapAnimation />
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          subdomains="abcd"
          maxZoom={20}
        />
        {cities.map((city) => (
          <Marker key={city.id} position={[city.latitude, city.longitude]}>
            <Popup>{city.name}</Popup>
            <Tooltip>
              <div>
                <h2>{city.name}</h2>
                <p>Population: {city.population}</p>
                <p>Humidity: {city.humidity}</p>
              </div>
            </Tooltip>
          </Marker>
        ))}
        <ZoomControl position="bottomright" />{" "}
      </MapContainer>
    </div>
  );
};

export default SimpleMap;
