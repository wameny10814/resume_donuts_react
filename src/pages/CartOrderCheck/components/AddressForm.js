import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import { countries, townships, postcodes } from '../../Cart/data/townships';

export default function AddressForm() {
  console.log(countries, townships, postcodes);
  // 記錄陣列的索引值，預設值是-1，相當於"請選擇xxx"
  const [country, setCountry] = useState(-1);
  const [township, setTownship] = useState(-1);
  return (
    <React.Fragment>
      <Typography variant="h6">訂購人資料</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="shipName"
            name="shipName"
            label="姓名"
            fullWidth
            autoComplete="name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="shipPhone"
            name="shipPhone"
            label="行動電話"
            fullWidth
            autoComplete="tel-national"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="E-mail"
            fullWidth
            autoComplete="email"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            select
            label="縣市"
            value={country}
            fullWidth
            onChange={(e) => {
              // 將字串轉成數字
              setCountry(+e.target.value);
              // 重置township的值
              setTownship(-1);
            }}
          >
            <MenuItem value="-1">選擇縣市</MenuItem>
            {countries.map((value, index) => (
              <MenuItem key={index} value={index}>
                {value}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            label="地區"
            value={township}
            fullWidth
            onChange={(e) => {
              // 將字串轉成數字
              setTownship(+e.target.value);
            }}
          >
            <MenuItem value="-1">選擇區域</MenuItem>
            {country > -1 &&
              townships[country].map((value, index) => (
                <MenuItem key={index} value={index}>
                  {value}
                </MenuItem>
              ))}
          </TextField>
          {/* 如果country與township的索引值均大於-1時(也就是都有選的情況下)，呈現postcode */}
          {/* `條件 && 呈現` 是 `if(條件){呈現}` 的簡寫法，只在React JSX中可以使用 */}
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="address"
            name="address"
            label="詳細地址 (街道/巷弄/戶號)"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>


      </Grid>
    </React.Fragment>
  );
}
