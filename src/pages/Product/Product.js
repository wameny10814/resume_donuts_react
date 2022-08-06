import './Product.css';
import ProductSlide from './components/Product-slide';
import { ProductsData } from './data/products';

function Product() {
  return (
    <>
      <div className="Mars-container">
        <div className="Mars-img-wrap">
          <img src="./images/mv_donut.jpg" className="Mars-visual" alt="" />
          {/* <p className="Mars-prod-name">商品一覽</p> */}
        </div>
        <div className="Mars-breadcrumb"></div>
        <div className=""></div>
        <div className=""></div>
        <div className="Mars-prod-filter-area"></div>
        <div className="Mars-product-slide">
          {ProductsData.map((v, i) => {
            return <ProductSlide key={v.id} {...v} />;
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
