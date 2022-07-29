import React from 'react';
import { Container, Row, Form, Button, Image } from 'react-bootstrap';
import '../scssstyle/WillowHavegoodPrice.scss';
function WillowHavegoodPrice() {
  return (
    <div id="willowhavegoodprice">
      <div className="container">
        <div className="row">
          <h3>WillowHavegoodPrice-Activty</h3>
          {/* <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1">
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form> */}
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
                  <input type="file" />
                </div>
              </div>
            </div>
            <div className="d-flex d-flex justify-content-center mt-5 mb-5">
              <button type="submit" className="btn  mt-3">
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
