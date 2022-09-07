import React, { useState } from 'react';
import AccountDisplay from '../Components/Account/AccountDisplay';

function Account() {
  const [method, setMethod] = useState('My Details');
  const handleClick = (event) => {
    setMethod(event.currentTarget.value);
  };

  return <AccountDisplay method={method} handleClick={handleClick} />;
}
export default Account;
