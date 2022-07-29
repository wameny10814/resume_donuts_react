import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';


const center = [25.0339193, 121.5412233];

function LeafletMap() {
  return (
    <MapContainer
      center={center}
      zoom={16}
      style={{ width: '50vw', height: '50vh' }}
    ></MapContainer>
  );
}

export default LeafletMap;
