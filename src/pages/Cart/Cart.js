import OrderList from './components/OrderList';
import Summary from './components/Summary';
import axios from 'axios';
import React, { useState, useContext, createContext, useEffect } from 'react';
import AuthContext from '../../pages/member/components/AuthContext';

import H2 from '../../components/H2';

// 初始化狀態的函示

// 每個商品的物件
// {
//   "sid": "1",
//   "product_name": "草莓波堤",
//   "category_sid": "1",
//   "product_price": "$35",
//   "product_img": "./images/pon-de-strawberry.jpeg",
//   "product_desc": "草莓甜甜的滋味，配上波堤可愛的風格",
//   "created_at": "2022-05-31 08:28:44"
//   "conut":"1", 紀錄每個商品被買了幾個
// }

const initState = (productArray) => {
  const state = [];

  for (let i = 0; i < productArray.length; i++) {
    state.push({ ...productArray[i], count: 1 });
  }
  return state;
};

function Cart(props) {
  const { authorized, sid } = useContext(AuthContext);

  const { carts, setCarts } = props;
  // 多樣產品的共用狀態，三樣產品為[1,1,1],四樣產品為[1,1,1,1]以此類推
  const [productsInOrder, setProductsInOrder] = useState(initState(carts));
  setCarts(productsInOrder);

  const calcTotalNumber = () => {
    let total = 0;
    for (let i = 0; i < productsInOrder.length; i++) {
      total += productsInOrder[i].count;
    }
    return total;
  };

  const calcTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < productsInOrder.length; i++) {
      total += productsInOrder[i].count * productsInOrder[i].product_price;
    }
    return total;
  };

  const calcCurrentItem = () => {
    let total = 0;
    for (let i = 0; i < productsInOrder.length; i++) {
      total += productsInOrder[i].count;
    }
    return total;
  };

  const [customData, setCustomData] = useState([]);

  const getCustomData = async () => {
    const response = await axios.get(
      `http://localhost:3600/willownews/readcustom?sid=${sid}`
    );
    const resdata = response.data;
    setCustomData(resdata);
  };

  useEffect(() => {
    getCustomData();
  }, []);

  return (
    <section className="cartBox">
      <div className="container">
        <H2 title="我的購物車" Entitle="CART" />

        <div className="card">
          <div className="row">
            <OrderList
              productsInOrder={productsInOrder}
              setProductsInOrder={setProductsInOrder}
              currentItem={calcCurrentItem()}
            />
            <Summary
              totalNumber={calcTotalNumber()}
              totalPrice={calcTotalPrice()}
            />
          </div>
        </div>
      </div>
      <h6>客製化購物車</h6>
      <div className="d-flex">
        {customData.length > 0 &&
          customData.map((v, i) => {
            return (
              <div key={v.sid}>
                <img className="w-50" src={v.img} alt="" />
                <p>
                  甜甜圈口味：
                  {v.donut === 'origin'
                    ? '原味'
                    : v.donut === 'strawberry'
                    ? '草莓'
                    : v.donut === 'Ponde'
                    ? '酥皮'
                    : '抹茶'}
                </p>
                <p>
                  糖霜：
                  {v.layer === 'sugar'
                    ? '砂糖'
                    : v.layer === 'chocolate'
                    ? '巧克力'
                    : v.layer === 'strawberry'
                    ? '草莓'
                    : v.layer === 'milk'
                    ? '牛奶'
                    : '巧克力霜'}
                </p>
                <p>
                  配料：
                  {v.decoration === 'rice'
                    ? '巧克力米'
                    : v.decoration === 'sugarpowder'
                    ? '糖粉'
                    : v.decoration === 'cotton'
                    ? '棉花糖'
                    : v.decoration === 'strawberry'
                    ? '草莓'
                    : '青蔥'}
                </p>
                <p>價格：{v.price}元</p>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default Cart;
