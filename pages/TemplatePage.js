import React, { useState } from 'react';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import InvoiceTemplateCard from '@/components/InvoiceTemplateCard';
import { useRouter } from 'next/navigation';

const TemplatePage = () => {
  const router = useRouter();

  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleEditCard = (index) => {
    setSelectedCardIndex(index);
  };

  return (
    <div className="min-h-screen bg-[#FFF9F1]">
      <Header />
      <div className="flex mt-3">
        <div className="lg:w-60">
          <SideBar />
        </div>
        <div className="container mx-auto p-4 bg-white flex-grow ml-4">
          <h1 className="font-bold text-2xl mt-3">Invoice Template</h1>
          <div className="flex flex-row flex-wrap justify-center items-center p-6">
            <div className="flex justify-between w-full mb-6 gap-3">
              {[...Array(3)].map((_, index) => (
                <div key={index} 
                onClick={() => handleEditCard(index)}
                className="cursor-pointer w-1/3 h-48 mb-4">
                <InvoiceTemplateCard patientName="Patient Name" doctorName="Doctor Name" />
                </div>
              ))}
            </div>
            
          </div>
        </div>
        <div className="flex-grow ml-4 mt-6">
          {selectedCardIndex !== null && (
            <InvoiceTemplateCard  onClose={() => setSelectedCardIndex(null)}
             />
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
