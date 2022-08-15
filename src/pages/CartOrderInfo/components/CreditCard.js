// creditCardNum: '',
// creditCardDate: '',
// creditCardName: '',
// creditSecurityCode: '',

function CreditCard(props) {
  const { personalData, setPersonalData } = props;

  const handleFieldChange = (e) => {
    const newPersonalData = {
      ...personalData,
      [e.target.name]: e.target.value,
    };
    setPersonalData(newPersonalData);

    console.log(newPersonalData);
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
              value={personalData.creditCardNum}
              onChange={handleFieldChange}
            />
            到期日
            <input
              type="text"
              name="creditCardDate"
              value={personalData.creditCardDate}
              onChange={handleFieldChange}
            />
            持卡人姓名
            <input
              type="text"
              name="creditCardName"
              value={personalData.creditCardName}
              onChange={handleFieldChange}
            />
            檢核碼
            <input
              type="text"
              name="creditSecurityCode"
              value={personalData.creditSecurityCode}
              onChange={handleFieldChange}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default CreditCard;
