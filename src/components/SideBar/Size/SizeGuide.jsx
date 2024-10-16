import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Button from '../Button';


const SizeGuide = () => {
  const [selectedInput, setSelectedInput] = useState(null);
  const lengthRef = useRef(null);
  const widthRef = useRef(null);
  const navigate = useNavigate();
    const handleback = ()=>{
        navigate('/usedropdown')
    }
  const handleInputClick = (inputName) => {
    setSelectedInput(inputName);
  };

  const handleClickOutside = (event) => {
    if (
      lengthRef.current && !lengthRef.current.contains(event.target) &&
      widthRef.current && !widthRef.current.contains(event.target)
    ) {
      setSelectedInput(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='  overflow-y-auto'>
    <div className='px-6 relative  w-[19rem] h-[550px]'>
      <h3 className="text-lg   my-12 text-center">Measure the length and width of your feet</h3>
      
      <div className="mb-4">
        <h2 className="font-bold text-base">1. Place your foot on a paper</h2>
        <p className="text-sm">Remove socks. Make sure you are doing it over a flat surface</p>
      </div>
      
      <div className="mb-4">
        <h2 className="font-bold text-base">2. Draw the outline of the foot</h2>
        <p className="text-sm">Make sure you keep the pencil in vertical position while you draw</p>
      </div>
      
      <div className="mb-4">
        <h2 className="font-bold text-base">3. Measure length and width</h2>
        <p className="text-sm">From the heel to the tip of your longest toe. The width goes from the shoe ball to the base of your little toe</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col w-full md:w-1/2">
          <label htmlFor="length" className="mb-1  text-center">LENGTH</label>
          <div
            ref={lengthRef}
            className={`flex items-center border ${selectedInput === 'length' ? 'border-[#ff0000]' : 'border-gray-400'} rounded p-2`}
            onClick={() => handleInputClick('length')}
          >
            <input
              type="text"
              className="flex-grow w-8 outline-none"
              placeholder=""
              id="length"
            />
            <span className="ml-2 font-bold">Cm</span>
          </div>
        </div>
        
        <div className="flex flex-col w-full md:w-1/2">
          <label htmlFor="width" className="mb-1 text-center">WIDTH</label>
          <div
            ref={widthRef}
            className={`flex items-center border ${selectedInput === 'width' ? 'border-[#ff0000]' : 'border-gray-400'} rounded p-2`}
            onClick={() => handleInputClick('width')}
          >
            <input
              type="text"
              className="flex-grow w-8 outline-none"
              placeholder=""
              id="width"
            />
            <span className="ml-2 font-bold">Cm</span>
          </div>
        </div>
      

      </div>
      <p className='text-[13px] py-3 font-semibold'>Check out our video for more precise instructions</p>
     <div className='pb-10 w-full h-28'>
   <video width={600} controls>
   <source src="/Images/video.mp4" type="video/mp4" />
   </video>
     </div>
     <div className='border-2 border-b-[#ccc]'></div>
   {/* <Button link={"usedropdown"}/> */}
   <div  className='flex justify-around fixed  right-0 bottom-0 border-t-2 w-[19rem]  py-5 mt-4 bg-[#ffff]'>
        <button onClick={handleback}>BACK</button>
        <button>CALCULATE MY SIZE</button>
    </div>
    </div>
    </div>
  );
};

export default SizeGuide;
