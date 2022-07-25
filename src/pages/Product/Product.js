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
        <div className=""></div>
        <div className="Mars-product-slide col-4 d-flex">
          <ProductSlide />
        </div>
      </div>
    </>
  );
}

export default Product;
