import React from "react";

// Import the images properly
import srv1 from "../assets/srv1.png";
import srv2 from "../assets/srv2.png";
import srv3 from "../assets/srv3.png";

const blogs = [
  {
    title: "Life Is A Journey Not A Destination",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Commodi, Omnis.",
    date: "20 May, 2023",
    author: "User",
    imageUrl: srv1, // Use the imported image
  },
  {
    title: "Life Is A Journey Not A Destination",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Commodi, Omnis.",
    date: "20 May, 2023",
    author: "User",
    imageUrl: srv2,
  },
  {
    title: "Life Is A Journey Not A Destination",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Commodi, Omnis.",
    date: "20 May, 2023",
    author: "User",
    imageUrl: srv3,
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      {/* Header Section */}
      <h2 className="text-cyan-300 text-lg">Blogs And Post</h2>
      <h1 className="text-4xl font-bold my-4">The tours Story</h1>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg w-72"
          >
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{blog.description}</p>
              <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
                <div className="flex items-center">
                  <span className="bg-green-500 w-2 h-2 rounded-full mr-2"></span>
                  <span>{blog.date}</span>
                </div>
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.121 17.804A7.5 7.5 0 1117.804 5.12 7.5 7.5 0 015.12 17.804z"
                    />
                  </svg>
                  {blog.author}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
