// ImageGallery.js

import React, { useState } from 'react';
import Image from 'next/image';


const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const previousImage = () => {
    if (selectedImage === null) return;
  
    // Calculate the index of the previous image
    const previousIndex = (selectedImage - 1 + images.length) % images.length;
  
    setSelectedImage(previousIndex);
  };
  
  const nextImage = () => {
    if (selectedImage === null) return;
  
    // Calculate the index of the next image
    const nextIndex = (selectedImage + 1) % images.length;
  
    setSelectedImage(nextIndex);
  };
  

  return (
<div className="grid grid-cols-2  lm:grid-cols-4 gap-0" style={{ gridAutoFlow: 'dense' }}>
  {images.map((image, index) => (
    <div
      key={index}
      className={`relative cursor-pointer transform hover:scale-110 ${
        index % 5 === 0 ? 'col-span-2 row-span-2' : '' // Apply class to every 5th image
      }`}
      onClick={() => openImage(index)}
    >
      
      <Image
        className="gallery shadow-2xl shadow-black rounded-md w-full h-full object-cover"
        src={image.src}
        alt={image.alt}
        width={500}
        height={500}
      />


        </div>
      ))}
      {selectedImage !== null && (
        <div className="fixed  right-0 top-0 m-auto w-full h-full  bg-black bg-opacity-75
        flex items-center justify-center z-50">
          {/* Display selected image here */}
          <Image
          className='w-[70%] h-[70%] object-fit rounded-sm border-8 border-cyan-50 shadow-md shadow-black'
           src={images[selectedImage].src}
            width={5000} height={5000}
             alt={images[selectedImage].alt}
              />
          <button
            className="absolute top-0 right-0 m-4 text-white text-2xl"
            onClick={closeImage}
          >
            &times;
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white text-2xl"
            onClick={previousImage}
          >
            &lt;
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white text-2xl"
            onClick={nextImage}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
