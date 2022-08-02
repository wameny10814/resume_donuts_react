import ProjectButton from '../../components/ProjectButton/ProjectButton';

function Story() {
  return (
    <>
      <section>
        <div className="d-flex my-5 py-5">
          <div className="col-md-4 d-none d-md-block my-auto">
            <img className="w-100" src="./images/story-img-1.svg" alt="" />
          </div>
          <div className="col-1 d-none d-md-block"></div>
          <div className="col-12 col-md-7">
            <h2 className="bingH2 my-5">デザインコンセプトは「猫」</h2>
            <div className="d-flex">
              <div>
                <p className="col-12 col-md-9 bingText-16 mb-5">
                  Pochi屋是隱藏在台北巷弄內的甜點店，希望帶給貴賓舒適自在的感受。提供健康美味兼具的甜點是我們負責任的態度，在這裡美食成為簡單易懂的共同語言，讓身心盈滿幸福能量。
                </p>
                <div>
                  <ProjectButton text="LEARN MORE" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="bing-maxwidth">
                  <img
                    className="w-100"
                    src="./images/story-img-2.svg"
                    alt=""
                  />
                </div>
                <div className="position-relative bingimg3">
                  <img
                    className="w-100"
                    src="./images/story-img-3.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Story;
