// src/pages/Home.tsx
import React from "react";
import Hero from "../componets/hero";
import Aboutus from "./About";
import Destination from "./destination";
import Service from "../pages/services";
import Blogs from "../pages/Blogs";
import Books from "../pages/books";

const Home = () => {
  return (
    <div>
      <Hero />
      <Aboutus />
      <Destination />
      <Service />
      <Blogs />
      <Books />
    </div>
  );
};

export default Home;
