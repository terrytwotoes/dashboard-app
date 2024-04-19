import { useEffect } from "react";
import { useMap } from "react-leaflet";

const MapController = () => {
  const map = useMap();
  const flyDuration = 2;

  useEffect(() => {
    // Define the coordinates for Paris
    const parisCoordinates = [48.8566, 2.3522];

    // Fly to Paris with a zoom level of 4 over the specified duration
    map.flyTo(parisCoordinates, 4, {
      animate: true,
      duration: flyDuration,
    });
  }, [map]);

  return null;
};

export default MapController;
