import React from 'react';
import Link from 'next/link';
 
function Beverages() {
    return (
    <div className='pb-24 pt-16 lm:pt-20 '>
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

        <div className=' grid md:grid-cols-2 gap-8   text-sm text-neutral-700 lg:w-[60%] justify-center mx-auto'>
            <div className='text-center uppercase'>
                <h2 className='text-lg font-semibold py- text-cyan-800 underline'>COCKTAILS</h2>
                <div className='grid md:grid-cols-2'>
                <p className='font-semibold text-cyan-800'>
                    magarita classic
                </p>
                <p>
                    ~$100~
                </p>                    
                </div>

                <div className='grid md:grid-cols-2'>
                <p className='font-semibold text-cyan-800'>
                    tequila sunrise
                </p>
                <p>
                    ~$100~
                </p>                    
                </div>

                <div className='grid md:grid-cols-2'>
                <p className='font-semibold text-cyan-800'>
                    green paradise
                </p>
                <p>
                    ~$90~
                </p>                    
                </div>

                <div className='grid md:grid-cols-2'>
                <p className='font-semibold text-cyan-800'>
                    screw driver
                </p>
                <p>
                    ~$80~
                </p>                    
                </div>

            </div>
            <div className='text-center uppercase'>
                <h2 className='text-lg font-semibold py-1 text-cyan-800'>drinks</h2>
                <div className='grid md:grid-cols-2'>
                <p className='font-semibold text-cyan-800'>
                    pineapple juice
                </p>
                <p>
                    ~$40~
                </p>                    
                </div>

                <div className='grid md:grid-cols-2'>
                <p className='font-semibold text-cyan-800'>
                    fresh lemon
                </p>
                <p>
                    ~$40~
                </p>                    
                </div>

                <div className='grid md:grid-cols-2'>
                <p className='font-semibold text-cyan-800'>
                    pineorange juice
                </p>
                <p>
                    ~$40~
                </p>                    
                </div>

                <div className='grid md:grid-cols-2'>
                <p className='font-semibold text-cyan-800'>
                    cucumber lemonade
                </p>
                <p>
                    ~$40~
                </p>                    
                </div>

            </div>

            <div className='text-center uppercase'>
                <h2 className='text-lg font-semibold py-1 text-cyan-800'>beers</h2>
                <div className='grid md:grid-cols-2'>
                <p className='font-semibold text-cyan-800'>
                    smb lights
                </p>
                <p>
                    ~$45~
                </p>                    
                </div>

                <div className='grid md:grid-cols-2'>
                <p className='font-semibold text-cyan-800'>
                    red horse stallion
                </p>
                <p>
                    ~$45~
                </p>                    
                </div>

                <div className='grid md:grid-cols-2'>
                <p className='font-semibold text-cyan-800'>
                    beer tower
                </p>
                <p>
                    ~$300~
                </p>                    
                </div>

                <div className='grid md:grid-cols-2'>
                <p className='font-semibold text-cyan-800'>
                    guiness
                </p>
                <p>
                    ~$45~
                </p>                    
                </div>

            </div>

            <div className='text-center uppercase'>
                <h2 className='text-lg font-semibold py-1 text-cyan-800'>shots / on the rocks</h2>
                <div className='grid md:grid-cols-2'>
                <p className='font-semibold text-cyan-800'>
                    tequila
                </p>
                <p>
                    ~$75~
                </p>                    
                </div>

                <div className='grid md:grid-cols-2'>
                <p className='font-semibold text-cyan-800'>
                    vodka
                </p>
                <p>
                    ~$60~
                </p>                    
                </div>

                <div className='grid md:grid-cols-2'>
                <p className='font-semibold text-cyan-800'>
                    jack daniels
                </p>
                <p>
                    ~$120~
                </p>                    
                </div>

                <div className='grid md:grid-cols-2 '>
                <p className='font-semibold text-cyan-800'>
                    black label
                </p>
                <p>
                    ~$160~
                </p>                    
                </div>

            </div>
        </div>
     </div>           
    );

;}
 
export default Beverages;