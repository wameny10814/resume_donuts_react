import { useState, useEffect } from 'react';
import axios from 'axios';
import H2 from '../../components/H2';
function Share() {
  const [shareData, setShareData] = useState([]);
  
  //資料結構
  //   good_at: "2022-08-11T03:42:53.000Z"
  // goodimg: "732a871b-6268-47d5-a211-abb05369f218.jpg"
  // goodtitle: "123"
  // goodwords: "123"
  // goodwritingid: 14
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
      {shareData.length > 0 && (
        <section className="container">
          <H2 title="好文分享" Entitle="SHARE" />
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
                  <img
                    className="w-100 h-100"
                    src={`http://localhost:3600/willowimgs/${shareData[1].goodimg}`}
                    alt=""
                  />
                </div>
              </div>
              <div className="d-flex h-50 w-100">
                <div className="shareW-40">
                  <div className="h-50">
                    <img
                      className="w-100 h-100"
                      src={`http://localhost:3600/willowimgs/${shareData[2].goodimg}`}
                      alt=""
                    />
                  </div>
                  <div className="h-50">
                    <img
                      className="w-100 h-100"
                      src={`http://localhost:3600/willowimgs/${shareData[3].goodimg}`}
                      alt=""
                    />
                  </div>
                </div>
                <div className="shareW-60">
                  <img
                    className="w-100 h-100"
                    src={`http://localhost:3600/willowimgs/${shareData[4].goodimg}`}
                    alt=""
                  />
                </div>
              </div>
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
                <img
                  className="w-100 h-100"
                  src={`http://localhost:3600/willowimgs/${shareData[6].goodimg}`}
                  alt=""
                />
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
        </section>
      )}
    </>
  );
}

export default Share;
