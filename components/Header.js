import { useEffect, useState } from 'react';
import { BsBell } from "react-icons/bs";




const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);


    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
  // State for current date
  const [currentDate, setCurrentDate] = useState('');
  // State for current time
  const [currentTime, setCurrentTime] = useState('');

  // Function to get current date in the format: Day, Date Month
  const getCurrentDate = () => {
    const options = { weekday: 'long', day: 'numeric',month: 'long'};
    const currentDate = new Date().toLocaleDateString(undefined, options);
    setCurrentDate(currentDate);
  };

  // Function to get current time in 12-hour format with AM/PM
  const getCurrentTime = () => {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour24: true };
    const currentTime = new Date().toLocaleTimeString(undefined, options);
    setCurrentTime(currentTime);
  };

  // Update current date and time on component mount
  useEffect(() => {
    getCurrentDate();
    getCurrentTime();

    // Update current time every second
    const interval = setInterval(() => {
      getCurrentTime();
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <header className="flex justify-between items-center py-4 px-6 bg-gray-100 h-20 z-4 sticky top-0 bg-fixed">
      <div>
        <img src='https://s3-alpha-sig.figma.com/img/eb1d/d788/4a9c76227ae6630e4a179b156be92b2e?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hJl1m2s6KDPFHtSOu7P02F2N7HKx99XWxZxVJPlJF46e8s8V88S8jBeCbg-mxMejn4mQzFeNbN4ZQV~nHbKrkEGMbCTHfXOCuIBocr2DMvu0L0xPoq12SHj9im3~TT7jkME5Ee5xIgEpkVqPgHM7D5klfDfHefm5Br3jazifdAt4uMn7Tn3gpT6rsjUL~2ERoMWXcMrEsWZR0NEuGO~UPgUYNx24aMfgzq5IHi3AxFWC2S3BjxRv1RIBqP~mpBlKlGaxQCzHWMSZOfo0B4d~RrDMVeozn6OaoAlyyerw7-~~k1HQAaZ331Ndm5q9-FzT7cM~1niGeMWBhweK00h3-w__' alt='Logo'  className="h-[30vh] w-40" />
      </div>
      <div className="flex relative gap-5 mr-5 text-black items-center justify-center">
        <p className="text-m ">{currentDate}</p>
        <p className="text-m ">{currentTime}</p>
        <span className="bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center"><BsBell className="text-gray-600 text-xl" /></span>
      </div>
    </header>
    </div>
  );
};

export default Header;
