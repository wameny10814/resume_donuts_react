import { useState, useEffect } from 'react';
import axios from 'axios';
import H2 from '../../components/H2';
function Share() {
  const [share1Data, setShare1Data] = useState([]);
  const [share2Data, setShare2Data] = useState([]);
  const [share3Data, setShare3Data] = useState([]);
  const [share4Data, setShare4Data] = useState([]);
  const [share5Data, setShare5Data] = useState([]);
  const [share6Data, setShare6Data] = useState([]);
  const [share7Data, setShare7Data] = useState([]);
  const [share8Data, setShare8Data] = useState([]);

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
    setShare1Data(resdata[0]);
    setShare2Data(resdata[1]);
    setShare3Data(resdata[2]);
    setShare4Data(resdata[3]);
    setShare5Data(resdata[4]);
    setShare6Data(resdata[5]);
    setShare7Data(resdata[6]);
    setShare8Data(resdata[7]);
  };

  useEffect(() => {
    getShareData();
  }, []);

  return (
    <>
      {console.log('qweqwe', share1Data.goodimg)}
      <section className="container">
        <H2 title="好文分享" Entitle="SHARE" />
        <div className="d-flex justify-content-center share">
          <div className="col-md-6">
            <div className="d-flex h-50 w-100">
              <div className="w-50">
                <img
                  className="w-100 h-100"
                  src={`http://localhost:3600/willowimgs/${share1Data.goodimg}`}
                  alt=""
                />
              </div>
              <div className="w-50">
                <img
                  className="w-100 h-100"
                  src={`http://localhost:3600/willowimgs/${share2Data.goodimg}`}
                  alt=""
                />
              </div>
            </div>
            <div className="d-flex h-50 w-100">
              <div className="shareW-40">
                <div className="h-50">
                  <img
                    className="w-100 h-100"
                    src={`http://localhost:3600/willowimgs/${share3Data.goodimg}`}
                    alt=""
                  />
                </div>
                <div className="h-50">
                  <img
                    className="w-100 h-100"
                    src={`http://localhost:3600/willowimgs/${share4Data.goodimg}`}
                    alt=""
                  />
                </div>
              </div>
              <div className="shareW-60">
                <img
                  className="w-100 h-100"
                  src={`http://localhost:3600/willowimgs/${share5Data.goodimg}`}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <img
              className="w-100 h-100"
              src={`http://localhost:3600/willowimgs/${share6Data.goodimg}`}
              alt=""
            />{' '}
          </div>
          <div className="col-md-4">
            <div className="h-50">
              <img
                className="w-100 h-100"
                src={`http://localhost:3600/willowimgs/${share7Data.goodimg}`}
                alt=""
              />{' '}
            </div>
            <div className="h-50">
              <img
                className="w-100 h-100"
                src={`http://localhost:3600/willowimgs/${share8Data.goodimg}`}
                alt=""
              />{' '}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Share;
