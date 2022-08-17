import { useState } from 'react';
import { Link } from 'react-router-dom';

import MainButton from '../../../components/MainButton/MainButton';

function Summary(props) {
  const { totalNumber, totalPrice, carts, SetCarts } = props;

  return (
    <>
      <div className="col-md-4 summary">
        <div>
          <h5>
            <b>付款摘要</b>
          </h5>
        </div>
        <hr />
        <div className="row">
          <div className="col col-style">共 {totalNumber} 項目</div>
        </div>
        <div className="row row-style">
          <div className="col">總價</div>
          <div className="col text-right">${totalPrice}</div>
        </div>
        <Link className="text-decoration-none" to="/Cart/CartOrderInfo">
          <MainButton text="前往結帳" />
        </Link>
        <Link className="text-decoration-none" to="/Product">
          <MainButton text="繼續購物" />
        </Link>
      </div>
    </>
  );
}

export default Summary;
