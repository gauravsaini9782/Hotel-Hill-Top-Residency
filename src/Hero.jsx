import React, { useState, useEffect } from 'react';
import { PhoneIcon } from '@heroicons/react/solid'; // Import the Phone icon

function Hero() {
  // Array of images for the slider
  const images = [
    '/images/Hero1.jpg', // Replace with your own images
    '/images/Hero2.avif',
    '/images/Hero3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide to the next image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <section id="hero" className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center">
      <div className="w-full h-full overflow-hidden rounded-xl"> {/* Use rounded-xl for slightly curved edges */}
        {/* Carousel/Slider */}
        <div
          className="w-full h-full flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0"
              style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
          ))}
        </div>
      </div>

      {/* Overlay content (optional for text on top of the carousel) */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-xl"> {/* Apply the same rounded class here */}
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Welcome to Hill Top Residency</h1>
          <p className="text-lg md:text-xl mt-4">Luxury and Comfort Await You</p>
          <div className="flex justify-center mt-8 space-x-4">
          <a href="https://www.booking.com/hotel/in/hill-top-residency.html?aid=2425903&label=bra115jc-1FCAMobEIOc2F3YWktbWFkaG9wdXJIM1gDaGyIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4As6uyLgGwAIB0gIkZTZkODQ0NzctYmQ5Zi00NGQwLTg3OWYtZDhjZmY2NmI0YmJl2AIF4AIB&sid=acf05d28f70ab83476d846739c47bf7d&all_sr_blocks=1051314701_377851330_2_2_0;checkin=2024-10-19;checkout=2024-10-20;dest_id=-2110654;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=5;highlighted_blocks=1051314701_377851330_2_2_0;hpos=5;matching_block_id=1051314701_377851330_2_2_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=1051314701_377851330_2_2_0__100000;srepoch=1729238929;srpvid=13ca394603c301b0;type=total;ucfs=1&" className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-yellow-600 transition duration-300">
             Book Now
              </a>

            <a href="tel:+919257974891" className="inline-flex items-center bg-yellow-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-yellow-600 transition duration-300">
              <PhoneIcon className="h-5 w-5 mr-2" aria-hidden="true" />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;



