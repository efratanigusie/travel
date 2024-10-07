import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black text-white p-6 flex justify-between items-center relative">
      <div className="text-2xl font-bold">Travel</div>

      {/* Hamburger Icon (visible on small screens) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Menu Links for larger screens */}
      <ul className="hidden md:flex space-x-8">
        <li>
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
        </li>
        <li>
          <Link to="/destination" className="hover:text-gray-400">
            Destination
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-gray-400">
            Services
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="hover:text-gray-400">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/blogs" className="hover:text-gray-400">
            Blogs
          </Link>
        </li>
      </ul>

      {/* Book Now button for larger screens */}
      <Link to="/book-now" className="hidden md:inline-block">
        <button className="bg-teal-600 px-4 py-2 rounded-full hover:bg-teal-500">
          Vist More
        </button>
      </Link>

      {/* Dropdown Menu for mobile */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-black bg-opacity-90 md:hidden flex flex-col space-y-4 p-6">
          <li>
            <Link
              to="/"
              className="block hover:text-gray-400"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block hover:text-gray-400"
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/destination"
              className="block hover:text-gray-400"
              onClick={handleLinkClick}
            >
              Destination
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="block hover:text-gray-400"
              onClick={handleLinkClick}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="block hover:text-gray-400"
              onClick={handleLinkClick}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className="block hover:text-gray-400"
              onClick={handleLinkClick}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/book-now" onClick={handleLinkClick}>
              <button className="w-full bg-teal-600 px-4 py-2 rounded-full hover:bg-teal-500">
                Vist More
              </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
