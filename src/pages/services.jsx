import React from "react";

const services = [
  {
    title: "Worldwide",
    icon: "🌍",
    description: "Lorem Ipsum Dolor Sit Amet Consectetur.",
  },
  {
    title: "Adventures",
    icon: "🏃‍♂️",
    description: "Adipisicing Elit, Nulla Quia!",
  },
  {
    title: "Foods & Drinks",
    icon: "🍽",
    description: "Lorem Ipsum Dolor Sit Amet.",
  },
  {
    title: "Affordable Hotels",
    icon: "🏨",
    description: "Lorem Ipsum Dolor Sit Amet Consectetur.",
  },
  {
    title: "Affordable Price",
    icon: "💰",
    description: "Adipisicing Elit, Nulla Quia!",
  },
  {
    title: "24/7 Services",
    icon: "🎧",
    description: "Lorem Ipsum Dolor Sit Amet.",
  },
];

const service = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h2 className="text-cyan-300 text-lg">Our Services</h2>
      <h1 className="text-4xl font-bold my-4">Countless Experience</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-gray-900 rounded-lg text-center">
            <div className="text-6xl mb-4 text-cyan-300">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-400 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default service;
