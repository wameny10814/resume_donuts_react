import React, { Fragment } from 'react';
import './scssstyle/AdminLoginStyle.scss';
function AdminLogin() {
  return (
    <div id="willow_adminloginstyle">
      {/*  style={{ width: '100%', height: '100vh' }} */}
      <div className="container willow_minhight">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">AdminLogin</h3>
                <form name="form1">
                  <div className="mb-3">
                    <label className="form-label ">*帳號</label>
                    <input
                      type="text"
                      className="form-control"
                      id="account"
                      name="account"
                      required
                    />
                    <div className="form-text red"></div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">密碼</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                    />
                    <div className="form-text red"></div>
                  </div>
                  <button type="submit" className="btn willow_button">
                    登入
                  </button>
                </form>
                <div
                  id="info-bar"
                  className="alert alert-success"
                  role="alert"
                  style={{ display: 'none' }}
                >
                  登入成功
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
