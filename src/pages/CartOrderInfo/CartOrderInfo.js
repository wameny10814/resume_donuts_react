import React, { useState, useContext, createContext } from 'react';
import H2 from '../../components/H2';

import PersonalInfo from './components/PersonalInfo';
import CurrentOrder from './components/CurrentOrder';
import CreditCard from './components/CreditCard';
import ProjectButton from '../../components/ProjectButton/ProjectButton';

function CartOrderInfo() {
  // 訂購人資料
  const [personalData, setPersonalData] = useState({
    shipName: '',
    shipPhone: '',
    shipEmail: '',
  });

  // 信用卡資料
  const [creditCardData, setCreditCardData] = useState({
    creditCardNum: '',
    creditCardDate: '',
    creditCardName: '',
    creditSecurityCode: '',
  });

  // const [formDone, setFormDone] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormDone(true);
  // };

  return (
    <div className="container">
      <H2 title="訂單資訊" Entitle="ORDER INFO" />
      <CurrentOrder />
      <PersonalInfo
        personalData={personalData}
        setPersonalData={setPersonalData}
      />
      <CreditCard
        creditCardData={creditCardData}
        setCreditCardData={setCreditCardData}
      />
      <ProjectButton
        className="w-25"
        text="下一步"
        // type="submit"
        // value="submit"
      />
    </div>
  );
}

export default CartOrderInfo;
