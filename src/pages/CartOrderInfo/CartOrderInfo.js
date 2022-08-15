import React, { useState, useContext, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

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
    country: '',
    township: '',
    addressDetail: '',
    creditCardNum: '',
    creditCardDate: '',
    creditCardName: '',
    creditSecurityCode: '',
  });

  // 測試 react-hook-form----------------------
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (personalData) => console.log(personalData);
  // ----------------------測試 react-hook-form---

  // 訂購地址
  // const [addressData, setAddressData] = useState({

  // });

  // 信用卡資料
  // const [creditCardData, setCreditCardData] = useState({

  // });

  // 建立表提交事件

  const navigate = useNavigate(); // 頁面轉跳

  const handleSubmit = (event) => {
    // alert('提交成功');
    // navigate('/CartOrderCheck');
    event.preventDefault();

    // console.log(personalData);

    // 檢查欄位;
    if (
      personalData.shipName === '' ||
      personalData.shipPhone === '' ||
      personalData.creditCardNum === ''
    ) {
      return;
    }
  };

  return (
    <div className="container">
      <H2 title="訂單資訊" Entitle="ORDER INFO" />
      <form action="" onSubmit={handleSubmit}>
        <CurrentOrder />
        <PersonalInfo
          personalData={personalData}
          setPersonalData={setPersonalData}
        />
        <CreditCard
          personalData={personalData}
          setPersonalData={setPersonalData}
        />
        <ProjectButton className="w-25" text="下一步" type="submit" />
      </form>
    </div>
  );
}

export default CartOrderInfo;
