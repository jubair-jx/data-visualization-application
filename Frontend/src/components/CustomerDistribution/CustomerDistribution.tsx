import { coordinates } from "@/utils/coordinate";
import "leaflet/dist/leaflet.css"; // Ensure you import Leaflet CSS
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export interface CustomerData {
  _id: string;
  customerCount: number;
}

export interface MarkerType {
  position: [number, number];
  city: string;
  count: number;
}

const getCoordinates = (city: string): [number, number] => {
  return coordinates[city] || [0, 0];
};

const CustomerMap = ({ data }: { data: any }) => {
  const [markers, setMarkers] = useState<MarkerType[]>([]);

  useEffect(() => {
    const newMarkers = data?.data
      ?.map((item: any) => {
        const [lat, lng] = getCoordinates(item._id);
        return {
          position: [lat, lng] as [number, number],
          city: item._id,
          count: item.customerCount,
        };
      })
      .filter(
        (marker: any) => marker.position[0] !== 0 && marker.position[1] !== 0
      );
    setMarkers(newMarkers);
  }, [data]);

  return (
    <MapContainer
      center={[37.7749, -122.4194]} // Centered on San Francisco, adjust if needed
      zoom={4}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>
            {marker.city}
            <br />
            Customers: {marker.count}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CustomerMap;
