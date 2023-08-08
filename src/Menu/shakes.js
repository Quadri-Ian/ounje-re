import React from 'react';
 
function Beverages() {
    return (
    <div>
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
 
export default Beverages;