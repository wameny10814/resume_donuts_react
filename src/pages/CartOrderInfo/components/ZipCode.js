import { useState } from 'react';
import { countries, townships, postcodes } from '../../Cart/data/townships';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function ZipCode() {
  console.log(countries, townships, postcodes);
  // 記錄陣列的索引值，預設值是-1，相當於"請選擇xxx"
  const [country, setCountry] = useState(-1);
  const [township, setTownship] = useState(-1);

  return (
    <>
      <TextField
        select
        label="縣市"
        value={country}
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

      <TextField
        select
        label="地區"
        value={township}
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
      
 
    </>
  );
}

export default ZipCode;
