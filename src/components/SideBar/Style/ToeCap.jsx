import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cross from '../Cross';


const TItems = [
  { id: 1, chapl:'/Images/chpal2.png', CTitle: "Plain Ton" },
  { id: 2, chapl:'/Images/chpal2.png', CTitle: "WholeCut" },
  { id: 3, chapl:'/Images/chpal2.png', CTitle: "WingTip" },
  { id: 4, chapl:'/Images/chpal2.png', CTitle: "Cap Toe" },
];

const ToeCap = () => {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(id);
  };
  return (
    <>
    <div className='flex '>
<div className=' w-[19rem]  sticky top-0  '>
    <p className='mt-7 text-center text-lg sticky top-0'>Toe Cap </p>
    <div
        className='h-[32rem] overflow-y-scroll'
        style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}
      >
      <div className='pb-7'>
      {TItems.map((item) => (
          <div
            key={item.id}
            className={`w-[70%] h-[10rem] grid items-center mx-auto mt-[14px] ${
              activeId === item.id ? 'border-b-4 border-solid border-[#bd9d51]' : ''
            }`}
            onClick={() => handleClick(item.id)}
          >
            <div className='grid grid-cols-1  md:grid-row-1 space-y-4'>
              <Link className='w-48'>
                <img src={item.chapl} alt={item.CTitle} />
              </Link>
              <Link className='text-[#212127] font-bold text-lg text-center'>
                {item.CTitle}
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

export default ToeCap
