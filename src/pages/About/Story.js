import ProjectButton from '../../components/ProjectButton/ProjectButton';

function Story() {
  return (
    <>

{/* 桌機板 */}
      <section className="d-none d-sm-block">
        <div className="d-flex">
          <div className="col-md-5 my-auto">
            <img className="w-75" src="./images/story-img-1.svg" alt="" />
          </div>
          <div className="col-md-7">
            <h2 className="bingH2 my-5">デザインコンセプトは「猫」</h2>
            <p className="w-50 bingText-16 mb-5">
              Pochi屋是隱藏在台北巷弄內的甜點店，希望帶給貴賓舒適自在的感受。提供健康美味兼具的甜點是我們負責任的態度，在這裡美食成為簡單易懂的共同語言，讓身心盈滿幸福能量。
            </p>
            <div className="">
              <div>
                <ProjectButton className="w-25" text="LEARN MORE" />
              </div>
              <div className="w-75">
                <img className="w-100" src="./images/story-23.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>


{/* 手機板 */}
      <section className="d-block d-sm-none">
        <div className="col-12">
          <h2 className="bingH2 my-5">デザインコンセプトは「猫」</h2>

          <p className="bingText-16">
            Pochi屋是隱藏在台北巷弄內的甜點店，希望帶給貴賓舒適自在的感受。提供健康美味兼具的甜點是我們負責任的態度，在這裡美食成為簡單易懂的共同語言，讓身心盈滿幸福能量。
          </p>
          <ProjectButton text="LEARN MORE" />
        </div>
        <img className="w-100" src="./images/story-23.svg" alt="" />
      </section>
    </>
  );
}

export default Story;
