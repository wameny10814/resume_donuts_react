import H2 from '../../components/H2';

function CartOrderCompleted() {
  return (
    <>
      <H2 title={'訂購成功'} Entitle={'CartOrderCompleted'} />
      <section className="cartBox">
        <div className="container">
          <div className="card">

            <p>您的商品已經訂購成功</p>
            <p>訂單編號為</p>
            <p>請於3日內到店取貨</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartOrderCompleted;
