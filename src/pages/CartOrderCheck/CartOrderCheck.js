import React, { useState, useContext, createContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import H2 from '../../components/H2';
import CurrentOrder from '../CartOrderInfo/components/CurrentOrder';
import PersonalCheck from './components/PersonalCheck';
import ProjectButton from '../../components/ProjectButton/ProjectButton';

function CartOrderCheck(props) {
  const { setCarts, carts, personalDataFinal, setPersonalDataFinal } = props;

  return (
    <div className="container">
      <H2 title="請確認訂單資訊" Entitle="ORDER CHECK" />
      <CurrentOrder setCarts={setCarts} carts={carts} />
      <PersonalCheck
        personalDataFinal={personalDataFinal}
        setPersonalDataFinal={setPersonalDataFinal}
      />
      <Link to="/Cart/CartOrderCompleted">
        <ProjectButton className="w-25" text="下一步" type="submit" />
      </Link>
    </div>
  );
}

export default CartOrderCheck;
