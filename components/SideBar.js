import { useState } from 'react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState('');
  const [isOpen, setIsOpen] = useState(true); // Change initial state to true

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSubMenuToggle = (menu) => {
    setOpenMenu(openMenu === menu ? '' : menu);
  };

  return (
    <>
      {/* Toggle Button */}
      

      {/* Sidebar */}
      <aside className={`bg-gray-100 text-black  w-full h-full ${isOpen ? '' : 'hidden'}`}>
      <button onClick={toggleSidebar} className="lg:hidden fixed bottom-5 right-5 z-50 rounded-full bg-blue-500 text-white p-3">
        {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
      </button>
        <div className="p-8">
          {/* Main Menu Items */}
          <div className="mb-6 text-m">
            <ul>
              <li className="flex items-center justify-between py-4 cursor-pointer">
                <span>Overview</span>
              </li>
              <li className="flex items-center justify-between py-4 cursor-pointer" onClick={() => handleSubMenuToggle('profile')}>
                <span>Profile</span>
              </li>
              <li className="flex items-center justify-between py-4 cursor-pointer" onClick={() => handleSubMenuToggle('Appointments')}>
                <span>Appointments</span>
              </li>
              <li className="flex items-center justify-between py-4 cursor-pointer" onClick={() => handleSubMenuToggle('History')}>
                <span>History</span>
                {/* {openMenu === 'History' ? <AiOutlineArrowDown /> : <AiOutlineArrowRight />} */}
              </li>
              {openMenu === 'History' && (
                <ul className="ml-4">
                  <li>Videos</li>
                  <li>Videos Libaray</li>
                </ul>
              )}
              <li className="flex items-center justify-between py-4 cursor-pointer" onClick={() => handleSubMenuToggle('Messages')}>
                <span>Messages</span>
              </li>
              <li className="flex items-center justify-between py-4 cursor-pointer" onClick={() => handleSubMenuToggle('Support')}>
                <span>Support</span>
              </li>
              {openMenu === 'Support' && (
                <ul className="ml-4">
                  <li className="m-2">FAQ's</li>
                  <li className="m-2">Procedure Information</li>
                </ul>
              )}
              <li className="flex items-center justify-between py-4 cursor-pointer" onClick={() => handleSubMenuToggle('AfterCare')}>
                <span>AfterCare</span>
              </li>
              {openMenu === 'AfterCare' && (
                <ul className="ml-4">
                  <li className="m-2">Quizzess</li>
                  <li className="m-2">Health and skin Assesment</li>
                </ul>
              )}
              <li className="flex items-center justify-between py-4 cursor-pointer" onClick={() => handleSubMenuToggle('Finance')}>
                <span>Finance</span>
              </li>
              <li className="flex items-center justify-between py-6 cursor-pointer rounded text-sm h-10 bg-green-200 mr-2" onClick={() => handleSubMenuToggle('VirtualConsultation')}>
                <span>Virtual Consultation</span>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
