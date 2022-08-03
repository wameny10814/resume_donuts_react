import './Product.css';
import ImgOnClick from './components/Img-onclick';
import ProductRecommandCard from './components/Product-recommand';

function Content() {
  return (
    <>
      <div className="Mars-cnt-container">
        <div className="Mars-breadcrumb"></div>
        <div className="Mars-cnt-main d-flex">
          <div className="Mars-cnt-imgwr" onClick={ImgOnClick}>
            {/* eslint-disable-next-line prettier/prettier */}
            <img src="./images/uji-matcha.jpg" alt="" className="Mars-cnt-img" />
          </div>
          <div className="Mars-cnt-info">
            <p className="Mars-prod-name">宇治抹茶波提</p>
            <p className="Mars-cnt-engnum">Pon-de Uji Matcha</p>
            <p className="Mars-cnt-engnum">NT$ 45</p>
            <p className="Mars-cnt-desc">
              大家好！我是好吃的宇治抹茶波堤！嚴選京都宇治的茶葉，和波堤是絶妙搭配
            </p>
            <a href="../Cart">
              {/* eslint-disable-next-line prettier/prettier */}
              <button className="Mars-cart-btn"><i class="fa-solid fa-circle-plus"></i> 加入購物車</button>
            </a>
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
        <p className="Mars-prod-name">產品推薦</p>
        <ProductRecommandCard />
      </div>
    </>
  );
}

export default Content;
