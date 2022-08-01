import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
function WillowNews(props) {
  const { setOption } = props;
  const [imgname, setImgname] = useState('');
  const [mainform, setMainform] = useState({
    // userid,newstitle ,words, newsimg
    userid: 0,
    newstitle: '',
    words: '',
    newsimg: '',
    newsstyle: 1,
  });
  const fakeClickUploadimage = () => {
    const c = document.getElementById('newsimg');
    console.log(c);
    c.click();
  };

  const clickSubmit = async (e) => {
    e.preventDefault();
    // console.log('asdqwe');

    const data = mainform;
    console.log(data);
    const response = await axios.post(
      'http://localhost:3600/willownews/newsadd',
       data 
    );
    // const resdata = response.data;
    // console.log(resdata.filename);
    // setImgname(resdata.filename);
  };

  const logsee = async (e) => {
    const data = new FormData(document.uploadimgFrom);

    const response = await axios.post(
      'http://localhost:3600/willow-upload',
      data
    );
    const resdata = response.data;
    console.log(resdata.filename);
    setImgname(resdata.filename);

    setMainform({ ...mainform, ['newsimg']: resdata.filename });
  };
  // console.log(mainform);
  const changeFields = (event) => {
    const id = event.target.id;
    const val = event.target.value;
    console.log({ id, val });
    setMainform({ ...mainform, [id]: val });
  };

  useEffect(() => {}, [imgname]);

  return (
    <div id="willowhavegoodprice">
      <div className="container">
        <div className="row">
          <h3>WillowNews</h3>
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn  mt-3 willow_button"
              onClick={() => {
                setOption(0);
              }}
            >
              回首頁
            </button>
          </div>

          <form
            name="mainForm"
            onSubmit={(e) => {
              clickSubmit(e);
            }}
          >
            <div className="form-group mt-3">
              <div className="d-flex">
                <div className="mt-2 willow_mar_sm">
                  <label>文章標題:</label>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    id="newstitle"
                    placeholder="文章標題"
                    className="form-control"
                    value={mainform.newstitle}
                    onChange={(e) => {
                      changeFields(e);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="form-group mt-3">
              <div className="d-flex">
                <div className="mt-2 willow_mar_sm">
                  <label>上傳圖片:</label>
                </div>

                <div>
                  {!!imgname ? (
                    <img
                      src={`http://localhost:3600/willowimgs/${imgname}`}
                      className="img-fluid rounded willow_mar_sm"
                      alt="example"
                    />
                  ) : (
                    <img
                      src="http://mdbootstrap.com/img/new/standard/city/044.webp"
                      className="img-fluid rounded willow_mar_sm"
                      alt="example"
                    />
                  )}
                </div>
                <div>
                  <input type="hidden" name="photos" value={`${imgname}`} />
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      fakeClickUploadimage();
                    }}
                  >
                    上傳圖片
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-3 mt-3">
              <div className="d-flex">
                <div className="mt-2 willow_mar_sm">
                  <label>詳細內容:</label>
                </div>
                <div className=" flex-grow-1">
                  <textarea
                    className="form-control"
                    id="words"
                    cols="30"
                    rows="10"
                    value={mainform.words}
                    onChange={(e) => {
                      changeFields(e);
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="d-flex d-flex justify-content-center mt-5 mb-5">
              <button type="submit" className="btn  mt-3 willow_button">
                Submit
              </button>
            </div>
          </form>

          {/* hidden form */}
          <form name="uploadimgFrom">
            <div>
              <input
                id="newsimg"
                name="newsimg"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  logsee(e);
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WillowNews;
