import React, { useState, useContext, createContext, useEffect } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
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
            shipEmail: '111',
          });
        }}
      >
        同步會員資料
      </button>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          bgcolor: 'background.paper',
        }}
        noValidate
        autoComplete="off"
      >
        <div className="form-inline"></div>
        <TextField
          id="filled-basic"
          label="姓名"
          variant="filled"
          type="text"
          name="shipName"
          value={personalData.shipName}
          onChange={handleFieldChange}
        />

        <TextField
          id="filled-basic"
          label="行動電話"
          variant="filled"
          type="text"
          name="shipPhone"
          value={personalData.shipPhone}
          onChange={handleFieldChange}
        />
        <TextField
          id="filled-basic"
          label="電子信箱"
          variant="filled"
          type="email"
          name="shipEmail"
          value={personalData.shipEmail}
          onChange={handleFieldChange}
        />
        <ZipCode />
        <TextField id="filled-basic" label="詳細地址" variant="filled" />
      </Box>
    </>
  );
}

export default PersonalInfo;
