import React from 'react';
import Link from 'next/link';
 
function Shakes() {
    return (
    <div className='pb-24 pt-16 lm:pt-20'>

    <div className='flex justify-center text-2xl lg:text-5xl text-cyan-800 my-10'>       
            <h1>MENU</h1>
        </div>
        <nav className='mb-20'>
            <ul className='flex justify-around text-neutral-800 text-lg underline md:text-2xl lg:w-[70%] mx-auto'>
                <li>
                <Link href="/menu">Appetizers</Link>
                </li>
                <li>
                <Link href="/menu/localdishes">Local Dishes</Link>
                </li>
                <li>
                <Link href="/menu/shakes">Shakes</Link>
                </li>
                <li>
                <Link href="/menu/beverages">Beverages</Link>
                </li>
            </ul>
        </nav>

        <div className=' grid md:grid-cols-2 gap-8  text-neutral-700 lg:w-[70%] justify-center mx-auto'>
            <div className='text-center '>
                <h2 className='text-lg font-semibold py-1 text-cyan-800'>Aloha Peach</h2>
                <p className='font-semibold text-cyan-800'>
                    CROCK $6
                </p>
            </div>
            <div className='text-center '>
                <h2 className='text-lg font-semibold py-1 text-cyan-800'>Tropical mango</h2>
                <p className='font-semibold text-cyan-800'>
                    ~$10~
                </p>
            </div>
            <div className='text-center '>
                <h2 className='text-lg font-semibold py-1 text-cyan-800'>Cherry blossom</h2>
                <p className='font-semibold text-cyan-800'>
                    ~$9~
                </p>
            </div>
            <div className='text-center '>
                <h2 className='text-lg font-semibold py-1 text-cyan-800'>Blueberry</h2>
                <p className='font-semibold text-cyan-800'>
                    ~$12~
                </p>
            </div>
        </div>
     </div>            
    );

;}
 
export default Shakes;