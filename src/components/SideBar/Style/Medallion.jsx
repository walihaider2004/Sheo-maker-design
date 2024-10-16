import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cross from '../Cross';


const MedItems = [
  { id: 1, src:'/Images/halfShoe_1.jpg', medTitle: "No" },
  { id: 2, src:'/Images/halfShoe_2.jpg', medTitle: "Yes" },
];

const Medallion = () => {
    const [activeId, setActiveId] = useState(null);

    const handleClick = (id) => {
      setActiveId(id);
    };
  return (
    <div className='flex'>
      <div  className=' w-[19rem]  sticky top-0  '>
      <p className='mt-7 text-center text-lg sticky top-0'>Medallion</p>
      <div
        className='h-[32rem] overflow-y-scroll mt-10'
        style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}
      >
          {MedItems.map((index) => (
          <div
            key={index.id}
            className={`w-[50%] h-[10rem] flex mx-auto  ${
              activeId === index.id ? 'border-b-4 border-solid border-[#bd9d51]' : ''
            }`}
            onClick={() => handleClick(index.id)}
          >
            <div className='grid grid-cols-1 space-y-4'>
              <Link >
                <img src={index.src} alt={index.src} />
              </Link>
              <Link className='text-[#212127] font-bold text-lg text-center'>
                {index.medTitle}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Cross link={"style"}/>
      </div>
    </div>
  )
}

export default Medallion
