import React, { useState, useContext, createContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import H2 from '../../components/H2';

import PersonalInfo from './components/PersonalInfo';
import CurrentOrder from './components/CurrentOrder';
import CreditCard from './components/CreditCard';
import ProjectButton from '../../components/ProjectButton/ProjectButton';

function CartOrderInfo(props) {
  const { setCarts, carts, personalDataFinal, setPersonalDataFinal } = props;
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

  const handleFieldChange = (e) => {
    const newPersonalData = {
      ...personalData,
      [e.target.name]: e.target.value,
    };
    setPersonalData(newPersonalData);

    console.log(newPersonalData);
  };
  setPersonalDataFinal(personalData);

  // 建立表提交事件

  const navigate = useNavigate(); // 頁面轉跳

  const handleSubmit = (event) => {
    // alert('提交成功');
    // navigate('/CartOrderCheck');
    event.preventDefault();

    // console.log(personalData);

    // 檢查欄位;
    // if (
    //   personalData.shipName === '' ||
    //   personalData.shipPhone === '' ||
    //   personalData.creditCardNum === ''
    // ) {
    //   return;
    // }
  };
  // 點擊送出就把資料送到後端
  // const postOrderInfo = async () => {
  //   const response = await axios.post(
  // http://localhost:3600/CartDatabase
  //   );
  //   const resdata = response.data; // 這邊應該是用requist?
  //   setCustomData(resdata);  // 因為是送出資料，要不要set再研究看看
  // };

  // useEffect(() => {
  //   getCustomData();
  // }, []);

  return (
    <div className="container">
      <H2 title="訂單資訊" Entitle="ORDER INFO" />
      <div className="love-orderContainer">
        <form action="" onSubmit={handleSubmit}>
          <CurrentOrder setCarts={setCarts} carts={carts} />
          <PersonalInfo
            personalData={personalData}
            setPersonalData={setPersonalData}
            handleFieldChange={handleFieldChange}
            personalDataFinal={personalDataFinal}
            setPersonalDataFinal={setPersonalDataFinal}
          />
          <CreditCard
            personalData={personalData}
            setPersonalData={setPersonalData}
            handleFieldChange={handleFieldChange}
          />
          <Link to="/Cart/CartOrderCheck">
            <ProjectButton className="w-25" text="下一步" type="submit" />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default CartOrderInfo;
