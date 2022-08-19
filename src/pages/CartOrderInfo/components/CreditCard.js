// creditCardNum: '',
// creditCardDate: '',
// creditCardName: '',
// creditSecurityCode: '',

function CreditCard(props) {
  const { personalData, setPersonalData, handleFieldChange } = props;

  return (
    <>
      <div className="container">
        <p className="loveyu-orderTitle">信用卡資訊</p>

        <section className="cartBox">
          <div className="card">
            <div className="yu_inputblock">
              <label>卡號</label>
              <input
                type="text"
                name="creditCardNum"
                value={personalData.creditCardNum}
                onChange={handleFieldChange}
              />
              <label>到期日</label>
              <input
                type="text"
                name="creditCardDate"
                value={personalData.creditCardDate}
                onChange={handleFieldChange}
              />
              <label>持卡人姓名</label>
              <input
                type="text"
                name="creditCardName"
                value={personalData.creditCardName}
                onChange={handleFieldChange}
              />
              <label>檢核碼</label>
              <input
                type="text"
                name="creditSecurityCode"
                value={personalData.creditSecurityCode}
                onChange={handleFieldChange}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CreditCard;
