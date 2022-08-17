import React, { useState, useContext, createContext } from 'react';
import H2 from '../../components/H2';
import CurrentOrder from '../CartOrderInfo/components/CurrentOrder';
import PersonalCheck from './components/PersonalCheck';

function CartOrderCheck(props) {
  const { setCarts, carts, personalDataFinal, setPersonalDataFinal } = props;

  return (
    <div className="container">
      <H2 title="請確認訂單資訊" Entitle="ORDER CHECK" />
      <CurrentOrder setCarts={setCarts} carts={carts} />

      <div className="loveyu_textInfoBox"></div>
    </div>
  );
}

export default CartOrderCheck;
