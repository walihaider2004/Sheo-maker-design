import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';


const Materials = () => {

    const MaterialData = [
        { id: 1, img1: '/Images/shoes_v1.png', title: "ALL PIECES", subtitle: "MIX", link: '/pieces',},
        { id: 2, img1: '/Images/shoes_v1.png', title: "ROE CAP", subtitle: "ITALIAN CALF LEATHER", link: '/pieces',},
        { id: 3, img1: '/Images/shoes_v1.png', title: "VAMP", subtitle: "ITALIAN CALF LEATHER", link: '/pieces',},
        { id: 4, img1: '/Images/shoes_v1.png', title: "HEELCAP", subtitle: "ITALIAN CALF LEATHER", link: '/pieces',},
        { id: 5, img1: '/Images/shoes_v1.png', title: "FACING", subtitle: "ITALIAN CALF LEATHER", link: '/pieces',},
        { id: 6, img1: '/Images/shoes_v1.png', title: "TONGUE", subtitle: "ITALIAN CALF LEATHER", link: '/pieces',},
    ];

    return (
        <div className='flex overflow-y-auto h-screen w-[19rem]'>
            <div className=' relative h-[550px]'>
                <h1 className='text-center text-[13px] mt-8'>
                    CHOOSE EACH MATERIAL <br /> OF YOUR SHOE
                </h1>
                <div className=' pb-9 ' >
                    {MaterialData.map((item) => (
                        <Link state={{ name:item.title}} to={item.link} key={item.id} className='w-44 m-8 text-center'>
                            <img src={item.img1} alt={item.title} />
                            <h1 className='font-bold'>{item.title}</h1>
                            <h1 className='font-semibold'>{item.subtitle}</h1>
                        </Link>
                    ))}
                </div>
                <Button link={""} />
            </div>
        </div>
    );
}

export default Materials;
