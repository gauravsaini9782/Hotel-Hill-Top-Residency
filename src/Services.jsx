import React from 'react';
import { FaWifi, FaUtensils, FaCar, FaHotel, FaRoute, FaTaxi,  } from 'react-icons/fa'; // Importing icons from react-icons

function Services() {
  const services = [
    { name: 'Free WiFi', icon: <FaWifi size={40} /> },
    { name: 'Food', icon: <FaUtensils size={40} /> },
    { name: 'Free Parking', icon: <FaCar size={40} /> },
    { name: 'Luxury Rooms', icon: <FaHotel size={40} /> },
    { name: 'Ranthambore Tours', icon: <FaRoute size={40} /> },
    { name: 'Taxi', icon: <FaTaxi size={40} /> },
   
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold text-indigo-900 mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer group"
            >
              <div className="flex flex-col items-center justify-center">
                {/* Icon */}
                <div className="text-indigo-900 mb-4 group-hover:text-yellow-500 transition duration-300">
                  {service.icon}
                </div>
                {/* Service Name */}
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-yellow-500 transition duration-300">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

