import React, { useState, useContext, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AuthContext from '../../pages/member/components/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function MemberHistory() {
  const { authorized, token, account, level, logout, setAuth, auth } =
    useContext(AuthContext);

  // 第一次記錄伺服器的原始資料用
  const [usersRaw, setUsersRaw] = useState('');

  const getdata = async () => {
    const response = await axios.get(
      'http://localhost:3600/member/memberhistory',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const r = response.data;
    const res_data = r[0];
    console.log('res', res_data);
    setUsersRaw(res_data);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div className="container">
        <header className="yu_header">
          <h2>會員訂單</h2>
        </header>
        <nav className="yu_bar_nav">
          <div className="container yu_container">
            <ul className="yu_bar_ul">
              <li>
                <Link className="nav-link" to="/Membercenter">
                  <i className="fa-solid fa-user"></i>會員專區
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/MemberPsdchange">
                  <i className="fa-solid fa-user"></i>密碼更新
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="row">
          <div className="col yu_history_col_table" style={{ padding: '0%' }}>
            <table class="table table-hover yu_history_table">
              <thead className="yu_history_thead">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody className="yu_history_tbody">
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberHistory;
