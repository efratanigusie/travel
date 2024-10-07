// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">
        {/* Travel Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Travel</h2>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-teal-400 hover:text-teal-500"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-teal-400 hover:text-teal-500"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-teal-400 hover:text-teal-500"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-teal-400 hover:text-teal-500"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Destination
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* Our Address */}
        <div>
          <h2 className="text-xl font-bold mb-4">Our Address</h2>
          <ul className="space-y-2 text-gray-400">
            <li>
              <i className="fas fa-map-marker-alt"></i> addis ababa, ethiopia-
              400104
            </li>
            <li>
              <i className="fas fa-phone-alt"></i> 123-456-789
            </li>
            <li>
              <i className="fas fa-envelope"></i> ethiopia120@gmail.com
            </li>
            <li>
              <i className="fas fa-clock"></i> 7:00 am - 5:00 pm
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-bold mb-4">Newsletter</h2>
          <p className="text-gray-400 mb-4">Subscribe for latest updates</p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-800 text-gray-300 border border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button className="w-full px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
