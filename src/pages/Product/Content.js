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
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
