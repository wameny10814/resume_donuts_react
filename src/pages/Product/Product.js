import { useState } from 'react';
import './Product.css';
import { ProductsData } from './data/products';
import { Link } from 'react-router-dom';

function Product(props) {
  // 測試購物車------------------
  const { setCarts, carts } = props;

  const [productData, setProductData] = useState(ProductsData);
  // "sid": "1",
  // "product_name": "草莓波堤",
  // "category_sid": "1",
  // "product_price":"35",
  // "product_img": "./images/pon-de-strawberry.jpeg",
  // "product_desc": "草莓甜甜的滋味，配上波堤可愛的風格",
  // "created_at": "2022-05-31 08:28:44"

  // const handleAddToCarts = (e) => setCarts({ ...carts, sid: e.sid });
  const handleAddToCarts = (
    sid,
    product_name,
    category_sid,
    product_price,
    product_img,
    product_desc,
    created_at
  ) =>
    setCarts(
      carts.concat({
        sid,
        product_name,
        category_sid,
        product_price,
        product_img,
        product_desc,
        created_at,
      })
    );

  // 測試購物車------------------

  // Filter功能-----------------
  // const PondeFilter = ProductsData.filter(category_sid = 1)
  // const DonutFilter = ProductsData.filter(category_sid = 2)
  // const OldFashionFilter = ProductsData.filter((ProductsData.category_sid = 3));

  return (
    <>
      <div className="Mars-container">
        <div className="Mars-img-wrap">
          <img src="./images/mv_donut.jpg" className="Mars-visual" alt="" />
          <p className="Mars-prod-name">商品一覽</p>
        </div>
        <div className="Mars-breadcrumb"></div>
        <div className=""></div>
        {/* <div className="Mars-prod-filter-area">
          <div className="Mars-prod-filter" onClick={(e) => {}}></div>
        </div> */}
        <div className="Mars-product-slide">
          {productData.map((v, i) => {
            return (
              <div className="Mars-prod-wrap">
                <div className="Mars-prod-imgwr">
                  <Link to={`./${v.sid}`}>
                    {/* eslint-disable-next-line prettier/prettier */}
                    <img src={v.product_img} className="Mars-prod-img" alt=""></img>
                  </Link>
                </div>
                <p className="Mars-prod-name">{v.product_name}</p>
                <p className="Mars-prod-price">NT$ {v.product_price}</p>
                <button
                  className="Mars-cart-btn"
                  onClick={() =>
                    handleAddToCarts(
                      productData.sid,
                      productData.product_name,
                      productData.category_sid,
                      productData.product_price,
                      productData.product_img,
                      productData.product_desc,
                      productData.created_at
                    )
                  }
                >
                  <i class="fa-solid fa-circle-plus"></i> 加入購物車
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Product;

// 傳給購物車：使用 localStorage
