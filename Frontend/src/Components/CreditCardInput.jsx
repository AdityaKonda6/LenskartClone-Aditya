import React, { useState } from 'react';

const CreditCardInput = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        placeholder="Card Number"
      />
      <input
        type="text"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
        placeholder="MM/YY"
      />
      <input
        type="text"
        value={cvc}
        onChange={(e) => setCvc(e.target.value)}
        placeholder="CVC"
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name on Card"
      />
    </div>
  );
};

export default CreditCardInput;