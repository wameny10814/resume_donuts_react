import ProjectButton from '../../components/ProjectButton/ProjectButton';
import H2 from '../../components/H2';

function News() {
  return (
    <>
      <section className='my-5'>
        <H2 title="最新消息" Entitle="NEWS" />
        <div className="container d-flex my-5 flex-wrap">
          <div className="col-12 col-md-6">
            <img
              className="w-100 h-auto"
              src="./images/News-img-1.svg"
              alt=""
            />
          </div>
          <div className="col-12 col-md-6">
            <p className="bingH4 mx-auto col-10 pt-5 my-5">新聞標題</p>
            <p className="bingText-16 mx-auto col-10">
              說到最可愛的卡通代表，少不了三麗鷗最受歡迎的HELLO
              KITTY，外型可愛療癒，放在各種物品上更是加倍卡哇伊，大同電鍋最新推出11人份HELLO
              KITTY珍珠奶茶不鏽鋼電鍋，一邊吃粽子一編配珍珠奶茶，可愛模樣怎麼能不收藏啦！
            </p>
            <div className="text-center my-5">
              <ProjectButton text="MORE" />
            </div>
            <ul className="mt-5">
              <li className="bing-News-dot"></li>
              <li className="bing-News-dot"></li>
              <li className="bing-News-dot"></li>
              <li className="bing-News-dot"></li>
              <li className="bing-News-dot"></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default News;
