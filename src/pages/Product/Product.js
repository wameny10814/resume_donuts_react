import './Product.css';
import { ProductsData } from './data/products';
import { Link } from 'react-router-dom';

function Product() {
  return (
    <>
      <div className="Mars-container">
        <div className="Mars-img-wrap">
          <img src="./images/mv_donut.jpg" className="Mars-visual" alt="" />
          <p className="Mars-prod-name">商品一覽</p>
        </div>
        <div className="Mars-breadcrumb"></div>
        <div className=""></div>
        <div className=""></div>
        <div className="Mars-prod-filter-area"></div>
        <div className="Mars-product-slide">
          {ProductsData.map((v, i) => {
            return (
              <div className="Mars-prod-wrap">
                <div className="Mars-prod-imgwr">
                  <Link to={`/Content/${v.sid}`}>
                    {/* eslint-disable-next-line prettier/prettier */}
                    <img src={v.product_img} className="Mars-prod-img" alt=""></img>
                    {/* <img src="./images/uji-matcha.jpg" className="Mars-prod-img" alt=""></img> */}
                  </Link>
                </div>
                <p className="Mars-prod-name">{v.product_name}</p>
                {/* <p className="Mars-prod-name">宇治抹茶那堤</p> */}
                <p className="Mars-prod-price">NT$ {v.product_price}</p>
                {/* <p className="Mars-prod-price">NT$ 35</p> */}
                <a href="../../Cart/">
                  {/* eslint-disable-next-line prettier/prettier */}
                  <button className="Mars-cart-btn"><i class="fa-solid fa-circle-plus"></i> 加入購物車</button>
                </a>
              </div>
            );
          })}
          {/* ProductsData.map((v, i) => {
              const {sid, product_name, product_price, product_image} = v

              return (
                <ProductSlide id={sid} name={product_name} price={product_price} image={product_image} />
              )
            }) */}
        </div>
        {/* 飲料區待定 */}
      </div>
    </>
  );
}

export default Product;

// 傳給購物車：使用 localStorage
