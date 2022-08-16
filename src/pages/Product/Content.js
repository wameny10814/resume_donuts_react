/* eslint-disable react-hooks/exhaustive-deps */
import './Product.css';
import ProductRecommandCard from './components/Product-recommand';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsData } from './data/products';

function Content(props) {
  const [clicked, setClicked] = useState(false);
  const clickedBool = () => setClicked(!clicked);

  const { setCarts, carts } = props;
  const [CartProductData, setCartProductData] = useState(ProductsData);
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

  const [product, setProduct] = useState({
    sid: '',
    product_name: '',
    category_sid: '',
    product_price: '',
    product_img: '',
    product_desc: '',
    created_at: '',
  });

  const { productId } = useParams();

  useEffect(() => {
    //getProduct
    const p = ProductsData.find((v, i) => v.sid === productId);

    if (p) {
      setProduct(p);
    }
  }, []);

  return (
    <>
      <div className="Mars-cnt-container">
        <div className="Mars-breadcrumb"></div>
        <div className="Mars-cnt-main d-flex">
          <div
            className="Mars-cnt-imgwr"
            onClick={clickedBool}
            style={
              clicked
                ? { boxShadow: '0 5px 25px 0 rgb(0 0 0 / 10%)' }
                : { boxShadow: 'none' }
            }
          >
            {/* eslint-disable-next-line prettier/prettier */}
            <img src={`../${product.product_img}`} alt="" className="Mars-cnt-img" />
          </div>
          <div className="Mars-cnt-info">
            <p className="Mars-prod-name">{product.product_name}</p>
            <p className="Mars-cnt-engnum">Pon-de Uji Matcha</p>
            <p className="Mars-cnt-engnum">NT$ {product.product_price}</p>
            <p className="Mars-cnt-desc">{product.product_desc}</p>
            <button
              className="Mars-cart-btn"
              onClick={() =>
                handleAddToCarts(
                  CartProductData.sid,
                  CartProductData.product_name,
                  CartProductData.category_sid,
                  CartProductData.product_price,
                  CartProductData.product_img,
                  CartProductData.product_desc,
                  CartProductData.created_at
                )
              }
            >
              <i class="fa-solid fa-circle-plus"></i> 加入購物車
            </button>
          </div>
        </div>
        <div className="Mars-cnt-nutriwr">
          <div className="Mars-cnt-nutrition">
            <p className="Mars-nutri-p">營養成分</p>
            <div className="Mars-nutri-flex d-flex">
              <p className="Mars-nutri-p">熱量：xx kCal</p>
              <p className="Mars-nutri-p">蛋白質：xx g</p>
              <p className="Mars-nutri-p">脂肪：x g</p>
              <p className="Mars-nutri-p">碳水化合物：x g</p>
              <p className="Mars-nutri-p">鈉：x mg</p>
            </div>
            <p className="Mars-nutri-p">過敏原資訊</p>
            <div className="Mars-allergy-flex d-flex">
              <p className="Mars-nutri-p">小麥：〇</p>
              <p className="Mars-nutri-p">乳類：〇</p>
              <p className="Mars-nutri-p">蛋：〇</p>
              <p className="Mars-nutri-p">花生：Ｘ</p>
            </div>
          </div>
        </div>
        <p className="Mars-prod-name">産品推薦</p>
        <ProductRecommandCard />
      </div>
    </>
  );
}

export default Content;
