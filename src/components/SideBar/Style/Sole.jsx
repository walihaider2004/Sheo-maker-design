import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cross from '../Cross';


const soleItems = [
    { id: 1, src:'/Images/sole_v2.jpg', soleTitle: "RUBBER" },
    { id: 2, src:'/Images/sole_v1.jpg', soleTitle: "LEATHR - BLACK" },
  { id: 3, src:'/Images/sole_v1.jpg', soleTitle: "LEATHER - MID" },
  { id: 4, src:'/Images/sole_v3.jpg', soleTitle: "TRACKER EVA" },
];

const Sole = () => {
    const [activeId, setActiveId] = useState(null);

    const handleClick = (id) => {
      setActiveId(id);
    };
  return (
    <>
          <div className='flex'>
          <div  className=' w-[19rem]  sticky top-0  '>
          <div className="flex justify-center items-center h-16 bg-white fixed w-[20%] p-3">
          <h1 className="text-center">SOLE</h1>
         <Link to='/soletype'> <img className="w-9 h-9 ml-2" src='/Images/icon_sole.jpg' alt="info icon" /></Link>
        </div>
      <div
        className='h-[32rem] overflow-y-scroll mt-10 '
        style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}
      >
     <div className='pb-20'>
     {soleItems.map((item) => (
          <div
            key={item.id}
            className={`w-[70%] h-[10rem] grid items-center mx-auto mt-[14px] ${
              activeId === item.id ? 'border-b-4 border-solid border-[#bd9d51]' : ''
            }`}
            onClick={() => handleClick(item.id)}
          >
            <div className='grid grid-cols-1 space-y-4'>
              <Link className='w-48'>
                <img src={item.src} alt={item.src} />
              </Link>
              <Link className='text-[#212127] font-bold text-lg text-center'>
                {item.soleTitle}
              </Link>
            </div>
          </div>
        ))}
     </div>
      </div>
 <Cross link={"style"}/>
</div>
</div>
    </>
  )
}

export default Sole
