import H2 from './H2';
function Share() {
  return (
    <>
      <H2 title="會員分享" Entitle="SOCIAL" />

      <section className="container">
        <div className="d-flex justify-content-center Share">
          <div className="col-md-5">
            <div className="d-flex">
              <div className="w-50">
                <img
                  className="w-100 h-100"
                  src="./images/Share-1.svg"
                  alt=""
                />
              </div>
              <div className="w-50">
                <img
                  className="w-100 h-100"
                  src="./images/Share-2.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="d-flex">
              <div className="ShareW-40">
                <div className="h-50">
                  <img
                    className="w-100 h-100"
                    src="./images/Share-3.svg"
                    alt=""
                  />
                </div>
                <div className="h-50">
                  <img
                    className="w-100 h-100"
                    src="./images/Share-4.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="ShareW-60">
                <img
                  className="w-100 h-100"
                  src="./images/Share-5.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <img className="h-100" src="./images/Share-6.svg" alt="" />
          </div>
          <div className="col-md-4">
            <div className="h-50">
              <img className="w-100" src="./images/Share-7.svg" alt="" />
            </div>
            <div className="h-50">
              <img
                className="w-100 h-100 overflow-hidden"
                src="./images/Share-8.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Share;
