import { useState } from 'react';
import {
  useJsApiLoader,
  GoogleMap,
  MarkerF,
  useGoogleMap,
  MarkerClusterer,
} from '@react-google-maps/api';
import TabPanel from './TabPanel';

import H2 from './H2';
function StoreMap() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDLkElszSVl12F3Pt6hA1Jo7_7eWP_ERno',
  });

  const center = { lat: 25.0337702, lng: 121.5433378 };
  const [mapInstance, seMapInstance] = useState(null);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  const stores = [
    { lat: 25.0480099, lng: 121.5170087 }, //北車
    { lat: 25.0337702, lng: 121.5433378 }, //大安
    { lat: 25.0404691, lng: 121.5667799 }, //市府
  ];

  const onLoad = (map) => {
    seMapInstance(map);
  };

  function createKey(stores) {
    return stores.lat + stores.lng;
  }
  return (
    <section className="container">
      <H2 title="店鋪資訊" Entitle="MAP" />
      <div className="d-flex">
        <div className="col-md-6 mapInfo">
          <div className="">
            <button
              className="ProjectButton"
              onClick={() => {
                mapInstance.panTo(stores[0]);
              }}
            >
              北車店
            </button>
            <button
              className="ProjectButton"
              onClick={() => mapInstance.panTo(stores[1])}
            >
              大安店
            </button>
            <button
              className="ProjectButton"
              onClick={() => mapInstance.panTo(stores[2])}
            >
              市府店
            </button>
          </div>
          <TabPanel></TabPanel>
        </div>
        <div className="col-md-6">
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            options={{
              mapId: ['7d73f43b257d967e'],
              disableDefaultUI: true, //關閉預設控制面板
              zoomControl: true,
            }}
            onLoad={onLoad}
          >
            {/* React.18 要加F */}
            {/* {stores.map((v, i) => {
              return (
                <MarkerF
                  key={i}
                  position={stores[i]}
                  icon={{
                    url: './images/catpaw.svg',
                    scaledSize: new window.google.maps.Size(40, 40),
                  }}
                />
              );
            })} */}

            <MarkerClusterer>
              {(clusterer) =>
                stores.map((location) => (
                  <MarkerF
                    key={createKey(location)}
                    position={location}
                    clusterer={clusterer}
                  />
                ))
              }
            </MarkerClusterer>
          </GoogleMap>
        </div>
      </div>
    </section>
  );
}
export default StoreMap;
