import React from 'react';
import { useJsApiLoader, GoogleMap, MarkerF } from '@react-google-maps/api';

const stores = [
  { lat: 25.0339157, lng: 121.5428648 },
  { lat: 25.0476181, lng: 121.5152175 },
  { lat: 25.0374117, lng: 121.5636031 },
];

// const center = { lat: 25.0339157, lng: 121.5428648 };
// const taipei = { lat: 25.0476181, lng: 121.5152175 };
// const cityHall = { lat: 25.0374117, lng: 121.5636031 };
function SimpleMap() {
  const { isLoaded } = useJsApiLoader({
    // googleMapsApiKey: 'AIzaSyDLkElszSVl12F3Pt6hA1Jo7_7eWP_ERno',
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <GoogleMap
      center={stores[0]}
      zoom={16}
      mapContainerStyle={{ width: '100%', height: '100%' }}
      options={{
        // 關閉控制面板 縮放,街景,衛星/地形,全螢幕
        mapId: ['7d73f43b257d967e'],
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
    >
      {/* React.18 要加F */}
      <MarkerF position={stores[0]} />
      <MarkerF position={stores[1]} />
      <MarkerF position={stores[2]} />
    </GoogleMap>
  );
}
export default SimpleMap;
