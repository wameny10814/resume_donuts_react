import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useRef,
} from 'react';
import { useForm } from 'react-hook-form';
import { countries, townships, postcodes } from '../../Cart/data/townships';
import AuthContext from '../../../pages/member/components/AuthContext';

import axios from 'axios';
import { clearConfigCache } from 'prettier';

// shipName: '',
// shipPhone: '',
// shipEmail: '',

function PersonalInfo(props) {
  const {
    personalData,
    setPersonalData,
    handleFieldChange,
    setPersonalDataFinal,
    sid,
  } = props;

  // --------------後端拿會員資料-------
  // const { sid } = useContext(AuthContext);

  // --------------後端拿會員資料-------

  // personalData(setPersonalDataFinal) // 8/17 16:30 要再確認為什麼不能設定回去

  // zipCode-------------
  console.log(countries, townships, postcodes);
  // 記錄陣列的索引值，預設值是-1，相當於"請選擇xxx"
  const [country, setCountry] = useState(-1);
  const [township, setTownship] = useState(-1);
  // zipCode-------------

  useEffect(() => {}, []);

  return (
    <>
      {/* 測試後端拿會員資料 */}
      {/* {memberData.map((v, i) => {
        return <p>{v.name[0]}</p>;
      })} */}
      <div className="love-shipInfoBox">
        <p className="loveyu-orderTitle">訂購人資料</p>
        <button
          className="ProjectButton"
          onClick={(e) => {
            e.preventDefault();
            console.log('fill');
            setPersonalData({
              ...personalData,
              memSid: sid,
              shipName: '111',
              shipPhone: '111',
              shipEmail: '111@ss.ss',
              country: 10,
              township: 2,
              addressDetail: '復興南路99號2樓',
              creditCardNum: '8899 3344 2244 2233',
              creditCardDate: '10/25',
              creditCardName: '游小豪',
              creditSecurityCode: '889',
            });
            setTownship(personalData.township);
            setCountry(personalData.country);
          }}
        >
          同步會員資料
        </button>
        {console.log('personalData', personalData)}
      </div>

      <section className="cartBox">
        <div className="card">
          <div className="row">
            <div className="yu_inputblock col-md-6 creditCardBlock">
              <label>姓名</label>
              <input
                className=""
                type="text"
                name="shipName"
                value={personalData.shipName}
                onChange={handleFieldChange}
              />
              <label>電話</label>
              <input
                className=""
                type="text"
                name="shipPhone"
                value={personalData.shipPhone}
                onChange={handleFieldChange}
              />

              <label>E-mail</label>
              <input
                className=""
                type="email"
                name="shipEmail"
                value={personalData.shipEmail}
                onChange={handleFieldChange}
              />
              {/* zipCode專區 */}
              <label>縣市</label>
              <select
                className=""
                value={country}
                onChange={(e) => {
                  // 將字串轉成數字
                  setCountry(+e.target.value);
                  // 重置township的值
                  setTownship(-1);
                }}
              >
                {console.log('country', country)}
                <option value="-1">選擇縣市</option>
                {countries.map((value, index) => (
                  <option key={index} value={index}>
                    {value}
                  </option>
                ))}
              </select>
              <label>地區</label>
              <select
                className=""
                value={township}
                onChange={(e) => {
                  // 將字串轉成數字
                  setTownship(+e.target.value);
                }}
              >
                <option value="-1">選擇區域</option>
                {country > -1 &&
                  townships[country].map((value, index) => (
                    <option key={index} value={index}>
                      {value}
                    </option>
                  ))}
              </select>
              {/* 如果country與township的索引值均大於-1時(也就是都有選的情況下)，呈現postcode */}
              {/* `條件 && 呈現` 是 `if(條件){呈現}` 的簡寫法，只在React JSX中可以使用 */}
              {/* zipCode專區 */}
              <label>詳細地址（街道/門牌/樓層）</label>
              <input
                className=""
                type="text"
                name="addressDetail"
                value={personalData.addressDetail}
              />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <img
                className="w-75 d-flex align-items-center"
                src="/images/immigrant_card_zairyu_o.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PersonalInfo;
