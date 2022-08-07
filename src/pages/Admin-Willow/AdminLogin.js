import React, { Fragment, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminAuthContext from '../Admin-Willow/admin_components/AdminAuthContext';
import './scssstyle/AdminLoginStyle.scss';
import axios from 'axios';
function AdminLogin() {
  const navigate = useNavigate();
  const { setAdmin_Auth } = useContext(AdminAuthContext);

  const [adminlogin, setAdminLogin] = useState({
    admin_account: '',
    admin_password: '',
  });

  const changeFields = (event) => {
    const id = event.target.id;
    const val = event.target.value;
    console.log({ id, val });
    setAdminLogin({ ...adminlogin, [id]: val });
  };

  const clickSubmit = async (e) => {
    e.preventDefault();
    const data = adminlogin;
    console.log('asd', data);
    const response = await axios.post(
      'http://localhost:3600/adminlogin-jwt',
      data
    );
    const resdata = response.data;
    // const info_bar = document.querySelector('#info-bar-success');
    // info_bar.style.display = 'block';
    // console.log(resdata);
    // console.log(resdata.admin_success);
    // console.log(resdata.admin_data.admin_account);
    // console.log(resdata.admin_data.admin_name);
    if (resdata.admin_success) {
      localStorage.setItem('admin_auth', JSON.stringify(resdata.admin_data));
      
      setAdmin_Auth({ ...resdata.admin_data, admin_authorized: true });
      navigate('/adminplace');
    } else {
      alert('帳號密碼輸入有誤');
    }
    // setTimeout(() => {
    //   console.log('Delayed for 1 second.');
    // }, '1000');
  };
  return (
    <div id="willow_adminloginstyle">
      {/*  style={{ width: '100%', height: '100vh' }} */}
      <div className="container willow_minhight">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">AdminLogin</h3>
                <form name="myadminform">
                  <div className="mb-3">
                    <label className="form-label ">*帳號</label>
                    <input
                      type="text"
                      className="form-control"
                      id="admin_account"
                      name="admin_account"
                      value={adminlogin.admin_account}
                      onChange={(e) => {
                        changeFields(e);
                      }}
                      required
                    />
                    <div className="form-text red"></div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">密碼</label>
                    <input
                      type="password"
                      className="form-control"
                      id="admin_password"
                      name="admin_password"
                      value={adminlogin.admin_password}
                      onChange={(e) => {
                        changeFields(e);
                      }}
                    />
                    <div className="form-text red"></div>
                  </div>
                  <button
                    type="submit"
                    className="btn willow_button"
                    onClick={(e) => {
                      clickSubmit(e);
                    }}
                  >
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
