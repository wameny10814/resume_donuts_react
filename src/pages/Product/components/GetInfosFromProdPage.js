import React, { useState } from 'react';

function GetInfosFromProdPage() {
  const [infos, setInfos] = useState[''];
  const infosOnChange = (e) => setInfos(infos);
  

  // const getProductDetail = async () => {
  //   const response = await fetch('http://localhost:3000/Product/' + sid, {
  //     method: 'get',
  //   })
  //   const data = await response.json()
  //   console.log(data)
  //   setProductDetail(data.detail[0])
  //   setProductRelated(data.related)
  // }

  // async function getProductIdServer() {
  //   const url = `http://localhost:3000/Product/${id}`

  //   // 注意header資料格式要設定，伺服器才知道是json格式
  //   const request = new Request(url, {
  //     method: 'GET',
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }),
  //   })

  //   const response = await fetch(request)
  //   const data = await response.json()
  //   const imgData = data.product_image
  //   const imgArr = JSON.parse(imgData)
  //   // console.log(data)
  //   // console.log(imgData)
  //   // console.log(imgArr)

  //   setProMutImgTry(imgArr)

  //   // 設定資料
  //   console.log('data', data)
  //   setProduct(data)
  //   setProId(data.sid)
  //   setProName(data.product_name)
  //   setProPrice(data.product_price)
  //   setProDes(data.product_desc)

  //   console.log('proNum', proNum)
  // }
  // useEffect(() => {
  //   getProductIdServer()
  // }, [])

// 這區是我的
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

// 學長姐程式碼
// https://github.com/EasonLiu0913/honki_react/blob/master/src/wei/pages/Product.js