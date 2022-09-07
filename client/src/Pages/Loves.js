import React, { useState } from 'react';
import AccountDisplay from '../Components/Account/AccountDisplay';

function Loves() {
  const [method, setMethod] = useState('My Watchings');
  const handleClick = (event) => {
    setMethod(event.currentTarget.value);
  };

  return <AccountDisplay method={method} handleClick={handleClick} />;
}
export default Loves;
