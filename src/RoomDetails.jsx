import React from 'react';
import { useParams } from 'react-router-dom'; // Assuming you are using React Router

const roomData = [
  {
    id: 1,
    category: 'Standard Rooms',
    description: 'Comfortable standard rooms with essential amenities for a pleasant stay.',
    originalPrice: 100,
    discountedPrice: 80,
    image: '/images/standard-room.jpg', // Replace with your image path
    amenities: ['Free WiFi', 'Air Conditioning', 'Room Service', 'Flat-screen TV'],
  },
  {
    id: 2,
    category: 'Luxury Rooms',
    description: 'Elegant luxury rooms with premium facilities for a lavish experience.',
    originalPrice: 200,
    discountedPrice: 150,
    image: '/images/luxury-room.jpg', // Replace with your image path
    amenities: ['Free WiFi', 'Jacuzzi', 'Minibar', 'Balcony'],
  },
];

function RoomDetails() {
  const { id } = useParams(); // Get the room ID from the URL
  const room = roomData.find((room) => room.id === parseInt(id)); // Find the room by ID

  if (!room) {
    return <div className="text-center text-red-500">Room not found.</div>;
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">{room.category}</h2>
        <img src={room.image} alt={room.category} className="w-full h-64 object-cover mb-4 rounded-xl" />
        <p className="text-lg mb-8">{room.description}</p>
        <div className="text-lg mb-4">
          <span className="line-through text-gray-500">${room.originalPrice}</span>
          <span className="text-2xl font-bold text-blue-grotto-500 ml-2">${room.discountedPrice}</span>
        </div>

        <h3 className="text-2xl font-semibold mb-4">Amenities</h3>
        <ul className="list-disc list-inside mb-8">
          {room.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>

        <a href="#book" className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-yellow-600 transition duration-300">
          Book Now
        </a>
      </div>
    </section>
  );
}

export default RoomDetails;
