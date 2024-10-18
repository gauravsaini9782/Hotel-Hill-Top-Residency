import React from 'react';

const attractions = [
    {
      id: 1,
      name: 'Ranthambore National Park',
      description: 'Famous for its tiger population and diverse wildlife. Offers safari tours for a chance to see various animals in their natural habitat.',
      image: '/images/tiger2.jpg', // Replace with your image path
      link: 'https://www.ranthamborenationalpark.com/', // Replace with your desired URL
    },
    {
      id: 2,
      name: 'Ranthambore Fort',
      description: 'A UNESCO World Heritage Site, this fort offers stunning views and historical significance.',
      image: '/images/Ranthambore fort.jpg', // Replace with your image path
      link: 'https://www.tourism.rajasthan.gov.in/ranthambore-fort.html', // Replace with your desired URL
    },
    {
      id: 3,
      name: 'Kachida Valley',
      description: 'Known for its picturesque landscapes and wildlife sightings, including panthers.',
      image: '/images/kachida valley.webp', // Replace with your image path
      link: 'https://www.ranthamborenationalpark.com/kachida-valley.html', // Replace with your desired URL
    },
    {
      id: 4,
      name: 'Surwal Lake',
      description: 'A beautiful lake ideal for birdwatching and photography.',
      image: '/images/surwal lake.webp', // Replace with your image path
      link: 'https://www.tripadvisor.in/Attraction_Review-g1155135-d3704858-Reviews-Surwal_Lake-Ranthambore_National_Park_Sawai_Madhopur_District_Rajasthan.html', // Replace with your desired URL
    },
    {
      id: 5,
      name: 'Rajiv Gandhi Museum of Natural History',
      description: 'Provides insights into the flora and fauna of Ranthambore.',
      image: '/images/museum.webp', // Replace with your image path
      link: 'https://www.tourism-rajasthan.com/rajiv-gandhi-regional-museum.html', // Replace with your desired URL
    },
    {
      id: 6,
      name: 'Crocodile Sanctuary',
      description: 'Offers less crowded safari experiences and is known for its scenic beauty.',
      image: '/images/crocodile.webp', // Replace with your image path
      link: 'https://ranthambhorenationalpark.in/national-chambal-gharial-sanctuary', // Replace with your desired URL
    },
  ];

  function NearbyAttractions() {
    return (
      <section id="attractions" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Nearby Attractions</h2>
          <p className="text-lg mb-12">Explore the beautiful sights around Ranthambore</p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction) => (
              <div key={attraction.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
                <img src={attraction.image} alt={attraction.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-2xl font-semibold mb-2">{attraction.name}</h3>
                  <p className="text-gray-600 mb-4">{attraction.description}</p>
                  <a href={attraction.link} target="_blank" rel="noopener noreferrer" className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition duration-300">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default NearbyAttractions;
