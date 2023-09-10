import React from 'react';
 
const Footer = () => {
    return (
        <div className='bg-cyan-800  h-[70%] z-50  '>
        <div className='flex z-50 flex-col lm:flex-row justify-between items-center bg-cyan-800 space-y-6  px-12 py-20 lm:py-36'>
        <div className="flex justify-center text-center items-center">
                    <h1 className="text-2xl text-cyan-300 md:p-2 p-1 border-4 border-r-8 border-cyan-300 border-r-cyan-100 md:border-[10px]  rounded-l-lm md:text-4xl font-bold">
                    OÚNJẸ R<span className="text-cyan-100">E</span>
                    </h1>
                </div>

                <div className=" text-cyan-100 text-center  lm:text-lm">
                    <h2 className="text-2xl font-semibold my-2">Contact Us</h2>
                    <p className="mb-2">Address: 123 Main Street, Your City</p>
                    <p className="mb-2">Phone: (123) 456-7890</p>
                    <p>Email: info@ounjere.com</p>
                    <div className="mt-4">
                        <a
                        href="mailto:info@ounjere.com"
                        className="text-cyan-300 hover:underline"
                        >
                        Email Us
                        </a>
                    </div>
                    </div>


            <div id='footer' className='flex flex-col md:flex-row items-center justify-center text-center md:text gap-4 lg:space-x-8  lm:text-lm text-cyan-100'>
            <div className='space-y-6'>
            <div className=''>
                <h2 className='text-2xl font-semibold italic text-cyan-100'>
                    Banana Island
                </h2>
                <p>
                    6001 Bjorne St. Ste 103
                </p>
                <p>
                    Lagos,  100001
                </p>
            </div>

            <div>
                <h2 className='text-2xl font-semibold italic text-cyan-100'>
                    Victoria Island
                </h2>
                <p className='text-md'>
                2300  Adams Blvd                
                </p>
                <p className='text-md'>
                Lagos,  10001
                </p>
            </div>                
            </div>

            <div className='space-y-6'>
            <div>
                <h2 className='text-2xl font-semibold italic text-cyan-100'>
                Lekki
                </h2>
                <p>
                2006 Admiralty 
                </p>
                <p>
                Lagos island, 100001
                </p>
            </div>    

            <div>
                <h2 className='text-2xl font-semibold italic text-cyan-100'>
                Lekki Pennisula
                </h2>
                <p>
                0001 Idontire 
                </p>
                <p>
                Lagos island, 100001
                </p>
            </div>   
            </div>

              
            </div>

        </div>  
            <h1 className='text-center text-cyan-50'>
                © 2023 | IAN
            </h1>                  
        </div>

    );
};
 
export default Footer;