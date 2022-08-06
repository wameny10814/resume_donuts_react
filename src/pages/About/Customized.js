import { useState } from 'react';
import H2 from '../../components/H2';

function Customized() {
  const [wheel, setWheel] = useState('origin');

  const selectWheel = (e) => {
    const newWheel = e.target.value;
    setWheel(newWheel);
    console.log(newWheel);
  };

  return (
    <>
      <div className="container vh-100">
        <H2 title={'製作獨特的甜甜圈'} Entitle={'Customized'}></H2>
        <div className="d-flex">
          <div className="col-12 col-md-4 bingControl h-100">
            <h6>請選擇基本口味</h6>
            <input
              type="radio"
              value="origin"
              name="cus_wheel"
              onChange={selectWheel}
            />
            <label>原味</label>
            <img className="w-25" src="./images/Customized/origin.jpg" alt="" />
            <input
              type="radio"
              value="strawberry"
              name="cus_wheel"
              onChange={selectWheel}
            />
            <label>草莓</label>
            <img
              className="w-25"
              src="./images/Customized/strawberry.jpg"
              alt=""
            />
            <input
              type="radio"
              value="matcha"
              name="cus_wheel"
              onChange={selectWheel}
            />
            <label>抹茶</label>
            <img className="w-25" src="./images/Customized/matcha.jpg" alt="" />
            <input
              type="radio"
              value="chocolate"
              name="cus_wheel"
              onChange={selectWheel}
            />
            <label>巧克力</label>
            <img
              className="w-25"
              src="./images/Customized/chocolate.jpg"
              alt=""
            />
            <h6>請選擇配料</h6>
            <input
              type="radio"
              value="sugar"
              name="cus_wheel"
              onChange={selectWheel}
            />
            <label>糖粉</label>
            <img className="w-25" src="./images/Customized/sugar.jpg" alt="" />
            <input
              type="radio"
              value="chocolate2"
              name="cus_wheel"
              onChange={selectWheel}
            />
            <label>巧克力</label>
            <img
              className="w-25"
              src="./images/Customized/chocolate2.jpg"
              alt=""
            />
            <input
              type="radio"
              value="cotton"
              name="cus_wheel"
              onChange={selectWheel}
            />
            <label>棉花糖</label>
            <img className="w-25" src="./images/Customized/cotton.jpg" alt="" />
          </div>
          <div className="col-12 col-md-8">
            <img
              className="w-100"
              src={`./images/Customized/${wheel}.jpg`}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Customized;
