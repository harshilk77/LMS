import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative bg-gradient-to-r from-blue-500 bg-indigo-600 dark:from-gray-800  dark:to-gray-900 py-16
       px-4 text-center
       "
    >
      <div className="max-w-3xl mx-auto ">
        <h1 className="text-white text-4xl font-bold mb-4">
          Find best Courses For You
        </h1>
        <p className="text-gray-200 dark:text-gray-400 mb-8">
          Discover, Learn, and Upskill with our wide range of courses
                 </p>
                 <form
                      action=""
                 className="flex items-center max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-md"
                 >
                      <input
                           type="text"
                           placeholder="Search Courses"
                           className="flex-grow w-full px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                           
                      />
                         <button className="bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
                           Search
                      </button>
                 </form>
                 <button className="mt-8 bg-white dark:bg-gray-950 hover:bg-gray-800 px-12 py-4 rounded-full text-blue-700">
                   Explore Courses
                 </button>
                
      </div>
    </div>
  );
};

export default HeroSection;
