// src/App.jsx
import React from "react";
// Import the background image
import bg1 from "../assets/bg1.png";

function Books() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="relative w-full h-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: `url(${bg1})`, // Use the imported image
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <p className="text-teal-400 mb-2">Start Your Adventure</p>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Let&apos;s Ethiopian Tour
          </h1>
          <p className="text-center text-gray-300 max-w-lg mx-auto mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            amet voluptates expedita tenetur labor nostrum laborum reprehenderit
            quis vero totam?
          </p>
          <button className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300">
            Vist More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Books;
