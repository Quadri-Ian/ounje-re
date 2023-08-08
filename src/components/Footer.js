import React from 'react';
 
const Footer = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center bg-cyan-800 min-h-[70%] px-2 py-8'>
        <div className="flex justify-center text-center items-center">
                    <h1 className="text-2xl text-cyan-300 lg:p-2 p-1 border-4 border-r-8 border-cyan-300 border-r-cyan-100 lg:border-[10px] border-r-4 rounded-l-lg lg:text-4xl font-bold">
                    OÚNJẸ R<span className="text-cyan-100">E</span>
                    </h1>
                </div>
            <div className='grid grid-rows-3 md:grid-cols-2 items-center justify-center gap-y-6 text-lg text-cyan-200'>
            <div className='text-md'>
                <h2 className='text-2xl text-cyan-100'>
                    Sycamore
                </h2>
                <p>
                    7007 W Romaine St. Ste 103
                </p>
                <p>
                    Los Angeles, CA 90038
                </p>
            </div>

            <div>
                <h2 className='text-2xl text-cyan-100'>
                    West Adams
                </h2>
                <p className='text-md'>
                5400 West Adams Blvd                
                </p>
                <p className='text-md'>
                Los Angeles, CA 90016
                </p>
            </div>

            <div>
                <h2 className='text-2xl text-cyan-100'>
                Sherman Oaks
                </h2>
                <p>
                4515 Sepulveda Blvd
                </p>
                <p>
                Sherman Oaks, CA 91403
                </p>
            </div>                
            </div>

        </div>
    );
};
 
export default Footer;