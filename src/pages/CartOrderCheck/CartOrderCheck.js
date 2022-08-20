import React, { useState, useContext, createContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import H2 from '../../components/H2';
import CurrentOrder from '../CartOrderInfo/components/CurrentOrder';
import PersonalCheck from './components/PersonalCheck';
import ProjectButton from '../../components/ProjectButton/ProjectButton';

function CartOrderCheck(props) {
  const { setCarts, carts, personalDataFinal, setPersonalDataFinal } = props;

  // 購物車及訂單資料寫進資料庫
  const totalOrderData = [carts, personalDataFinal];

  // console.log('totalOrderData',totalOrderData); 有順利拿到兩個陣列
  // const [totalOrderData, setTotalOrderData] = useState({
  //   shipName: '',
  //   shipPhone: '',
  //   shipEmail: '',
  //   country: '',
  //   township: '',
  //   addressDetail: '',
  //   creditCardNum: '',
  //   creditCardDate: '',
  //   creditCardName: '',
  //   creditSecurityCode: '',

  //   sid: '',
  //   product_name: '',
  //   category_sid: '',
  //   product_price: '',
  //   product_img: '',
  //   product_desc: '',
  //   created_at: '',
  //   conut: '',
  // });

  // 寫進資料庫
  // const logsee = async (e) => {
  //   const data = totalOrderData;
  //   console.log(totalOrderData);

  //   const response = await axios.post(
  //     'http://localhost:3600/cartsData/cartsData',
  //     data
  //   );
  //   const resdata = response.data;
  // };

  // useEffect(() => {
  //   setTotalOrderData({ ...totalOrderData });
  // }, [shipName, shipPhone, shipEmail]);

  //客製化資料
  // const [main, setMain] = useState({
  //   mem: sid,
  //   img: '',
  //   donut: 'origin',
  //   layer: '',
  //   decoration: '',
  //   price: '',
  // });

  // //寫入資料庫
  // const logsee = async (e) => {
  //   const data = main;

  //   const response = await axios.post(
  //     'http://localhost:3600/willownews/addcustom',
  //     data
  //   );
  //   const resdata = response.data;
  // };

  // useEffect(() => {
  //   renderCanvas();
  //   setMain({ ...main, price: totalPrice });
  // }, [donut, layer, decoration]);

  return (
    <div className="container">
      <H2 title="請確認訂單資訊" Entitle="ORDER CHECK" />
      <div className="love-orderContainer">

      <CurrentOrder setCarts={setCarts} carts={carts} />
      <PersonalCheck
        personalDataFinal={personalDataFinal}
        setPersonalDataFinal={setPersonalDataFinal}
      />
      <Link to="/Cart/CartOrderCompleted">
        <ProjectButton
          className="w-25"
          text="下一步"
          type="submit"
          // onClick={logsee}
        />
      </Link>
      </div>
    </div>
  );
}

export default CartOrderCheck;
