import React, { useState } from 'react';
import { IoCloseCircle, IoMenuOutline } from "react-icons/io5";
import { IoSearch } from 'react-icons/io5';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import InvoiceCard from '@/components/InvoiceCard';


const InvoiceListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState(null);
  const [selectedPatientName, setSelectedPatientName] = useState('');
  const [selectedDoctorName, setSelectedDoctorName] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(isSidebarOpen);
  };

  // Dummy invoice data
  const invoices = [
    { id: 1, patientName: 'John Doe', doctorName: 'Dr. Smith', time: '10:00 AM-11:30AM', date: '2022-10-20', totalBill: '$100', status: 'Complete' },
    { id: 2, patientName: 'Rushi Shinde', doctorName: 'Dr. Johnson', time: '10:00 AM-11:30AM', date: '2022-10-20', totalBill: '$100', status: 'In Progress' },
    { id: 2, patientName: 'John Doe', doctorName: 'Dr. John', time: '10:00 AM-11:30AM', date: '2022-10-20', totalBill: '$100', status: 'In Progress' },
    { id: 2, patientName: 'Manisha Yadav', doctorName: 'Dr. Johnson', time: '10:00 AM-11:30AM', date: '2022-10-20', totalBill: '$100', status: 'Complete' },
    { id: 2, patientName: 'Katrina kaif', doctorName: 'Dr. Johnny', time: '10:00 AM-11:30AM', date: '2022-10-20', totalBill: '$100', status: 'Complete' },
    { id: 2, patientName: 'Manisha Yadav', doctorName: 'Dr. Jammy', time: '10:00 AM-11:30AM', date: '2022-10-20', totalBill: '$100', status: 'Complete' },
    { id: 2, patientName: 'Khushi Sharma', doctorName: 'Dr. Johnsonee', time: '10:00 AM-11:30AM', date: '2022-10-20', totalBill: '$100', status: 'Cancelled' },
    { id: 2, patientName: 'Manisha Yadav', doctorName: 'Dr. Janny', time: '10:00 AM-11:30AM', date: '2022-10-20', totalBill: '$100', status: 'Cancelled' },
    { id: 2, patientName: 'Rushi Shinde', doctorName: 'Dr. Jamith', time: '10:00 AM-11:30AM', date: '2022-10-20', totalBill: '$100', status: 'Complete' },
    { id: 2, patientName: 'Manisha Yadav', doctorName: 'Dr. Jakab', time: '10:00 AM-11:30AM', date: '2022-10-20', totalBill: '$100', status: 'In Progress' },
    { id: 2, patientName: 'Johndoe', doctorName: 'Dr. Johnson', time: '10:00 AM-11:30AM', date: '2022-10-20', totalBill: '$100', status: 'Cancelled' },
    
    // Other invoice data
  ];

  // Filter invoices based on search term and selected date
  const filteredInvoices = invoices.filter((invoice) => {
    const isMatch = invoice.patientName.toLowerCase().includes(searchTerm.toLowerCase());
    const isDateMatch = !selectedDate || new Date(invoice.date).toISOString().split('T')[0] === selectedDate.toISOString().split('T')[0];
    return isMatch && isDateMatch;
  });

  // Function to handle selecting an invoice
  const handleSelectInvoice = (invoice) => {
    setSelectedInvoiceId(invoice.id);
    setSelectedPatientName(invoice.patientName);
    setSelectedDoctorName(invoice.doctorName);
  };

  return (
    <>
      <div>
        <Header />
        <div className="flex mt-3">
          <div className={`lg:w-60 ${isSidebarOpen ? '' : 'hidden'}`}> {/* Toggle sidebar visibility */}
            <SideBar />
          </div>

          <div className="container mx-auto p-4 bg-white flex-grow ml-4">
            <h1 className="font-bold text-2xl mt-3">Invoice</h1>
            <h2 className="mt-3 font-md">Invoice List</h2>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-3">
              <div className="flex-1 sm:w-1/2">
                <input
                  type="text"
                  placeholder="Search by patient name"
                  className="border border-gray-300 px-3 py-2 rounded-lg w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex-shrink-0">
                <button className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-700">
                  <IoSearch className="inline-block mr-1" />
                  Search
                </button>
              </div>
              <div className="flex-1 sm:w-1/2">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select date"
                  className="border border-gray-300 px-3 py-2 rounded-lg w-full"
                />
              </div>
            </div>
            
            <div className="overflow-x-auto border border-b-2 rounded-md mt-4">
              <table className="w-full table-auto border border-b-2">
                <thead>
                  <tr className="bg-white rounded">
                    <th className="px-4 py-2">Patient Name</th>
                    <th className="px-4 py-2">Time</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Total Bill</th>
                    <th className="px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInvoices.map((invoice) => (
                    <tr
                      className="bg-gray-100 border-b-4 font-normal text-xs cursor-pointer"
                      key={invoice.id}
                      onClick={() => handleSelectInvoice(invoice)}
                    >
                      <td className="px-4 py-2 border text-center">{invoice.patientName}</td>
                      <td className="px-4 py-2 border text-center">{invoice.time}</td>
                      <td className="px-4 py-2 border text-center">{invoice.date}</td>
                      <td className="px-4 py-2 border text-center">{invoice.totalBill}</td>
                      <td className="px-4 py-2 border text-center">
                        <span
                          className={`rounded-full w-7 h-5 px-2 py-1 text-xs ${
                            invoice.status === 'Complete' ? 'bg-green-500 text-white' : 
                            invoice.status === 'In Progress' ? 'bg-yellow-500 text-white' : 
                            invoice.status === 'Cancelled' ? 'bg-white text-black' : ''
                          }`}
                        >
                          {invoice.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto border border-b-2 px-2 py-3 text-center">
              <h1 className="inline-block underline">View More</h1>
            </div>
          </div>
          <div className="flex-grow ml-4">
            {selectedInvoiceId && (
              <InvoiceCard
                patientName={selectedPatientName}
                doctorName={selectedDoctorName}
                onClose={() => setSelectedInvoiceId(null)}
              />
            )}
          </div>
          <button className="lg:hidden fixed bottom-5 right-5 z-50 rounded-full bg-blue-500 text-white p-3" onClick={toggleSidebar}>
            {isSidebarOpen ? <IoCloseCircle /> : <IoMenuOutline />}
          </button>
        </div>
      </div>
    </>
  );
};

export default InvoiceListPage;
