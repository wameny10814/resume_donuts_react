import React, { useState, useContext, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

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

  // 建立表提交事件

  const navigate = useNavigate(); // 頁面轉跳
  const OrderInfoSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();

    console.log(personalData, creditCardData);

    // 檢查欄位
    if (
      personalData.shipName === '' ||
      personalData.shipPhone === '' ||
      creditCardData.creditCardNum === ''
    ) {
      return;
    }
  };

  return (
    <div className="container">
      <H2 title="訂單資訊" Entitle="ORDER INFO" />
      <form action="" onSubmit={OrderInfoSubmit}>
        <CurrentOrder />
        <PersonalInfo
          personalData={personalData}
          setPersonalData={setPersonalData}
        />
        <CreditCard
          creditCardData={creditCardData}
          setCreditCardData={setCreditCardData}
        />
        <ProjectButton className="w-25" text="下一步" />
      </form>
    </div>
  );
}

export default CartOrderInfo;
