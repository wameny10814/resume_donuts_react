// 加入購物車顯示彈跳視窗 錄影檔 7/19 15:45
// 分頁 pagenavigation 作法 錄影檔 7/20 11:00

import React, { useState } from 'react';

import ProductsTab from '../components/ProducutsTab/ProducutsTab';
import ProductsCard from '../components/ProductsCard/ProductsCard';

function Products(props) {
  return (
    <>
      <div className="container">
        <h1>商品列表</h1>
        <ProductsTab />
      </div>
      <div className="container">
        <div className="row row-cols-3">
          <div className="col">
            <ProductsCard />
          </div>
          <div className="col">
            <ProductsCard />
          </div>
          <div className="col">
            <ProductsCard />
          </div>
          <div className="col">
            <ProductsCard />
          </div>
          <div className="col">
            <ProductsCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
