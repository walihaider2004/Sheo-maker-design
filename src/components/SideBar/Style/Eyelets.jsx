import React, { useState } from 'react';
import Cross from '../Cross';

const Eyelets = () => {
  const circleData = [
    { id: 1, img1: './Images/invisible.png', title: 'Blind Eyelets' },
    { id: 2, img1: './Images/gold1.png', title: 'Gold (+5€)' },
    { id: 3, img1: './Images/gold2.png', title: 'Vintage Brass (+5€)' },
    { id: 4, img1: './Images/gold3.png', title: 'Nickel (+5€)' },
  ];
  const [selectedId, setSelectedId] = useState(null);

  const handleEvent = (id) => {
    console.log('clicked');
    setSelectedId(id);
  };

  return (
    <div className=" w-[19rem] sticky top-0">
      <h2 className="mt-7 h-10 text-center text-xl sticky top-0 ">EYELETS</h2>

      <div className="grid grid-cols-2 mt-5 px-7 gap-3">
        {circleData.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <img
              src={item.img1}
              alt={item.title}
              onClick={() => handleEvent(item.id)}
              className={`${selectedId === item.id ? 'rounded-full border-2 p-[1px] border-[#383838]' : ''}`}
            />
            <p className="px-4 text-center">{item.title}</p>
          </div>
        ))}
      </div>
      <Cross link={"style"}/>
    </div>
  );
};

export default Eyelets;