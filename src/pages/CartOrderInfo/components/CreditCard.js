// creditCardNum: '',
// creditCardDate: '',
// creditCardName: '',
// creditSecurityCode: '',

function CreditCard(props) {
  const { creditCardData, setCreditCardData } = props;

  const handleFieldChange = (e) => {
    const newCreditCardData = {
      ...creditCardData,
      [e.target.name]: e.target.value,
    };
    setCreditCardData(newCreditCardData);

    console.log(newCreditCardData);
  };
  return (
    <>
      <div className="container">
        <h3>信用卡資訊</h3>
        <section className="cartBox">
          <div className="card">
            卡號
            <input
              type="text"
              name="creditCardNum"
              value={creditCardData.creditCardNum}
              onChange={handleFieldChange}
            />
            到期日
            <input
              type="text"
              name="creditCardDate"
              value={creditCardData.creditCardDate}
              onChange={handleFieldChange}
            />
            持卡人姓名
            <input
              type="text"
              name="creditCardName"
              value={creditCardData.creditCardName}
              onChange={handleFieldChange}
            />
            檢核碼
            <input
              type="text"
              name="creditSecurityCode"
              value={creditCardData.creditSecurityCode}
              onChange={handleFieldChange}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default CreditCard;
