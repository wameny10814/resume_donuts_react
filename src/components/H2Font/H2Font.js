// const H2Font = useContext()
// 樹狀結構用 value 填進去
import React, { useState, useContext, createContext } from 'react';

const CountContext = createContext('CART');

function H2Font() {
  const pTitle = useContext(CountContext);
  const h2Title = useContext(CountContext);
  return (
    <>
      <p>{pTitle}</p>
      <h2>{h2Title}</h2>
    </>
  );
}

export default H2Font;
