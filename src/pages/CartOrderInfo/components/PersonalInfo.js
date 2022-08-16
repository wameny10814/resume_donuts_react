import React, { useState, useContext, createContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import ZipCode from './ZipCode';
import axios from 'axios';

// shipName: '',
// shipPhone: '',
// shipEmail: '',

function PersonalInfo(props) {
  const { personalData, setPersonalData } = props;


  const handleFieldChange = (e) => {
    const newPersonalData = {
      ...personalData,
      [e.target.name]: e.target.value,
    };
    setPersonalData(newPersonalData);

    console.log(newPersonalData);
  };

  // 連接後端拿會員資料同步
  const [memberData, setMemberData] = useState([]);
  const memberInfo = {
    shipName: '111',
    shipPhone: '222',
    shipEmail: '333',
  };

  const getMemberData = async () => {
    const response = await axios.get(`http://localhost:3600/member/memberdata`);
    const resdata = response.data;
    setMemberData(resdata);
  };

  useEffect(() => {
    getMemberData();
  }, []);

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

  return (
    <>
      {memberData.map((v, i) => {
        return <p>{v.name[0]}</p>;
      })}

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
            country: '臺北市',
            township: '大安區',
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
            type="text"
            name="shipName"
            value={personalData.shipName}
            onChange={handleFieldChange}
          />
          電話
          <input
            type="text"
            name="shipPhone"
            value={personalData.shipPhone}
            onChange={handleFieldChange}
          />
          E-mail
          <input
            type="email"
            name="shipEmail"
            value={personalData.shipEmail}
            onChange={handleFieldChange}
          />
          <ZipCode
            personalData={personalData}
            setPersonalData={setPersonalData}
          />
          詳細地址（街道/門牌/樓層）
          <input
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
