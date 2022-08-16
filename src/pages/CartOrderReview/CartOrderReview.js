import React, { useState } from 'react';
import H2 from '../../components/H2';
import CurrentOrder from './components/CurrentOrder';

function CartOrderReview() {
  return (
    <>
      <H2 title="請再次確認訂單" Entitle="ORDER REVIEW" />
      <CurrentOrder />
    </>
  );
}

export default CartOrderReview;
