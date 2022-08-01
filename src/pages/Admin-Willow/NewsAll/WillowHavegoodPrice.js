import React from 'react';
import { useState } from 'react';
import '../scssstyle/WillowHavegoodPrice.scss';
function WillowHavegoodPrice(props) {
  const { setOption } = props;
  return (
    <div id="willowhavegoodprice">
      <div className="container">
        <div className="row">
          <h3>WillowHavegoodPrice-Activty</h3>
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
                  <label>開始時間:</label>
                </div>
                <div>
                  <input type="date" className="form-control" id="" />
                </div>
              </div>
            </div>
            <div className="form-group  mt-3">
              <div className="d-flex">
                <div className="mt-2 willow_mar_sm">
                  <label>結束時間:</label>
                </div>
                <div>
                  <input type="date" className="form-control" id="" />
                </div>
              </div>
            </div>
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
                <img
                  src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                  className="img-fluid rounded willow_mar_sm"
                  alt="example"
                />
                <div>
                  <input id="activtyimg" name="activtyimg" type="file" />
                </div>
              </div>
            </div>
            {/* writing detail */}
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
        </div>
      </div>
    </div>
  );
}

export default WillowHavegoodPrice;
