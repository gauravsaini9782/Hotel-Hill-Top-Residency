import React from 'react';

function Rooms() {
  const standardRoomsData = [
    {
      id: 1,
      category: 'Standard Room 1',
      description: 'A cozy standard room with a queen-sized bed and modern amenities.',
      originalPrice: 100,
      discountedPrice: 80,
      image: '/images/Hero1.jpg', // Replace with your image path
    },
    {
      id: 2,
      category: 'Standard Room 2',
      description: 'Spacious room featuring a king-sized bed and a beautiful garden view.',
      originalPrice: 120,
      discountedPrice: 90,
      image: '/images/Hero2.avif', // Replace with your image path
    },
  ];

  const luxuryRoomsData = [
    {
      id: 1,
      category: 'Deluxe Room 1',
      description: 'Elegant luxury room with a king-sized bed and premium facilities.',
      originalPrice: 200,
      discountedPrice: 150,
      image: '/images/Hero3.jpg', // Replace with your image path
    },
    {
      id: 2,
      category: 'Deluxe Room 2',
      description: 'Opulent luxury room with stunning views and top-notch amenities.',
      originalPrice: 250,
      discountedPrice: 200,
      image: '/images/Hero1.jpg', // Replace with your image path
    },
  ];

  return (
    <section id="rooms" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our Rooms</h2>
        <p className="text-lg mb-12">Choose from our luxurious accommodations</p>

        {/* Standard Rooms Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-6">Standard Rooms</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {standardRoomsData.map((room) => (
              <div key={room.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
                <img src={room.image} alt={room.category} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="text-2xl font-semibold mb-2">{room.category}</h4>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg line-through text-gray-500">${room.originalPrice}</span>
                      <span className="text-2xl font-bold text-yellow-500 ml-2">${room.discountedPrice}</span>
                    </div>
                    <a
                      href="https://www.booking.com/hotel/in/hill-top-residency.html?aid=2425903&label=bra115jc-1FCAMobEIOc2F3YWktbWFkaG9wdXJIM1gDaGyIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4As6uyLgGwAIB0gIkZTZkODQ0NzctYmQ5Zi00NGQwLTg3OWYtZDhjZmY2NmI0YmJl2AIF4AIB&sid=acf05d28f70ab83476d846739c47bf7d&all_sr_blocks=1051314701_377851330_2_2_0;checkin=2024-10-19;checkout=2024-10-20;dest_id=-2110654;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=5;highlighted_blocks=1051314701_377851330_2_2_0;hpos=5;matching_block_id=1051314701_377851330_2_2_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=1051314701_377851330_2_2_0__100000;srepoch=1729238929;srpvid=13ca394603c301b0;type=total;ucfs=1&" // Replace with your actual booking URL
                      className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition duration-300 inline-block"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Luxury Rooms Section */}
        <div>
          <h3 className="text-3xl font-semibold mb-6">Deluxe Rooms</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {luxuryRoomsData.map((room) => (
              <div key={room.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
                <img src={room.image} alt={room.category} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="text-2xl font-semibold mb-2">{room.category}</h4>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg line-through text-gray-500">${room.originalPrice}</span>
                      <span className="text-2xl font-bold text-yellow-500 ml-2">${room.discountedPrice}</span>
                    </div>
                    <a
                      href="https://www.booking.com/hotel/in/hill-top-residency.html?aid=2425903&label=bra115jc-1FCAMobEIOc2F3YWktbWFkaG9wdXJIM1gDaGyIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4As6uyLgGwAIB0gIkZTZkODQ0NzctYmQ5Zi00NGQwLTg3OWYtZDhjZmY2NmI0YmJl2AIF4AIB&sid=acf05d28f70ab83476d846739c47bf7d&all_sr_blocks=1051314701_377851330_2_2_0;checkin=2024-10-19;checkout=2024-10-20;dest_id=-2110654;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=5;highlighted_blocks=1051314701_377851330_2_2_0;hpos=5;matching_block_id=1051314701_377851330_2_2_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=1051314701_377851330_2_2_0__100000;srepoch=1729238929;srpvid=13ca394603c301b0;type=total;ucfs=1&" // Replace with your actual booking URL
                      className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition duration-300 inline-block"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rooms;

