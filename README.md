# Learning Leaflet and Map Modifications in React with Vite

## Introduction
This README is designed to guide you through the basics of integrating and modifying maps using the [Leaflet.js](https://leafletjs.com/) library in a React project. The project setup uses Vite as the build tool for optimal performance.

---

## Prerequisites
1. **Node.js**: Install [Node.js](https://nodejs.org/) if not already installed.
2. **VS Code**: Ensure you have Visual Studio Code installed.

---

## Project Setup

1. **Create a Vite project:**
   ```bash
   npm create vite@latest my-leaflet-app
   cd my-leaflet-app
   npm install
   ```

2. **Install dependencies:**
   ```bash
   npm install react react-dom leaflet react-leaflet
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

---

## Adding Leaflet to the Project

1. **Import Leaflet styles:**
   In `index.html`, include the Leaflet CSS:
   ```html
   <link
     rel="stylesheet"
     href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
   />
   ```

2. **Basic Map Component:**
   Create a file named `MapComponent.jsx` in the `src` directory:
   ```jsx
   import React from 'react';
   import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
   import 'leaflet/dist/leaflet.css';

   const MapComponent = () => {
     return (
       <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100%' }}>
         <TileLayer
           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
         />
         <Marker position={[51.505, -0.09]}>
           <Popup>A pretty popup.<br />Easily customizable.</Popup>
         </Marker>
       </MapContainer>
     );
   };

   export default MapComponent;
   ```

3. **Integrate the Map in `App.jsx`:**
   ```jsx
   import React from 'react';
   import MapComponent from './MapComponent';

   const App = () => {
     return (
       <div>
         <h1>Leaflet Map</h1>
         <MapComponent />
       </div>
     );
   };

   export default App;
   ```

4. **Run the app:**
   ```bash
   npm run dev
   ```

---

## Learning Objectives

### 1. **Adding Markers**
   Modify the `MapComponent` to add multiple markers:
   ```jsx
   const locations = [
     { position: [51.505, -0.09], label: 'Location 1' },
     { position: [51.51, -0.1], label: 'Location 2' },
   ];

   return (
     <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100%' }}>
       <TileLayer
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
       />
       {locations.map((loc, index) => (
         <Marker key={index} position={loc.position}>
           <Popup>{loc.label}</Popup>
         </Marker>
       ))}
     </MapContainer>
   );
   ```

### 2. **Customizing Icons**
   Replace default markers with custom icons:
   ```jsx
   import L from 'leaflet';

   const customIcon = new L.Icon({
     iconUrl: 'path/to/icon.png',
     iconSize: [25, 41],
     iconAnchor: [12, 41],
   });

   <Marker position={[51.505, -0.09]} icon={customIcon}>
     <Popup>Custom Icon Popup</Popup>
   </Marker>
   ```

### 3. **Using GeoJSON**
   Load GeoJSON data for dynamic map layers:
   ```jsx
   import { GeoJSON } from 'react-leaflet';

   const geoJsonData = {
     type: 'FeatureCollection',
     features: [
       {
         type: 'Feature',
         properties: { name: 'Polygon' },
         geometry: {
           type: 'Polygon',
           coordinates: [
             [
               [-0.09, 51.505],
               [-0.08, 51.51],
               [-0.12, 51.51],
               [-0.09, 51.505],
             ],
           ],
         },
       },
     ],
   };

   <GeoJSON data={geoJsonData} />;
   ```

---

## Resources
1. [Leaflet.js Documentation](https://leafletjs.com/reference.html)
2. [React-Leaflet Documentation](https://react-leaflet.js.org/)
3. [OpenStreetMap](https://www.openstreetmap.org/)

---

## Troubleshooting
- Ensure Leaflet's CSS file is included.
- Use a valid tile server URL for `TileLayer`.
- If markers do not appear, verify the position coordinates.

---

## Next Steps
- Explore advanced Leaflet features like layers, controls, and events.
- Experiment with plugins such as Leaflet Draw and Leaflet Routing Machine.
- Optimize performance for large datasets.

Enjoy working with Leaflet and building interactive maps!
