import React from "react";
// Import the background image
import bg2 from "../assets/bg2.png";

const Hero = () => {
  return (
    <div
      className="relative h-screen w-full bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg2})`, // Use the imported image
        backgroundSize: "cover", // Change to cover for full responsiveness
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white flex flex-col items-center justify-center h-full p-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">Follow Us</h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          To The Ethiopian Tour
        </h1>
        <p className="mb-6 max-w-lg mx-auto text-gray-300 text-sm md:text-base">
          Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit, Ad Voluptate,
          Excepturi.
        </p>
        <button className="bg-teal-600 px-6 py-2 rounded-full hover:bg-teal-500 mb-4 md:mb-8">
          Vist More
        </button>

        <div className="bg-black bg-opacity-70 p-4 md:p-6 rounded-lg flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0">
          <input
            type="text"
            placeholder="Place Name"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg outline-none flex-1"
          />
          <input
            type="text"
            placeholder="mm/dd/yyyy"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg outline-none flex-1"
          />
          <input
            type="number"
            placeholder="No. of Tourists"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg outline-none flex-1"
          />
          <button className="bg-teal-600 px-6 py-2 rounded-lg hover:bg-teal-500">
            Find Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
