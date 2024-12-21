import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box } from '@mui/material';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Configuration des icônes pour éviter les problèmes d'affichage
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapComponent = () => {
  const position = [34.6804, -1.9110]; // Coordonnées pour Oujda

  return (
    <Box sx={{ height: '300px', width: '100%' }}>
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            LOTISSEMENT N 01, OUJDA 60050 <br /> · 47 km
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default MapComponent;
