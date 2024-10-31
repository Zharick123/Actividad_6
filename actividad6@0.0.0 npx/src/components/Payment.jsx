import React, { useState } from 'react';
import Modal from 'react-modal';

const Payment = ({ isOpen, onRequestClose }) => {
  const [amount, setAmount] = useState('');

  const handlePayment = () => {
    // Lógica para procesar el pago
    console.log(`Pagando ${amount} COP`);
    onRequestClose(); // Cerrar modal
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Proceso de Pago</h2>
      <label>
        Monto:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <button onClick={handlePayment}>Pagar</button>
      <button onClick={onRequestClose}>Cerrar</button>
    </Modal>
  );
};

export default Payment;
