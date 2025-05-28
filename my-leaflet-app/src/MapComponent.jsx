import React from 'react';
import { MapContainer, TileLayer, Marker, Popup , GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import customMaker from 'C:/AIResQ/SUMMER_INTERN_2025/my-leaflet-app/src/assets/map_icon.png';

// Define multiple location
const locations = [
  { position: [51.505, -0.09], label: 'Location 1' },
  { position: [51.51, -0.1], label: 'Location 2' },
  { position: [51.508, -0.08], label: 'Location 3' },
];

// custom marker icon
const customIcon = new L.Icon({
    iconUrl: customMaker,
    iconSize: [32,32],
    iconAnchor: [16,48],   // where the point of the icon is
    popupAnchor: [0,-48]   // position of popup relative to icon
});

// GeoJSON data for dynamic map layer
const geoJsonData = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: { name: 'My Polygon' },
            geometry: {
                type: 'Polygon',
                coordinates: [ 
                    [ // outer ring of polygon
                         [-0.09, 51.505],
                         [-0.08, 51.51],
                         [-0.12, 51.51],
                         [-0.09, 51.505], // same as the first
                    ]
                ]    
            }
        }
    ]
};

const MapComponent = () => {
    
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
       
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />

        {locations.map((loc, index) => (  // .map() to render multiple markup componants
            <Marker key={index} position={loc.position}>
               <Popup>{loc.label}</Popup> 
            </Marker>
        ))}

        <Marker position={[51.507, -0.09]}  icon={customIcon}>
        <Popup>Custom icon popup.<br />Easily customizable.</Popup>
      </Marker>  
       <GeoJSON data={geoJsonData} style={{ color: 'red', weight: 2, fillOpacity: 0.3 }} />

    </MapContainer>
  );
};

export default MapComponent;