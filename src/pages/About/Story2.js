function Story2() {
  return (
    <>
      <section className="container vh-100 ">
        <div className="d-flex">
          <div className=" col-md-4 d-none d-md-block">
            <img src="./images/story2.svg" alt="" />
          </div>
          <div className="col-12 col-md-8 ">
            <h2 className="bingH2 my-5">「嚴選」食材</h2>
            <p className="col-12 col-md-9 bingText-16 mb-5">
              處在講究飲食健康、營養均衡的時代，Pochi屋堅持使用天然有機食材，為顧客提供品項眾多的選擇，這一切都是為了傳達健康、友善環境的理念。
            </p>
            <img
              className="bingflag1 position-relative mx-3"
              src="./images/flag1.svg"
              alt=""
            />
            <img
              className="bingflag2 position-relative mx-3"
              src="./images/flag2.svg"
              alt=""
            />
            <img
              className="bingflag3 position-relative mx-3"
              src="./images/flag3.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Story2;
