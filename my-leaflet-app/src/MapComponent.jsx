import React from 'react';
import { MapContainer, TileLayer, Marker, Popup , GeoJSON , ImageOverlay} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import customMaker from 'C:/AIResQ/SUMMER_INTERN_2025/my-leaflet-app/src/assets/map_icon.png';


// Define multiple location
const locations = [
   { position: [10.8505, 76.2711], label: 'Kerala' }, // Kerala lat/lng
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
                        [77.0, 20.0],
                        [78.0, 21.0],
                        [76.0, 21.5],
                        [77.0, 20.0], // close the polygon , same as the first
                    ]
                ]    
            }
        }
    ]
};

const MapComponent = () => {

  const imageUrl = '/overlay2.png';
  const imageBounds = [
     [5.5546, 65.4500],     // Southwest of India (near Kanyakumari)
     [35.1800, 98.9800]     // Northeast of India (Arunachal)
  ];
    
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '100%', width: '100%' }}>
       
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />

      <ImageOverlay url={imageUrl} bounds={imageBounds} opacity={0.6} />

        {locations.map((loc, index) => (  // .map() to render multiple markup componants
            <Marker key={index} position={loc.position}>
               <Popup>{loc.label}</Popup> 
            </Marker>
        ))}

        <Marker position={[20.9100, 77.7500]}  icon={customIcon}>
        <Popup>[Custom icon popup]<br />Amravati</Popup>
      </Marker>  
       <GeoJSON data={geoJsonData} style={{ color: 'red', weight: 2, fillOpacity: 0.3 }} />

    </MapContainer>

    
    <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '10px',
        padding: '10px',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        zIndex: 1000,
        fontSize: '14px',
        lineHeight: '1.5em'
      }}>
        <strong>Flood Risk Legend</strong><br />
        <div><span style={{ background: 'red', display: 'inline-block', width: 12, height: 12, marginRight: 5 }}></span> Severe</div>
        <div><span style={{ background: 'orange', display: 'inline-block', width: 12, height: 12, marginRight: 5 }}></span> Moderate</div>
        <div><span style={{ background: 'yellow', display: 'inline-block', width: 12, height: 12, marginRight: 5 }}></span> Low</div>
        <div><span style={{ background: 'green', display: 'inline-block', width: 12, height: 12, marginRight: 5 }}></span> Safe</div>
        <div><span style={{ background: 'white', border: '1px solid #aaa', display: 'inline-block', width: 12, height: 12, marginRight: 5 }}></span> No Data</div>
      </div>
    </div>

  );
};

export default MapComponent;