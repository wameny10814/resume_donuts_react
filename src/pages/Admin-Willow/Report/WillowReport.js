import React, { useState } from 'react';
import Grap from './Grap';
function WillowReport() {
  const [reportOption, setReportOption] = useState(100);
  const roption = (e) => {
    let numv = parseInt(e.target.value);

    setReportOption(numv);
  };
  return (
    <div id="willowhavegoodprice">
      <h1>Report報表</h1>
      <div className="container mb-5">
        <div className="row">
          <div className="col">
            <button
              type="button"
              className="btn willow_button"
              value={101}
              onClick={(e) => {
                roption(e);
              }}
            >
              依時間
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn willow_button"
              value={100}
              onClick={(e) => {
                roption(e);
                console.log(reportOption);
              }}
            >
              依年齡
            </button>
          </div>
        </div>
      </div>

      <div className="container  mb-5">
        <div className="row">
          {console.log('reportOption', reportOption)}
          {reportOption === 100 && <Grap setReportOption={setReportOption} />}
        </div>
      </div>
    </div>
  );
}

export default WillowReport;
