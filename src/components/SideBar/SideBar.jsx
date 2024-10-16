import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const SideBar = () => {
  const [clicked, setClicked] = useState(null);
  
  const style = [
    { id: 1, title: 'Style', src: '/Images/icon_style.svg', to: '/style' },
    { id: 2, title: 'Materials', src: '/Images/icon_material.svg', to: '/materials' },
    { id: 3, title: 'Size & Options', src: '/Images/icon_size.svg', to: '/usedropdown' }
  ];

  const handleClick = (id) => {
    setClicked(id);
    setTimeout(() => setClicked(null), 1000); // Reset after animation
  };

  return (
    <Fade right>
      <div className='w-full lg:w-[19rem] lg:h-screen md:h-auto'>
        <h2 className='h-auto w-full px-12 pt-[30px] pb-[15px] text-center'>
          Create Your Own Shoes in Just A Few Clicks
        </h2>
        <div className='flex lg:flex-col md:flex-row'>
          {style.map((key) => (
            <Link
              key={key.id}
              to={key.to}
              className='flex flex-col justify-center items-center my-8 cursor-pointer w-full'
              onClick={() => handleClick(key.id)}
            >
              {clicked === key.id ? (
                <Slide right>
                  <img src={key.src} alt={key.title} width={40} className='md:mr-2' />
                  <h1 className='text-center md:text-left'>{key.title}</h1>
                </Slide>
              ) : (
                <>
                  <img src={key.src} alt={key.title} width={40} className='md:mr-2' />
                  <h1 className='text-center md:text-left'>{key.title}</h1>
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default SideBar;
