import OrderList from './components/OrderList';
import Summary from './components/Summary';

import React, { useState, useContext, createContext } from 'react';

import { products } from './data/products';

import H2 from '../About/H2';

// 初始化狀態的函示

// 每個商品的物件
// {
//     id: 5,
//     name: '咖啡色 T-shirt',
//     category: 'Shirt',
//     image: 'https://i.imgur.com/1GrakTl.jpg',
//     price: 300,
//   }
// 變為
// {
//     id: 5,
//     name: '咖啡色 T-shirt',
//     category: 'Shirt',
//     image: 'https://i.imgur.com/1GrakTl.jpg',
//     price: 300,
//     conut:1, 紀錄每個商品被買了幾個
//   }

const initState = (prosuctArray) => {
  const state = [];

  for (let i = 0; i < prosuctArray.length; i++) {
    state.push({ ...prosuctArray[i], count: 1 });
  }
  return state;
};

function Cart() {
  // 多樣產品的共用狀態，三樣產品為[1,1,1],四樣產品為[1,1,1,1]以此類推
  const [productsInOrder, setProductsInOrder] = useState(initState(products));

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
      total += productsInOrder[i].count * productsInOrder[i].price;
    }
    return total;
  };

  return (
    <section className="cartBox">
      <div className="container">
        <H2 title="我的購物車" Entitle="CART" />

        <div className="card">
          <div className="row">
            <OrderList
              productsInOrder={productsInOrder}
              setProductsInOrder={setProductsInOrder}
            />
            <Summary
              totalNumber={calcTotalNumber()}
              totalPrice={calcTotalPrice()}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
