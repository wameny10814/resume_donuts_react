import H2 from './H2';
function Share() {
  return (
    <>
      <section className="Share">
        <H2 title="會員分享" Entitle="SOCIAL" />
        <div className="container col-12 d-flex">
          <div className="col-6 d-flex flex-wrap">
            <div className="w-50">
              <img className="bingShare w-100" src="./images/Share-1.svg" alt="" />
            </div>
            <div className="w-50">
              <img className="bingShare w-100" src="./images/Share-2.svg" alt="" />
            </div>
            <div className="col-4 d-flex flex-wrap">
              <div className="col-12">
                <img className="bingShare " src="./images/Share-3.svg" alt="" />
              </div>
              <div className="col-12">
                <img className="bingShare" src="./images/Share-4.svg" alt="" />
              </div>
            </div>
            <div className="col-8">
              <img className="bingShare" src="./images/Share-5.svg" alt="" />
            </div>
          </div>
          <div className="col-6 d-flex flex-wrap">
            <div className="col-5">
              <img className="bingShare" src="./images/Share-6.svg" alt="" />
            </div>
            <div className="col-7">
              <div className="col-6">
                <img className="bingShare" src="./images/Share-7.svg" alt="" />
              </div>
              <div className="col-6">
                <img className="bingShare" src="./images/Share-8.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Share;
