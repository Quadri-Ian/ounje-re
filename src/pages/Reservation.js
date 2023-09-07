import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import Image from 'next/image';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Import the styles
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles for date picker
import reserve from '../images/pexels-alex-urezkov-16251530.jpg'
import Carousel from '../components/carousel'

function ReservationPage() {
  const localizer = momentLocalizer(moment);

  const [reservationData, setReservationData] = useState({
    name: '',
    email: '',
    phone: '',
    date: null, // Initialize date as null
    time: '',
    guests: '',
    specialRequests: '',
  });

  const events = [
    {
      title: 'Reserved Table',
      start: new Date(2023, 8, 5),
      end: new Date(2023, 8, 5),
    },
    {
      title: 'Reserved Table',
      start: new Date(2023, 8, 12),
      end: new Date(2023, 8, 12),
    },
    // Add more reserved tables as needed
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData({
      ...reservationData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setReservationData({
      ...reservationData,
      date: date, // Update the 'date' field in reservationData
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your reservation submission logic here
    console.log('Reservation Data:', reservationData);
    // Reset the form after submission if needed
    setReservationData({
      name: '',
      email: '',
      phone: '',
      date: null,
      time: '',
      guests: '',
      specialRequests: '',
    });
  };

  return (
    <div className='bg-cyan-50 mt-20 md:mt-28'>
      <h1 className='text-center text-2xl p-4 text-cyan-800 font-semibold'>Make a Reservation</h1>
      <div className=''>
        <Carousel/>
      </div>
      {/* <div className='justify-center md:w-[80%] h-[320px] mx-auto text-cyan-800 border '>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ margin: '20px'  }}
          selectable
        />
      </div> */}
      <form 
      onSubmit={handleSubmit}
      className='p-5 space-y-2 flex flex-col justify-center'
      >
        <div className='flex justify-between text-cyan-800  w-[85%]  mx-auto md:w-[40%] lg:w-[25%] items-center border rounded-full pl-3 bg-cyan-700'>
          <label className='text-cyan-300'>Name:</label>
          <input
            type="text"
            name="name"
            value={reservationData.name}
            onChange={handleChange}
            className=" p-1 bg-cyan-50 w-[78%] rounded-r-full"
            required
          />
        </div>
        <div className='flex justify-between w-[85%]  mx-auto md:w-[40%] lg:w-[25%] items-center border rounded-full pl-3 bg-cyan-700'>
          <label className='text-cyan-300'>Email:</label>
          <input
            type="email"
            name="email"
            value={reservationData.email}
            onChange={handleChange}
            className=" p-1 bg-cyan-50 w-[78%] rounded-r-full"
            required
          />
        </div>
        <div className='flex justify-between text-cyan-800  w-[85%] mx-auto md:w-[40%] lg:w-[25%] items-center border rounded-full pl-3 bg-cyan-700'>
          <label className='text-cyan-300'>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={reservationData.phone}
            onChange={handleChange}
            className=" p-1 bg-cyan-50 w-[78%] rounded-r-full"
            required
          />
        </div>
        {/* <div className='flex justify-between w-[85%] md:justify-normal space-x-3 md:space-x-9 lm:space-x-12 lg:space-x-10  mx-auto md:w-[40%] lg:w-[25%] items-center border rounded-full pl-3 bg-cyan-700'>
          <label className='text-cyan-300'>Date:</label>
          <DatePicker
            selected={reservationData.date}
            onChange={handleDateChange}
            className="p-1 bg-cyan-50  md:w-[127.5%] lm:w-[147.5%] lg:w-[158%] rounded-r-full"
            required
          />
        </div> */}

      <div className='flex flex-col w-[85%] md:w-[40%] lg:w-[25%] mx-auto mt-4 space-y-2'>
          <div className='flex justify-center'>
            <label className='text-cyan-300 text-center bg-cyan-800 p-1 rounded-md'>Date:</label>
          </div>
          <div className='p-1 bg-cyan-50 border-2 text-cyan-800 rounded-full w-full text-center items-center flex justify-center'>
              <DatePicker
                selected={reservationData.date}
                onChange={handleDateChange}
                className='w-full rounded-full bg-cyan-50 flex text-center'
                required
              />            
            </div>          
        </div>


        {/* Add other input fields */}
        <div className='text-center mt-4'>
          <button className='rounded-full text-lg shadow-sm md:shadow-md shadow-cyan-800 p-1 px-2 md:p-3 text-cyan-300 bg-cyan-800 hover:text-cyan-800 hover:bg-cyan-50 transition duration-200 ease-linear' type="submit">Submit Reservation</button>
        </div>
      </form>
    </div>
  );
}

export default ReservationPage;
