import { useState } from 'react';
import '../Product.css';

function ProductSlide() {
  const [ProductInfo, setProductInfo] = useState(0);

  return (
    // <ProductSlideCard />
    <div className="Mars-prod-wrap">
      <div className="Mars-prod-imgwr">
        <a href="../Content">
          {/* eslint-disable-next-line prettier/prettier */}
          <img src="./images/uji-matcha.jpg" className="Mars-prod-img" alt=""></img>
        </a>
      </div>
      <p className="Mars-prod-name">宇治抹茶那堤</p>
      <p className="Mars-prod-price">NT$ 35</p>
      <a href="../../Cart/">
        {/* eslint-disable-next-line prettier/prettier */}
        <button className="Mars-cart-btn"><i class="fa-solid fa-circle-plus"></i> 加入購物車</button>
      </a>
    </div>
  );
}

export default ProductSlide;
