// const H2Font = useContext()
// 樹狀結構用 value 填進去
import React, { useState, useContext, createContext } from 'react';
import { H2FontContext } from '../../pages/Cart/Cart';

function H2Font() {
  const h2Font = useContext(H2FontContext);
  return (
    <div className="h2Box">
      <p className="pTitle">{h2Font.pTitle}</p>
      <h2>{h2Font.h2Title}</h2>
    </div>
  );
}

export default H2Font;
