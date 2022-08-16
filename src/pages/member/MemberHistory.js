import React, { useState, useContext, useEffect, useRef, version } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AuthContext from '../../pages/member/components/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProductList from './MemberHistoryList';

function MemberHistory(props) {
  const { authorized, token, account, level, logout, setAuth, auth } =
    useContext(AuthContext);

  // 第一次記錄伺服器的原始資料用
  const [usersRaw, setUsersRaw] = useState([]);

  const [PODisplay, setPODisplay] = useState([]);

  const getdata = async () => {
    const response = await axios.get(
      'http://localhost:3600/member/memberhistory',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    //回來是陣列rrrr
    const res_data = response.data;
    console.log('res', res_data);

    //原始資料set state
    setUsersRaw(res_data);
    // 訂單日期格式處理


    setPODisplay(res_data);
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
          <div className="col yu_history_col_table">
            <table class="table table-hover yu_history_table">
              <thead className="yu_history_thead">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">付款狀態</th>
                  <th scope="col">訂單總金額</th>
                  <th scope="col">訂單成立日期</th>
                </tr>
              </thead>
              <tbody className="yu_history_tbody">
                {PODisplay.map((v, i) => {
                  return <ProductList key={i} detail={v} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberHistory;
