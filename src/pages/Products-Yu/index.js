import React from 'react';

import ProductsTab from '../../components/ProducutsTab/';
import ProductsCard from '../../components/ProductsCard';

function Products() {
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
