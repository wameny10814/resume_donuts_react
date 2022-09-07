import React, { useState, useContext, useEffect, useRef, version } from 'react';
import axios from 'axios';
import AuthContext from '../../pages/member/components/AuthContext';

function MemberHistoryList(props) {
  const { authorized, token } = useContext(AuthContext);
  const { created_at, pay_price, total_quantity, sid } = props.detail;
  const { setUserPOSid, getUsePOSid } = props;

  const [UsersRaw, setUsersRaw] = useState([]);
  const [PODisplay, setPODisplay] = useState([]);
  const [POdidGot,setPOdidGot]=useState(false);


  const getdata = async () => {
    if(POdidGot===false){
      console.log('1');
      const response = await axios.get(

        'http://localhost:3600/member/memberhistorylist',
        {
          headers: {
            Authorization: `Bearer ${token}`,
            getUsePOSid: sid,
          },
        }
      );
      //回來是陣列rrrr
      const res_data = response.data;
      console.log('polist', res_data);
      // if (res_data.length !== 0) {
      //   setGetPO(true);
      // }
      // //原始資料set state
      setUsersRaw(res_data);
      setPODisplay(res_data);
      //拿取用戶點擊的該訂單詳細資訊
      //getUsePOSid 拿用戶點擊的訂單sid
      setPOdidGot(true);
      
    }else{
      setPOdidGot(false);
      console.log('2');
      setUsersRaw([]);
      setPODisplay([]);
      return;}
    
  };
  return (
    <>
      <tr onClick={getdata}>
        <th scope="row">{props.num + 1}</th>
        <td>{total_quantity}</td>
        <td>{pay_price}</td>
        <td>{created_at.slice(0, 10)}</td>
      </tr>
      {PODisplay.map((v, i) => {
        return (
          <tr key={i}>
            <th scope="row">訂單資訊</th>
            <td>產品名稱{v.p_name}</td>
            <td>數量{v.quantity}</td>
            <td>價錢{v.price}</td>
          </tr>
        )

          ;
      })}
    </>
  );
}

export default MemberHistoryList;
