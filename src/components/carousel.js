import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import suya from '../images/suyalike.jpg';
import bplate from '../images/blackPlates.jpg';
import plate1 from '../images/plate-1.jpg';
import cyandish from '../images/cyanDish.jpg';
import oldish from '../images/dishesPlates.jpg';

export default class NextJsCarousel extends Component {
  render() {
    const carouselSettings = {
      showStatus: false, // Hide status indicators
      showThumbs: false, // Hide thumbnail navigation
      infiniteLoop: true, // Enable infinite loop
      autoPlay: true, // Enable auto-play
      interval: 3000, // Set the interval between slides (3 seconds in this case)
      transitionTime: 500, // Set the transition time (0.5 seconds in this case)
      stopOnHover: true, // Stop auto-play on hover
    };

    return (
      <div className='w-[80%] md:w-1/2 mx-auto rounded-b-3xl relative'>
        <Carousel {...carouselSettings}>
          <div className='h-[300px]'>
            <Image
              src={suya}
              className='rounded-b-3xl object-cover w-full h-full'
              alt="image1"
            />
          </div>
          <div className='h-[300px]'>
            <Image
              src={bplate}
              className='rounded-b-3xl object-cover w-full h-full'
              alt="image2"
            />
          </div>
          <div className='h-[300px]'>
            <Image
              src={plate1}
              className='rounded-b-3xl object-cover w-full h-full'
              alt="image3"
            />
          </div>
          <div className='h-[300px]'>
            <Image
              src={cyandish}
              className='rounded-b-3xl object-cover w-full h-full'
              alt="image4"
            />
          </div>
          <div className='h-[300px]'>
            <Image
              src={oldish}
              className='rounded-b-3xl object-cover w-full h-full'
              alt="image5"
            />
          </div>
        </Carousel>
      </div>
    );
  }
}
