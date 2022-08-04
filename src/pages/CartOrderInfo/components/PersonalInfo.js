import React, { useState, useContext, createContext } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import ZipCode from './ZipCode';

const selectCountys = [
  {
    value: 'TPE',
    label: '臺北市',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

function PersonalInfo() {
  const [selectCounty, setSelectCounty] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectCounty(event.target.value);
  };

  return (
    <>
      <h3>訂購人資料</h3>
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
        <TextField id="filled-basic" label="姓名" variant="filled" />
        <TextField id="filled-basic" label="行動電話" variant="filled" />
        <TextField id="filled-basic" label="電子信箱" variant="filled" />
        <ZipCode />
        <TextField id="filled-basic" label="詳細地址" variant="filled" />
      </Box>
    </>
  );
}

export default PersonalInfo;
