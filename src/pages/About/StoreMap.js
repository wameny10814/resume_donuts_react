import { useState } from 'react';
import { useJsApiLoader, GoogleMap, MarkerF } from '@react-google-maps/api';
import ProjectButton from '../../components/ProjectButton/ProjectButton';

import H2 from './H2';
function StoreMap() {
  const { isLoaded } = useJsApiLoader({
    // googleMapsApiKey: 'AIzaSyDLkElszSVl12F3Pt6hA1Jo7_7eWP_ERno',
  });

  const [map, setMap] = useState({ lat: 25.0337702, lng: 121.5433378 });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  const stores = [
    { lat: 25.0480099, lng: 121.5170087 }, //北車
    { lat: 25.0337702, lng: 121.5433378 }, //大安
    { lat: 25.0404691, lng: 121.5667799 }, //市府
  ];

  return (
    <section className="container">
      <H2 title="店鋪資訊" Entitle="MAP" />
      <div className="d-flex">
        <div className="col-md-6 mapInfo">
          <div className="">
            <button
              className="ProjectButton"
              // onClick={setMap(stores[0])}
              onClick={() => map.panTo(stores[0])}
            >
              北車店
            </button>
            <button
              className="ProjectButton"
              onClick={() => map.panTo(stores[1])}
            >
              大安店
            </button>
            <button
              className="ProjectButton"
              onClick={() => map.panTo(stores[2])}
            >
              市府店
            </button>
          </div>
          <p className="bingH4">ポッチーパン屋 大安店</p>
          <ul>
            <li>
              <p className="bingH4">地址</p>
              <p className="bingText-16">106台北市大安區復興南路一段390號2樓</p>
            </li>
            <li>
              <p className="bingH4">聯絡電話</p>
              <p className="bingText-16">02-33778778</p>
            </li>
            <li>
              <p className="bingH4">E-MAIL</p>
              <p className="bingText-16">LoveMeowDonut@meowmeow.com</p>
            </li>
            <li>
              <p className="bingH4">營業時間</p>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">營業起訖</th>
                    <th scope="col">月</th>
                    <th scope="col">火</th>
                    <th scope="col">水</th>
                    <th scope="col">木</th>
                    <th scope="col">金</th>
                    <th scope="col">土</th>
                    <th scope="col">日</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">10：00～20：00</th>
                    <td>
                      <i className="fa-regular fa-circle"></i>{' '}
                    </td>
                    <td>
                      <i className="fa-solid fa-circle"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-circle"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-circle"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-circle"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-circle"></i>
                    </td>
                    <td>
                      <i className="fa-solid fa-circle"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <GoogleMap
            center={map}
            zoom={16}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            options={{
              mapId: ['7d73f43b257d967e'],
              disableDefaultUI: true, //關閉預設控制面板
              zoomControl: true,
            }}
            onLoad={(map) => {
              setMap();
            }}
          >
            {/* React.18 要加F */}
            {stores.map((v, i) => {
              return <MarkerF key={i} position={stores[i]} />;
            })}
          </GoogleMap>
        </div>
      </div>
    </section>
  );
}
export default StoreMap;
