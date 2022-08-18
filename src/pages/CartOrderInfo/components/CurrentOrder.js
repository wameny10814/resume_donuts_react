// 每個商品的物件
// {
//   "sid": "1",
//   "product_name": "草莓波堤",
//   "category_sid": "1",
//   "product_price": "$35",
//   "product_img": "./images/pon-de-strawberry.jpeg",
//   "product_desc": "草莓甜甜的滋味，配上波堤可愛的風格",
//   "created_at": "2022-05-31 08:28:44"
//   "conut":"1", 紀錄每個商品被買了幾個
// }

import * as React from 'react';

function CurrentOrder(props) {
  const { setCarts, carts } = props;

  return (
    <>
      <section className="cartBox">
        <div className="container">
          <div className="card">
            <div className="row">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">商品ID</th>
                    <th scope="col">商品圖片</th>
                    <th scope="col">商品名稱</th>
                    <th scope="col">單價</th>
                    <th scope="col">數量</th>
                    <th scope="col">小計</th>
                  </tr>
                </thead>

                {carts.map((v, i) => {
                  const subtotal = v.count * v.product_price;
                  return (
                    <tbody>
                      <tr >
                        <th scope="row">{v.sid}</th>
                        <td>{v.product_img}</td>
                        <td>{v.product_name}</td>
                        <td>{v.product_price}</td>
                        <td>{v.conut}</td>
                        <td>{subtotal}</td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CurrentOrder;
