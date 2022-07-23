// const H2Font = useContext()
// 樹狀結構用 value 填進去
import React, { useState, useContext, createContext } from 'react';

function H2Font(props) {
  const { pTitle, h2Title } = props;
  return (
    <div className="h2Box">
      <p className="pTitle">{pTitle}</p>
      <h2>{h2Title}</h2>
    </div>
  );
}

export default H2Font;
