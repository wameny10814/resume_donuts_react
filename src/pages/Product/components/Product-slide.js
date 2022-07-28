// import { useState } from 'react';
import '../Product.css';

function ProductSlide() {
  return (
    // <ProductSlideCard />
    <div className="Mars-prod-wrap">
      <div className="Mars-prod-imgwr">
        <img src="./images/uji-matcha.jpg" className="Mars-prod-img" alt=""></img>
      </div>
      <p className="Mars-prod-name">宇治抹茶那堤</p>
      <p className="Mars-prod-price">NT$ 35</p>
      <button className="Mars-cart-btn"><i class="fa-solid fa-circle-plus"></i> 加入購物車</button>
    </div>
  );
}

export default ProductSlide;
