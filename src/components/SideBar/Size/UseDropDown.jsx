import React from 'react';
import DropDown from './DropDown';
import { Link } from 'react-router-dom';
import Cross from '../Cross';

const UseDropDown = () => {
  const sizes = ["EU 36", "EU 36W", "EU 37", "EU 37VW", "EU 38", "EU 38VW", "EU 39", "EU 39W", "EU 40", "EU 41VW", "EU 42", "EU 42VW", "EU 43", "EU 43VW", "EU 44", "EU 44VW", "EU 45", "EU 46VW", "EU 47", "EU 48VW", "EU 49"];

  return (
    <div className='flex'>
<div className='w-[19rem]'>
<h2 className='mx-4 my-10 text-xl text-center'>SIZES & OPTIONS</h2>
      <div className='flex  justify-center md:justify-start'>
        <DropDown  options={sizes} label="SELECT SIZE" />
      </div>
      <div className='pt-20 flex flex-col items-center'>
        <Link to='/sizeguide' className='py-5 text-indigo-500'>SIZE GUIDE</Link>
        <Link to='/size' className='py-5'>CAN'T FIND YOUR SIZE?</Link>
        <Link to='/whatmean' className='py-5'>WHAT DOES W MEAN?</Link>
      </div>
</div>
<Cross link={""}/>
    </div>
  );
};

export default UseDropDown;
