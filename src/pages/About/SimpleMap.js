import React from 'react';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';

const center = { lat: 25.0339157, lng: 121.5428648 };

function SimpleMap() {
  const { isLoaded } = useJsApiLoader({
    // googleMapsApiKey: 'AIzaSyDLkElszSVl12F3Pt6hA1Jo7_7eWP_ERno',
  });

  if (!isLoaded) {
    return <p>Loading</p>;
  }

  return (
    <GoogleMap
      center={center}
      zoom={16}
      mapContainerStyle={{ width: '100%', height: '100%' }}
      options={{
        // 關閉控制面板 縮放,街景,衛星/地形,全螢幕
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
export default SimpleMap;
