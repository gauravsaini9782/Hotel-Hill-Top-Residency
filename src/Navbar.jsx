import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // state to toggle mobile menu

  return (
    <nav className="bg-indigo-900 text-white p-4 fixed w-full shadow-lg z-10 transition duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide">
          <a href="/" className="text-white hover:text-yellow-400 transition duration-300 ease-in-out">Hill Top Residency</a>
        </div>

        {/* Nav Links for Desktop */}
        <div className="hidden md:flex space-x-8 text-lg">
          <a href="/" className="hover:text-yellow-400 hover:scale-105 transition duration-300 ease-in-out">Home</a>
          <a href="#services" className="hover:text-yellow-400 hover:scale-105 transition duration-300 ease-in-out">Services</a>
          <a href="#rooms" className="hover:text-yellow-400 hover:scale-105 transition duration-300 ease-in-out">Rooms</a>
          <a href="#attractions" className="hover:text-yellow-400 hover:scale-105 transition duration-300 ease-in-out">Nearby Attractions</a>
        </div>

        {/* Book Now Button */}
        <div className="hidden md:block">
          <a href="https://www.booking.com/hotel/in/hill-top-residency.html?aid=2425903&label=bra115jc-1FCAMobEIOc2F3YWktbWFkaG9wdXJIM1gDaGyIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4As6uyLgGwAIB0gIkZTZkODQ0NzctYmQ5Zi00NGQwLTg3OWYtZDhjZmY2NmI0YmJl2AIF4AIB&sid=acf05d28f70ab83476d846739c47bf7d&all_sr_blocks=1051314701_377851330_2_2_0;checkin=2024-10-19;checkout=2024-10-20;dest_id=-2110654;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=5;highlighted_blocks=1051314701_377851330_2_2_0;hpos=5;matching_block_id=1051314701_377851330_2_2_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=1051314701_377851330_2_2_0__100000;srepoch=1729238929;srpvid=13ca394603c301b0;type=total;ucfs=1&" className="bg-yellow-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-yellow-600 hover:scale-105 transition duration-300 ease-in-out">
            Book Now
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-900">
          <div className="flex flex-col items-center space-y-4 py-4 text-lg">
            <a href="/" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition duration-300 ease-in-out">Home</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition duration-300 ease-in-out">Services</a>
            <a href="#rooms" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition duration-300 ease-in-out">Rooms</a>
            <a href="#attractions" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition duration-300 ease-in-out">Nearby Attractions</a>
            <a href="#book" onClick={() => setIsOpen(false)} className="bg-yellow-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out">
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

