import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import InvoiceCard from '@/components/InvoiceCardNew';
import { useRouter } from 'next/navigation';

const CreateInvoice = () => {
  const [selectedPerson, setSelectedPerson] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [notes, setNotes] = useState('');
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [selectedTreatment, setSelectedTreatment] = useState('');
  const [treatments, setTreatments] = useState([{ name: '', amount: 0 }]);

  const availableTreatments = ['Treatment 1', 'Treatment 2', 'Treatment 3'];

  const [skincareItems, setSkincareItems] = useState([{ name: '', rate: 0, quantity: 0 }]);
  const router = useRouter();


  

  const handleAddTreatment = () => {
    const amount = calculateTreatmentAmount(selectedTreatment);
    const treatmentName = selectedTreatment || 'Botox Treatment'; // Default to 'Custom Treatment' if no treatment is selected
    setTreatments([...treatments, { name: treatmentName, amount }]);
  };

  const handleRemoveTreatment = (index) => {
    const updatedTreatments = [...treatments];
    updatedTreatments.splice(index, 1);
    setTreatments(updatedTreatments);
  };

  const handleAddSkincareItem = () => {
    setSkincareItems([...skincareItems, { name: '', rate: 0, quantity: 0 }]);
  };

  const handleRemoveSkincareItem = (index) => {
    const updatedSkincareItems = [...skincareItems];
    updatedSkincareItems.splice(index, 1);
    setSkincareItems(updatedSkincareItems);
  };
  const calculateTreatmentAmount = (treatment) => {
    // Logic to calculate treatment amount based on the selected treatment
    // This is just a placeholder logic, you can replace it with your actual logic
    return Math.random() * 100;
  };
  const handleTemplate = () => {
    router.push('/TemplatePage');
  };

  return (
    <div className="min-h-screen bg-[#FFF9F1]">
      <Header />
      <div className="flex mt-3">
        <div className="lg:w-60"> {/* Sidebar */}
          <SideBar />
        </div>
        <div className="container mx-auto p-4 bg-white flex-grow ml-4">
          <h1 className="font-bold text-2xl mt-3">Create Invoice</h1>
          {/* Dropdowns */}
          {/* Dropdowns code here */}
          <div className="mb-4 py-3">
            <select
              value={selectedPerson}
              onChange={(e) => setSelectedPerson(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 mr-2"
            >
              <option value="">Select Person</option>
              <option value="person1">Manisha Yadav</option>
              <option value="person2">Rushi Shinde</option>
              <option value="person3">John Doe</option>
              <option value="person4">Katrina Kaif</option>
              <option value="person5">John Son</option>
              <option value="person">Manny</option>
            </select>
            <input
              type="text"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
              placeholder="Invoice Number"
              className="border border-gray-300 rounded-md px-2 py-1 mr-2"
            />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1"
            />
          </div>
          {/* Treatments */}
          <div className="mb-4">
            <select
              value={selectedTreatment}
              onChange={(e) => setSelectedTreatment(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 mr-2"
            >
              <option value="1">Botox treatment</option>
              <option value="">Botox treatment</option>
              <option value="">Botox treatment</option>
              <option value="">Botox treatment</option>
              {availableTreatments.map((treatment, index) => (
                <option key={index} value={treatment}>
                  {treatment}
                </option>
              ))}
            </select>
            <button
              onClick={handleAddTreatment}
              className="bg-green-500 text-white px-3 py-1 rounded-md mt-2"
            >
              Add Treatment
            </button>
          </div>
          {/* Container to display selected treatments */}
          <div>
  <h2 className="font-semibold">Treatments</h2>
  <div className="mt-2">
    {treatments.map((treatment, index) => (
      <div key={index} className="flex items-center justify-between border border-b-2 bg-gray-200 h-20 rounded px-4 mb-2">
        <div className="flex gap-10">
          <p className="font-semibold">TreatmentName: {treatment.name}</p>
          <p>Amount: ${treatment.amount.toFixed(2)}</p>
        </div>
        <div>
         <button className="bg-red-500 text-white px-3 py-1 rounded-md mr-2">Add</button>
          <button
            onClick={() => handleRemoveTreatment(index)}
            className="bg-red-500 text-white px-3 py-1 rounded-md mr-2"
          >
            Remove
          </button>
        </div>
      </div>
    ))}
    
  </div>
</div>


          {/* Skincare Items */}
          <div className="mt-4 border border-b-2 bg-gray-200 rounded relative">
            <h2 className="font-semibold p-3">Skincare Items</h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Item Name</th>
                  <th className="px-4 py-2">Rate</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {skincareItems.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-2">
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) => {
                          const updatedSkincareItems = [...skincareItems];
                          updatedSkincareItems[index].name = e.target.value;
                          setSkincareItems(updatedSkincareItems);
                        }}
                        placeholder="Item Name"
                        className="border border-gray-300 rounded-md px-2 py-1 w-full"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="number"
                        value={item.rate}
                        onChange={(e) => {
                          const updatedSkincareItems = [...skincareItems];
                          updatedSkincareItems[index].rate = parseFloat(e.target.value);
                          setSkincareItems(updatedSkincareItems);
                        }}
                        placeholder="Rate"
                        className="border border-gray-300 rounded-md px-2 py-1 w-full"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => {
                          const updatedSkincareItems = [...skincareItems];
                          updatedSkincareItems[index].quantity = parseInt(e.target.value);
                          setSkincareItems(updatedSkincareItems);
                        }}
                        placeholder="Quantity"
                        className="border border-gray-300 rounded-md px-2 py-1 w-full"
                      />
                    </td>
                    <td className="px-4 py-2">{(item.rate * item.quantity).toFixed(2)}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleRemoveSkincareItem(index)}
                        className="bg-red-500 text-white px-3 py-2 rounded-md mr-2">
                        <RiDeleteBin6Line />
                      </button>

                      <button
                        onClick={() => handleRemoveSkincareItem(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md mr-2 mt-2 absolute bottom-2 right-3">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={handleAddSkincareItem}
              className="bg-green-500 text-white px-3 py-1 rounded-md mt-2 ml-4 bottom-2"
            >
              Add Skincare Item
            </button>
          </div>
          {/* Notes */}
          <div className="mt-4">
            <label htmlFor="notes" className="block font-semibold">Add Notes:</label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full mt-1"
            ></textarea>
          </div>
          {/* Subtotal, discount, total */}
          <div className="mt-4 items-center justify-center px-3 py-3 m-2 felx flex-col gap-2">
          <label htmlFor="discount" className="font-semibold m-3">Discount:</label>
            <input
              type="number"
              value={discount}
              onChange={(e) => setDiscount(parseFloat(e.target.value))}
              placeholder="Discount"
              className="border border-gray-300 rounded-md px-2 py-1 mr-2"
            />
            <p className="font-semibold m-3">Subtotal: ${subtotal}</p>
            <p className="font-semibold m-3 text-2xl">Total:  ${total}</p>
          </div>
          {/* Create Invoice Button */}
          <div className="p-4 flex justify-center">
          <button onClick={handleTemplate} className='text-white px-4 py-2 rounded-lg bg-black hover:bg-slate-700'>
           Invoice Template
          </button>
          
        </div>
         
        </div>
        <div className="flex-grow ml-4">
          <InvoiceCard />
        </div>
      </div>
    </div>
  );
};

export default CreateInvoice;
