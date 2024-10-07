// src/components/WhyChooseUs.tsx
import React from "react";
import aboutImage from "../assets/about.png"; // Adjust the path as needed

const Aboutus = () => {
  return (
    <div className="flex justify-center items-center bg-black text-white py-16">
      {/* Left Image Section */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={aboutImage}
          alt="About Us"
          className="w-96 h-56 object-cover rounded-lg"
        />
      </div>

      {/* Right Text Content */}
      <div className="flex-1 p-8">
        <h3 className="text-teal-500 text-lg mb-2">Why Choose Us?</h3>
        <h2 className="text-4xl font-bold mb-4">about Tourists and touris</h2>
        <p className="text-gray-400 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          consequatur expedita molestias quod voluptas facilis architecto
          doloribus debitis, quidem maxime doloremque adipisci cumque? Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="border-teal-500 text-teal-500 border-2 px-6 py-2 rounded-full hover:bg-teal-500 hover:text-white transition-all">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Aboutus;
