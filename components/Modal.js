// components/Modal.js
import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#4CAF50', // Green background color
    borderRadius: '10px', // Rounded corners
    padding: '20px', // Padding around the content
    maxWidth: '400px', // Maximum width of the modal
    textAlign: 'center', // Center-align content
  },
};

const PaymentSuccessModal = ({ isOpen, closeModal, bankNumber, personName }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Payment Success Modal"
    >
      <h2 style={{ color: '#fff' }}>Payment Successful!</h2>
      <p style={{ color: '#fff' }}>Your payment has been successfully processed.</p>
      {/* Additional details */}
      <div style={{ marginTop: '20px' }}>
        <p style={{ color: '#fff', marginBottom: '10px' }}>Bank Number: {bankNumber}</p>
        <p style={{ color: '#fff' }}>Person Name: {personName}</p>
      </div>
      <button onClick={closeModal} style={{ marginTop: '20px' }}>Close</button>
    </Modal>
  );
};

export default PaymentSuccessModal;
