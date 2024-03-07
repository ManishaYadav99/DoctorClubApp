import React, { useState } from 'react';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import InvoiceCard from '@/components/InvoiceCard';
import 'react-toastify/dist/ReactToastify.css';
import { TiTick } from "react-icons/ti";
import PaymentSuccessModal from '@/components/Modal';

const PaymentPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMode, setSelectedMode] = useState('shipping');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [cardDetails, setCardDetails] = useState({
    nameOnCard: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  
  const modes = ['shipping', 'billing', 'confirmation'];
  const [isPaymentSuccessModalOpen, setIsPaymentSuccessModalOpen] = useState(false); // State for controlling the visibility of the success modal
  const [bankNumber, setBankNumber] = useState(''); // State for storing the bank number
  const [personName, setPersonName] = useState('');
  const handleConfirmPayment = () => {
    // Logic to confirm payment
    
    // Set bank number and person's name (example values)
    setBankNumber('1234567890');
    setPersonName('John Doe');
    // Open the success modal
    setIsPaymentSuccessModalOpen(true);
  };
  const handleClosePaymentSuccessModal = () => {
    // Close the success modal
    setIsPaymentSuccessModalOpen(false);
  };

  
  const handleSelectMode = (mode) => {
    setSelectedMode(mode);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  

  const handleSaveCardDetails = () => {
  
    // Logic to save card details
    toast.success('Saved successful!');
    console.log('Card details saved:', cardDetails);
  };

  return (
    <div className="flex flex-col h-screen bg-[#FFF9F1]">
      <Header />
      <div className="flex flex-grow">
        <div className="lg:w-60">
          <SideBar />
        </div>
        <div className="container mx-auto p-4 flex-grow">
          <h1 className='text-2xl font-bold'>Payment</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="flex flex-col col-span-3">
              {/* Select Mode */}
              <div className="grid grid-cols-3 gap-4 relative ">
                {modes.map((mode, index) => (
                  <React.Fragment key={mode}>
                    {/* {index == 0 && (
                      <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ width: '100%', height: '1px', background: 'green' }}></div>
                    )} */}
                    <button
                      className={`bg-green-600 rounded-full text-white p-3 flex items-center justify-center focus:outline-none hover:bg-green-950 ${selectedMode === mode ? 'bg-opacity-90' : ''}`}
                      onClick={() => handleSelectMode(mode)}
                    >
                      {selectedMode === mode && <TiTick className="text-white mr-2" />}
                      {mode.charAt(0).toUpperCase() + mode.slice(1)}
                    </button>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="col-span-2">
            <PaymentSuccessModal
            isOpen={isPaymentSuccessModalOpen}
            closeModal={handleClosePaymentSuccessModal}
            bankNumber={bankNumber}
            personName={personName}
          />
              {/* Payment Method */}
              <h2 className="font-semibold text-lg mb-4">Payment Method</h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <button
                    className={`bg-green-600 text-white px-4 py-2 rounded-lg ${selectedPaymentMethod === 'netBanking' && 'bg-opacity-70'}`}
                    onClick={() => setSelectedPaymentMethod('netBanking')}
                  >
                    Net Banking
                  </button>
                  <button
                    className={`bg-green-600 text-white px-4 py-2 rounded-lg ${selectedPaymentMethod === 'creditCard' && 'bg-opacity-70'}`}
                    onClick={() => setSelectedPaymentMethod('creditCard')}
                  >
                    Credit Card
                  </button>
                  <button
                    className={`bg-green-600 text-white px-4 py-2 rounded-lg ${selectedPaymentMethod === 'paypal' && 'bg-opacity-70'}`}
                    onClick={() => setSelectedPaymentMethod('paypal')}
                  >
                    PayPal
                  </button>
                  <button
                    className={`bg-green-600 text-white px-4 py-2 rounded-lg ${selectedPaymentMethod === 'bitcoin' && 'bg-opacity-70'}`}
                    onClick={() => setSelectedPaymentMethod('bitcoin')}
                  >
                    Bitcoin
                  </button>
                </div>
                {selectedPaymentMethod === 'creditCard' && (
                  <div className="flex flex-col gap-4 mt-4">
                    <div className="flex gap-4">
                      <input
                        type="text"
                        placeholder="Name on Card"
                        value={cardDetails.nameOnCard}
                        onChange={(e) => setCardDetails({ ...cardDetails, nameOnCard: e.target.value })}
                        className="border border-gray-300 rounded-md px-4 py-2"
                      />
                      <input
                        type="text"
                        placeholder="Card Number"
                        value={cardDetails.cardNumber}
                        onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                        className="border border-gray-300 rounded-md px-4 py-2"
                      />
                    </div>
                    <div className="flex gap-4">
                      <input
                        type="text"
                        placeholder="Expiry (MM/YY)"
                        value={cardDetails.expiry}
                        onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                        className="border border-gray-300 rounded-md px-4 py-2"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        value={cardDetails.cvv}
                        onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                        className="border border-gray-300 rounded-md px-4 py-2"
                      />
                    </div>
                    <label htmlFor="signature">Signature:</label>
                    <input
                      type="text"
                      id="signature"
                      className="border border-gray-300 rounded-md px-4 py-2"
                    />
                  </div>
                )}
                {/* net banking */}
                {selectedPaymentMethod === 'netBanking' && (
                  <div className="flex flex-col gap-4 mt-4">
                    <input
                      type="text"
                      placeholder="Bank Name Email"
                      className="border border-gray-300 rounded-md px-4 py-2"
                    />
                    <input
                      type="text"
                      placeholder="Bank Password"
                      className="border border-gray-300 rounded-md px-4 py-2"
                    />
                  </div>
                )}
                {/* Additional Inputs for PayPal */}
                {selectedPaymentMethod === 'paypal' && (
                  <div className="flex flex-col gap-4 mt-4">
                    <input
                      type="text"
                      placeholder="PayPal Email"
                      className="border border-gray-300 rounded-md px-4 py-2"
                    />
                    <input
                      type="text"
                      placeholder="PayPal Password"
                      className="border border-gray-300 rounded-md px-4 py-2"
                    />
                  </div>
                )}
                {/* Additional Inputs for Bitcoin */}
                {selectedPaymentMethod === 'bitcoin' && (
                  <div className="flex flex-col gap-4 mt-4">
                    <input
                      type="text"
                      placeholder="Bitcoin Wallet Address"
                      className="border border-gray-300 rounded-md px-4 py-2"
                    />
                    <input
                      type="text"
                      placeholder="Bitcoin Wallet Password"
                      className="border border-gray-300 rounded-md px-4 py-2"
                    />
                  </div>
                )}
              </div>
              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                <button onClick={handleSaveCardDetails} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Save Details</button>
                <button onClick={handleConfirmPayment} className="bg-green-600 text-white px-4 py-2 rounded-lg">Confirm Payment</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow ml-4">
          <InvoiceCard />
        </div>
      </div>
      <PaymentSuccessModal isOpen={showModal} closeModal={closeModal} />
    </div>
   
  );
};

export default PaymentPage;
