import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// import Coolbg from "../images/Newbg.jpg";
// import { getOrderItems } from './api/orderItems'; // Import the function
import sampleData from '../sampleData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

function OrderPage() {
  // const [orderItems, setOrderItems] = useState([]);

  // useEffect(() => {
  //   async function fetchOrderItems() {
  //     try {
  //       const data = await getOrderItems(); // Call the function from the API route
  //       setOrderItems(data);
  //     } catch (error) {
  //       console.error('Error fetching order items:', error);
  //     }
  //   }
  //   fetchOrderItems();
  // }, []);

  return (
    <div className=' py-20 md:pt-28 '>
      <h1 className='text-center p-4 text-3xl md:text-5xl italic font-semibold text-cyan-800 underline underline-offset-0'>PLACE ORDER</h1>
      <ul className='grid grid-cols-2 lm:grid-cols-3 m-2 lm:m-6 gap-3 md:gap-8 over'>
        {sampleData.map((item) => (
          <li key={item.dish_id}>
       <div className=' w-86 shadow-sm hover:shadow-lg hover:shadow-black hover:-translate-y-1 transition duration-500 ease-in-out shadow-black rounded-md'>
      <div className=''>
        <div className=''>
        <Image
                src={item.image_data} alt={item.dish_name}
                className="object-cover w-full h-64 rounded-t-md "
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
                />
        </div>

      </div> 
      <div className='grid md:flex justify-center w-full h-24 md:justify-between px-1  rounded-b-md md:py-6 bg-cyan-100 '>
      <div className='flex flex-col justify-center'>
          <p className='text-center md:text-start'>{item.class}</p>
          <h3 className='text-sm pr-4 font-semibold text-center'>{item.dish_name}</h3>         
        </div>

        <button className='text-white text-center hover:text-cyan-800 hover:bg-cyan-100 transition duration-200 ease-linear bg-cyan-800 rounded-3xl mb-2 flex justify-center items-center'>
        <div className=' border-r-2 text-lg px-3 text-center'><FontAwesomeIcon icon={faShoppingBasket}/> </div>  <div className=''> <p className='text-center px-4'>${item.price}</p></div> 
        </button>
      </div>       
      </div>
          </li>
        ))}
      </ul>


    </div>
  );
}

export default OrderPage;
