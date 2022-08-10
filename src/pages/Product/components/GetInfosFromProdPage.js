import React, { useState } from 'react';

function GetInfosFromProdPage() {
  const [infos, setInfos] = useState[''];
  const infosOnChange = (e) => setInfos(infos);
  

//   return (
//     <div className="Mars-" onChange={infosOnChange}></div>
//   )
}

// 一樣用 v.sid 傳送到商品內容頁 (Content.js)
// e.target.value

// 參考：小汪的localStorage
// useEffect(() => {
//     getData();
//     localStorage.setItem("Room", JSON.stringify(bookingList));
// }, [bookingList]);
