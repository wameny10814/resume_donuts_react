import React, { useState, useContext, createContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { countries, townships, postcodes } from '../../Cart/data/townships';

import axios from 'axios';

// shipName: '',
// shipPhone: '',
// shipEmail: '',

function PersonalInfo(props) {
  const {
    personalData,
    setPersonalData,
    handleFieldChange,
    setPersonalDataFinal,
  } = props;
  // personalData(setPersonalDataFinal) // 8/17 16:30 要再確認為什麼不能設定回去

  // 連接後端拿會員資料同步
  // const [memberData, setMemberData] = useState([]);
  // const memberInfo = {
  //   shipName: '111',
  //   shipPhone: '222',
  //   shipEmail: '333',
  // };

  // const getMemberData = async () => {
  //   const response = await axios.get(`http://localhost:3600/member/memberdata`);
  //   const resdata = response.data;
  //   setMemberData(resdata);
  // };

  // useEffect(() => {
  //   getMemberData();
  // }, []);

  // `sid` int(11) NOT NULL,
  // `account` varchar(255) NOT NULL,
  // `pass_hash` varchar(255) NOT NULL,
  // `name` varchar(255) NOT NULL,
  // `birthday` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  // `email` varchar(255) NOT NULL,
  // `mobile` varchar(11) NOT NULL,
  // `address` varchar(255) NOT NULL,
  // `avatar` varchar(255) NOT NULL,
  // `level` int(11) NOT NULL,
  // `valid` int(255) NOT NULL,
  // `validconfirm` varchar(255) NOT NULL DEFAULT 'off',
  // `creat_at` datetime NOT NULL

  // 連接後端拿會員資料同步

  // zipCode-------------
  console.log(countries, townships, postcodes);
  // 記錄陣列的索引值，預設值是-1，相當於"請選擇xxx"
  const [country, setCountry] = useState(-1);
  const [township, setTownship] = useState(-1);
  // zipCode-------------

  return (
    <>
      {/* 測試後端拿會員資料 */}
      {/* {memberData.map((v, i) => {
        return <p>{v.name[0]}</p>;
      })} */}

      <h3>訂購人資料</h3>
      <button
        className="ProjectButton"
        onClick={(e) => {
          e.preventDefault();
          console.log('fill');
          setPersonalData({
            ...personalData,
            shipName: '111',
            shipPhone: '111',
            shipEmail: '111@ss.ss',
            country: '南投縣',
            township: '信義鄉',
            addressDetail: '復興南路99號2樓',
            creditCardNum: '8899 3344 2244 2233',
            creditCardDate: '10/25',
            creditCardName: '游小豪',
            creditSecurityCode: '889',
          });
        }}
      >
        同步會員資料
      </button>

      <section className="cartBox">
        <div className="card">
          姓名
          <input
            className="w-25"
            type="text"
            name="shipName"
            value={personalData.shipName}
            onChange={handleFieldChange}
          />
          電話
          <input
            className="w-25"
            type="text"
            name="shipPhone"
            value={personalData.shipPhone}
            onChange={handleFieldChange}
          />
          E-mail
          <input
            className="w-50"
            type="email"
            name="shipEmail"
            value={personalData.shipEmail}
            onChange={handleFieldChange}
          />
          {/* zipCode專區 */}
          縣市
          <select
            className="dropdown w-25"
            value={country}
            onChange={(e) => {
              // 將字串轉成數字
              setCountry(+e.target.value);
              // 重置township的值
              setTownship(-1);
            }}
          >
            <option value="-1">選擇縣市</option>
            {countries.map((value, index) => (
              <option key={index} value={index}>
                {value}
              </option>
            ))}
          </select>
          地區
          <select
            className="dropdown w-25"
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
          詳細地址（街道/門牌/樓層）
          <input
            className="w-50"
            type="text"
            name="addressDetail"
            value={personalData.addressDetail}
          />
        </div>
      </section>
    </>
  );
}

export default PersonalInfo;
