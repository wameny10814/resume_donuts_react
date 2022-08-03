import React, { useState, useContext, createContext } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function CurrentOrder() {
  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          bgcolor: 'background.paper',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="filled-basic" label="姓名" variant="filled" />
        <TextField id="filled-basic" label="行動電話" variant="filled" />
        <TextField id="filled-basic" label="電子信箱" variant="filled" />
        <TextField id="filled-basic" label="詳細地址" variant="filled" />
      </Box>
      <div className="orderTotal w-25">
        <p>總計</p>
        <hr />
        <p>
          數量<span></span>
        </p>
        <p>
          會員優惠<span></span>
        </p>
        <p>
          總金額<span></span>
        </p>
      </div>
    </>
  );
}

export default CurrentOrder;
