import { useRef, useState } from 'react';
import {
  useJsApiLoader,
  GoogleMap,
  MarkerF,
  MarkerClusterer,
  DirectionsRenderer,
} from '@react-google-maps/api';
import TabPanel from './TabPanel';

import H2 from './H2';
function StoreMap() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDLkElszSVl12F3Pt6hA1Jo7_7eWP_ERno',
  });

  // const [directionResponse, setDirectionResponse] = useState(null);
  // const [distance, setDistance] = useState('');
  // const [duration, setDuration] = useState('');

  // /** @type React.MutableRefObject<HTNLInputElement> */
  // const originRef = useRef();
  // /** @type React.MutableRefObject<HTNLInputElement> */
  // const destiantionRef = useRef();

  const center = { lat: 25.0337702, lng: 121.5433378 };
  const [mapInstance, seMapInstance] = useState(null);
  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  // async function caculateRoute() {
  //   if (originRef.current.value === '' || destiantionRef.current.value === '') {
  //     return;
  //   }
  //   // eslint-disable-next-line no-undef
  //   const directionService = new google.maps.directionService();
  //   const results = await directionService.route({
  //     origin: originRef.current.value,
  //     destiantion: destiantionRef.current.value,
  //     // eslint-disable-next-line no-undef
  //     travelMode: google.maps.TravelMode.DRIVING,
  //   });
  //   setDirectionResponse(results);
  //   setDistance(results.routes[0].leg[0].distance.text);
  //   setDuration(results.routes[0].leg[0].duration.text);
  // }

  // function clearRoute() {
  //   setDirectionResponse(null);
  //   setDistance('');
  //   setDuration('');
  //   originRef.current.value = '';
  //   destiantionRef.current.value = '';
  // }

  const stores = [
    // { lat: 25.2480099, lng: 121.5170087 }, //測試
    // { lat: 25.6480099, lng: 121.5170087 }, //測試
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
          {/* <input type="text" ref={originRef} />
          <input type="text" ref={destiantionRef} />
          <button onClick={caculateRoute}>計算</button>
          <button onClick={clearRoute}>重設</button> */}

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
            {/* 只有註解再打開才會有作用 */}
            <MarkerClusterer>
              {(clusterer) =>
                stores.map((location) => (
                  <MarkerF
                    key={createKey(location)}
                    position={location}
                    clusterer={clusterer}
                    icon={{
                      url: './images/catpaw.svg',
                      scaledSize: new window.google.maps.Size(40, 40),
                    }}
                  />
                ))
              }
            </MarkerClusterer>
            {/* {directionResponse && (
              <DirectionsRenderer directions={directionResponse} />
            )} */}
          </GoogleMap>
        </div>
      </div>
    </section>
  );
}
export default StoreMap;
