import './Product.css';
import ProductSlide from './components/Product-slide';

function Product() {
  return (
    <>
      <div className="Mars-container">
        <div className="Mars-img-wrap">
          <img src="./images/mv_donut.jpg" className="Mars-visual" alt=""></img>
        </div>
        <div className="Mars-breadcrumb"></div>
        <div className=""></div>
        <div className=""></div>
        <div className="Mars-prod-filter-area"></div>
        <div className="Mars-product-slide col-4 d-flex">
          <ProductSlide />
        </div>
        {/* 飲料區待定 */}
      </div>
    </>
  );
}

export default Product;
