import React, { useState, useContext, createContext } from 'react';
import H2 from '../About/H2';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import PersonalInfo from './components/PersonalInfo';
import CurrentOrder from './components/CurrentOrder';

function CartOrderInfo() {
  return (
    <div className="container">
      <H2 title="訂單資訊" Entitle="ORDER INFO" />
      <CurrentOrder />
      <PersonalInfo />
    </div>
  );
}

export default CartOrderInfo;
