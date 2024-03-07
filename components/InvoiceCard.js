import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


const InvoiceCard = ({ patientName, doctorName, onClose }) => {
const router = useRouter();

const handleCreateInvoice = () => {
    router.push('/CreateInvoice');
  };


  

  const [items, setItems] = useState([
    { name: 'Vitamin A Serum', rate: 50, quantity: 2 },
    { name: 'Vitamin B Serum', rate: 60, quantity: 1 },
    { name: 'Vitamin C Serum', rate: 70, quantity: 3 },
  ]);
  const [tax, setTax] = useState(0);
  const [discount, setDiscount] = useState(0);

  // Calculate total amount including tax and discount
  const subtotal = items.reduce((acc, item) => acc + item.rate * item.quantity, 0);
  const totalAmount = subtotal + tax - discount;

  return (
    <div className="flex flex-col justify-between border rounded-lg shadow-lg p-6 mt-1 bg-white w-full md:max-w-sm">
      <div>
        <h1 className="text-lg font-semibold">Preview Invoice</h1>
      </div>
      <div className="border border-b-2 rounded p-4 w-full">
        <div className="p-4">
          <p>Summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="flex justify-between p-4 border-t border-gray-300">
          <div>
            <p className="font-semibold">Doctor: {doctorName}</p>
          </div>
          <div>
            <p className="font-semibold">Patient: {patientName}</p>
          </div>
        </div>
        <div className="p-4">
          <table className="w-full">
            <thead>
              <tr>
                <th className="border px-4 py-2">Item</th>
                <th className="border px-4 py-2">Rate</th>
                <th className="border px-4 py-2">Qty</th>
                <th className="border px-4 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2 text-sm">{item.name}</td>
                  <td className="border px-4 py-2">${item.rate}</td>
                  <td className="border px-4 py-2">{item.quantity}</td>
                  <td className="border px-4 py-2">${item.rate * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between p-4 border-t border-gray-300">
          <div>
            <label className="font-semibold">Tax:</label>
            <input
              type="number"
              value={tax}
              onChange={(e) => setTax(parseFloat(e.target.value))}
              className="ml-2 border border-gray-300 rounded-md px-2 py-1 w-20"
            />
          </div>
          <div>
            <label className="font-semibold">Discount:</label>
            <input
              type="number"
              value={discount}
              onChange={(e) => setDiscount(parseFloat(e.target.value))}
              className="ml-2 border border-gray-300 rounded-md px-2 py-1 w-20"
            />
          </div>
        </div>
        <div className="p-4 border-t border-gray-300">
          <p className="text-xl font-semibold">Total Amount: ${totalAmount}</p>
        </div>
        <div className="p-4">
          <p>Terms: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Notes: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="p-4 flex justify-center">
          <button onClick={handleCreateInvoice} className="text-white px-4 py-2 rounded-lg bg-black hover:bg-slate-700">
            Create New Invoice
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default InvoiceCard;
