import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
function WillowNews(props) {
  const { setOption } = props;
  const [imgname, setImgname] = useState('');
  const [finalimgname, setFinalimgname] = useState('');
  const fakeClickUploadimage = () => {
    const c = document.getElementById('newsimg');
    c.click();
  };

  const logsee = async (e) => {
    // console.log('logsee', e.target.files[0].name);
    const fdimg = new FormData(document.uploadimgFrom);
    console.log(fdimg);
    const response = await axios.post('http://localhost:3600/willow-upload', {
      body: fdimg,
    });
    const resdata = response.data;
    console.log(response);
  };

  // console.log('img', imgname);

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

          <form>
            <div className="form-group mt-3">
              <div className="d-flex">
                <div className="mt-2 willow_mar_sm">
                  <label>文章標題:</label>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="文章標題"
                    className="form-control"
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
                  <img
                    src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                    className="img-fluid rounded willow_mar_sm"
                    alt="example"
                  />
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
                    id="exampleFormControlTextarea1"
                    cols="30"
                    rows="10"
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