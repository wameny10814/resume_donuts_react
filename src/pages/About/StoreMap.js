import { useRef, useState } from 'react';
import {
  useJsApiLoader,
  GoogleMap,
  MarkerF,
  MarkerClusterer,
  DirectionsRenderer,
} from '@react-google-maps/api';
import BasicTabs from './BasicTabs';

import H2 from '../../components/H2';
function StoreMap() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDLkElszSVl12F3Pt6hA1Jo7_7eWP_ERno',
  });

  const [directionResponse, setDirectionResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
<<<<<<< HEAD

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef();

  const center = { lat: 25.0337702, lng: 121.5433378 };
=======
  const [move, setMove] = useState('');

  const center = { lat: 25.0337702, lng: 121.5433378 };

  const stores = [
    { lat: 25.0337702, lng: 121.5433378 }, //大安
    { lat: 25.0480099, lng: 121.5170087 }, //北車
    { lat: 25.0404691, lng: 121.5667799 }, //市府
  ];

>>>>>>> b546b9a9d94615df5b2112ae104f986ad31bd7b3
  const [mapInstance, seMapInstance] = useState(null);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  async function caculateRoute() {
    if (originRef.current.value === '' || destinationRef.current.value === '') {
      return;
    }

    const o = JSON.parse(originRef.current.value);
    const d = JSON.parse(destinationRef.current.value);
    // eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionsService();
    const results = await directionService.route({
      // eslint-disable-next-line no-undef
      origin: new google.maps.LatLng(o.lat, o.lng),
      // eslint-disable-next-line no-undef
      destination: new google.maps.LatLng(d.lat, d.lng),
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionResponse(null);
    setDistance('');
    setDuration('');
    originRef.current.value = '';
    destinationRef.current.value = '';
  }

  const stores = [
    { lat: 25.0337702, lng: 121.5433378 }, //大安
    { lat: 25.0480099, lng: 121.5170087 }, //北車
    { lat: 25.0404691, lng: 121.5667799 }, //市府
  ];

  const onLoad = (map) => {
    seMapInstance(map);
  };

  function createKey(stores) {
    return stores.lat + stores.lng;
  }

  return (
    <section className="container mt-5 pt-5">
      <H2 title="店鋪資訊" Entitle="MAP" />
      <div className="d-md-flex">
        <div className="col-12 col-md-6 mapInfo">
          {/* 頁籤插件 把panTo()跟stores傳進去 */}
          <BasicTabs
            duration={duration}
            distance={distance}
            caculateRoute={caculateRoute}
            stores={stores}
            moveTo={(to) => {
              mapInstance.panTo(to);
            }}
          ></BasicTabs>
        </div>
        <div className="col-12 col-md-6">
          <GoogleMap
            center={center}
            zoom={14}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            options={{
              mapId: ['7d73f43b257d967e'],
              disableDefaultUI: true, //關閉預設控制面板
              zoomControl: true,
            }}
            onLoad={onLoad}
          >
            {/* 套件BUG 只有註解再打開才會有作用 */}
            <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
              {(clusterer) =>
                stores.map((location) => (
                  <MarkerF
                    key={createKey(location)}
                    position={location}
                    clusterer={clusterer}
                    icon={{
                      url: './images/DountMap.gif',
                    }}
                  />
                ))
              }
            </MarkerClusterer>
            {/* 在地圖上顯示路徑 */}
            {directionResponse && (
              <DirectionsRenderer directions={directionResponse} />
            )}
          </GoogleMap>
<<<<<<< HEAD
          <input
            type="text"
            ref={originRef}
            defaultValue={`{ "lat": 25.0337702, "lng": 121.5433378 }`}
          />
          <input
            type="text"
            ref={destinationRef}
            defaultValue={`{ "lat": 25.0480099, "lng": 121.5170087 }`}
          />
          <button onClick={caculateRoute}>計算</button>
          <button onClick={clearRoute}>重設</button>
          <span>{distance}</span>
          <span>{duration}</span>
=======
>>>>>>> b546b9a9d94615df5b2112ae104f986ad31bd7b3
        </div>
      </div>
    </section>
  );
}
export default StoreMap;
