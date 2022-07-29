import './Product.css';

function Content() {
  return (
    <>
      <div className="Mars-cnt-container">
        <div className="Mars-breadcrumb"></div>
        <div className="d-flex">
          <div className="Mars-cnt-imgwr">
            {/* eslint-disable-next-line prettier/prettier */}
            <img src="./images/uji-matcha.jpg" alt="" className="Mars-cnt-img" />
          </div>
          <div className="Mars-cnt-info">
            <p className="Mars-prod-name">宇治抹茶那提</p>
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
      </div>
    </>
  );
}

export default Content;
