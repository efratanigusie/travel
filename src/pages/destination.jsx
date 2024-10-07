// src/components/Destination.tsx
import React from "react";

// Import images directly
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const Destination = () => {
  // Example card data
  const destinations = [
    {
      id: 1,
      image: img1, // Use imported image
      title: "Lalibela",
      description:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Adipisci Dolor.",
      link: "#",
    },
    {
      id: 2,
      image: img2,
      title: "Axum",
      description:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Adipisci Dolor.",
      link: "#",
    },
    {
      id: 3,
      image: img3,
      title: "Simein Mountain",
      description:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Adipisci Dolor.",
      link: "#",
    },
    {
      id: 4,
      image: img4,
      title: "Bale Mountain",
      description:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Adipisci Dolor.",
      link: "#",
    },
  ];

  return (
    <div className="bg-black text-white py-16">
      <div className="text-center mb-12">
        <h3 className="text-teal-500 text-lg">Our Destination</h3>
        <h2 className="text-4xl font-bold mt-2">Make Yours Destination</h2>
      </div>

      <div className="flex justify-center items-center gap-8 flex-wrap">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg w-64"
          >
            <img
              src={destination.image}
              alt={destination.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{destination.title}</h3>
              <p className="text-gray-400 mb-4">{destination.description}</p>
              <a
                href={destination.link}
                className="text-teal-500 hover:text-teal-300"
              >
                Read More &gt;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
