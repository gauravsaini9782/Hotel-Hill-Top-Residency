import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Hill Top Residency</h3>
        <p className="mb-4">Experience Luxury and Comfort</p>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row justify-center space-x-4 mb-6">
          <a href="/" className="hover:text-yellow-500 transition duration-300">Home</a>
          <a href="#services" className="hover:text-yellow-500 transition duration-300">Services</a>
          <a href="#rooms" className="hover:text-yellow-500 transition duration-300">Rooms</a>
          <a href="#attractions" className="hover:text-yellow-500 transition duration-300">Nearby Attractions</a>
          <a href="#contact" className="hover:text-yellow-500 transition duration-300">Contact Us</a>
        </div>

        {/* Contact Information */}
        <div className="mb-4">
          <p>Hill Top Residency, Sawai Madhopur, Rajasthan, India </p>
          <p>Email: info.hilltopresidency@gmail.com </p>
          <p>Phone: +91 9257974891</p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-300">
            <i className="fab fa-facebook-f"></i> {/* Font Awesome Icon */}
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-300">
            <i className="fab fa-twitter"></i> {/* Font Awesome Icon */}
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-300">
            <i className="fab fa-instagram"></i> {/* Font Awesome Icon */}
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-300">
            <i className="fab fa-linkedin"></i> {/* Font Awesome Icon */}
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Hill Top Residency. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
