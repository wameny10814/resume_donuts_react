import React, { useState, useContext, createContext } from 'react';
import H2 from '../../components/H2';

import PersonalInfo from './components/PersonalInfo';
import CurrentOrder from './components/CurrentOrder';
import CreditCard from './components/CreditCard';
import ProjectButton from '../../components/ProjectButton/ProjectButton';

function CartOrderInfo() {
  // 信用卡資料
  const [creditCardData, setCreditCardData] = useState({
    creditCardNum: '',
    creditCardDate: '',
    creditCardName: '',
    creditSecurityCode: '',
  });

  return (
    <div className="container">
      <H2 title="訂單資訊" Entitle="ORDER INFO" />
      <CurrentOrder />
      <PersonalInfo />
      <CreditCard
        creditCardData={creditCardData}
        setCreditCardData={setCreditCardData}
      />
      <ProjectButton className="w-25" text="下一步" />
    </div>
  );
}

export default CartOrderInfo;
