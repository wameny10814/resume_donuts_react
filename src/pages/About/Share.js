import { useState, useEffect } from 'react';
import axios from 'axios';
import H2 from '../../components/H2';
function Share() {
  const [shareData, setShareData] = useState([]);

  //資料結構
  // good_at: "2022-08-04T11:01:24.000Z"
  // goodimg: "3e408862-c955-4b88-9f90-1f774952f87f.jpg"
  // goodtitle: "安安"
  // goodwords: "這篇文章介紹了CSS文字的水平和垂直對齊方式
  // goodwritingid: 6
  // userid: 0

  const getShareData = async () => {
    const response = await axios.get(
      `http://localhost:3600/willownews/goodwritingdata`
    );
    const resdata = response.data;
    setShareData(resdata);
  };

  useEffect(() => {
    getShareData();
  }, []);

  return (
    <>
<<<<<<< HEAD
      {console.log(shareData[0])}
      <section className="container">
        <H2 title="好文分享" Entitle="SHARE" />
        <div className="d-flex justify-content-center share">
          <div className="col-md-6">
            <div className="d-flex h-50 w-100">
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
            <div className="d-flex h-50 w-100">
              <div className="shareW-40">
                <div className="h-50">
=======
      <H2 title="好文分享" Entitle="SHARE" />
      <section className="container">
        {shareData.length > 0 && (
          <div className="d-flex justify-content-center share">
            <div className="col-md-6">
              <div className="d-flex h-50 w-100">
                <div className="w-50">
                  <img
                    className="w-100 h-100"
                    src={`http://localhost:3600/willowimgs/${shareData[0].goodimg}`}
                    alt=""
                  />
                </div>
                <div className="w-50">
>>>>>>> b546b9a9d94615df5b2112ae104f986ad31bd7b3
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
<<<<<<< HEAD
              <div className="shareW-60">
=======
            </div>
            <div className="col-md-2">
              <img
                className="w-100 h-100"
                src={`http://localhost:3600/willowimgs/${shareData[5].goodimg}`}
                alt=""
              />
            </div>
            <div className="col-md-4">
              <div className="h-50">
>>>>>>> b546b9a9d94615df5b2112ae104f986ad31bd7b3
                <img
                  className="w-100 h-100"
                  src="./images/Share-5.svg"
                  alt=""
                />
<<<<<<< HEAD
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <img className="h-100 w-100" src="./images/Share-6.svg" alt="" />
          </div>
          <div className="col-md-4">
            <div className="h-50">
              <img className="w-100 h-100" src="./images/Share-7.svg" alt="" />
            </div>
            <div className="h-50">
              <img className="w-100 h-100" src="./images/Share-8.svg" alt="" />
            </div>
          </div>
        </div>
=======
              </div>
              <div className="h-50">
                <img
                  className="w-100 h-100"
                  src={`http://localhost:3600/willowimgs/${shareData[7].goodimg}`}
                  alt=""
                />
              </div>
            </div>
          </div>
        )}
>>>>>>> b546b9a9d94615df5b2112ae104f986ad31bd7b3
      </section>
    </>
  );
}

export default Share;
