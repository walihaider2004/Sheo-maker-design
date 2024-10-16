import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Size = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isRequestedSizeEmpty, setIsRequestedSizeEmpty] = useState(false);
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const navigate = useNavigate();
    const handleback = ()=>{
        navigate('/usedropdown')
    }
    const handleCheckboxClick = () => {
        setIsChecked(!isChecked);
    };

    const handleSendClick = () => {
        const requestedSizeField = document.getElementById('requestedSize');
        const emailField = document.getElementById('email');

        if (!requestedSizeField.value) {
            setIsRequestedSizeEmpty(true);
        } else {
            setIsRequestedSizeEmpty(false);
        }

        if (!emailField.value) {
            setIsEmailEmpty(true);
        } else {
            setIsEmailEmpty(false);
        }
    };

    const handleRequestedSizeChange = () => {
        setIsRequestedSizeEmpty(false);
    };

    const handleEmailChange = () => {
        setIsEmailEmpty(false);
    };

    return (
        <div className='flex h-auto'>
            <div className=' w-[19rem] h-[550px] relative'>
                <h1 className='text-center mt-12'>Can't find your size?</h1>
                <p className='text-center mt-10 p-1'>
                    For some models, we can offer you sizes that are not available on the website. Please tell us what size you are looking for and we will reach you back.
                </p>

                <div className='text-center mt-4'>
                    <label className='block ' htmlFor="requestedSize">REQUESTED SIZE</label>
                    <input 
                        type="text" maxLength={2}
                        id="requestedSize" 
                        className={`h-12  text-center ${isRequestedSizeEmpty ? 'border-red-500 border-2' : 'border-black border-2'}`} 
                        onChange={handleRequestedSizeChange} 
                    />
                </div>
                <div className='text-[15px] text-center mt-4'>
                    <label className=' block' htmlFor="email">EMAIL</label>
                    <input 
                        type="text" 
                        id="email" 
                        className={`h-12 outline-none text-center ${isEmailEmpty ? 'border-red-500 border-2' : 'border-black border-2'}`} 
                        onChange={handleEmailChange} 
                    />
                </div>
                <div className='flex items-center justify-center p-5'>
                    <input onClick={handleCheckboxClick} type="checkbox" id="agree" className='mr-2' />
                    <label htmlFor="agree" className='relative'>
                        <span className={`${!isChecked ? 'text-red-500 absolute' : 'hidden'}`}>
                            This field is required
                        </span>
                        <br />
                        I agree to let my email be processed in accordance with the
                    </label>
                </div>
                <div className='border-2 border-b-[#ccc]'></div>
                <div className='flex justify-around sticky w-full h-8 pt-3 bg-[#FFFFFF]'>
                   
                    <button onClick={handleback} className=''>BACK</button>
                    <button onClick={handleSendClick}>SEND</button>
                </div>
            </div>
        </div>
    );
}

export default Size;