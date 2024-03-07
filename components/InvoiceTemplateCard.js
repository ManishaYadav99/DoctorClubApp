import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const InvoiceTemplateCard = ({ patientName, doctorName, onClose }) => {
  const router = useRouter();
  

const handleTemplateCard = () => {
    router.push('/PaymentPage');
  };


  const [items, setItems] = useState([
    { name: 'Vitamin A Serum', rate: 50, quantity: 2 },
    { name: 'Vitamin B Serum', rate: 60, quantity: 1 },
    
  ]);
  const [tax, setTax] = useState(0);
  const [discount, setDiscount] = useState(0);

  // Calculate total amount including tax and discount
  const subtotal = items.reduce((acc, item) => acc + item.rate * item.quantity, 0);
  const totalAmount = subtotal + tax - discount;

  return (
    <div className="flex flex-col justify-between border rounded-lg shadow-lg p-4  md:max-w-md border-b-2 bg-gray-200 min-h-full">
      <div>
        <h1 className="text-lg font-semibold">Preview Invoice</h1>
      </div>
      <div className="border border-b-2 rounded p-4">
        <div className="p-2">
          <p className="font-semibold">Summary:</p>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="flex justify-between p-2 border-b border-gray-300">
          <div>
            <p className="font-semibold">Doctor:</p>
            <p>{doctorName}</p>
          </div>
          <div>
            <p className="font-semibold">Patient:</p>
            <p>{patientName}</p>
          </div>
        </div>
        <div className="p-2 w-2/3 relative gap-3">
          <table className="w-full border-b-2 bg-gray-200 border">
            <thead>
              <tr>
                <th className="border px-2 py-1">Item</th>
                <th className="border px-2 py-1">Rate</th>
                <th className="border px-2 py-1">Qty</th>
                <th className="border px-2 py-1">Amount</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td className="border px-2 py-1 text-sm">{item.name}</td>
                  <td className="border px-2 py-1">${item.rate}</td>
                  <td className="border px-2 py-1">{item.quantity}</td>
                  <td className="border px-2 py-1">${item.rate * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between p-2 border-b border-gray-300">
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
        <div className="p-2">
          <p className="font-semibold">Total Amount:</p>
          <p className="text-xl font-semibold">${totalAmount}</p>
        </div>
        <div className="p-2">
          <p className="font-semibold">Terms:</p>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="p-4 flex justify-center">
          <button onClick={handleTemplateCard} className="text-white px-4 py-2 rounded-lg bg-black hover:bg-slate-700">
            Save and send
          </button>
          
        </div>
        
      </div>
    </div>
  );
};

export default InvoiceTemplateCard;
