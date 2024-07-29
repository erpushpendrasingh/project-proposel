import React from "react";

function Portfolio() {
 return (
  <section className="p-10 bg-gray-800 rounded-lg m-4 text-center shadow-lg">
   <h2 className="text-5xl font-bold text-purple-400 drop-shadow-lg">
    Portfolio
   </h2>
   <p className="mt-6 text-xl text-gray-300 drop-shadow-md">
    We have a large IT team with over 200 software engineers working on an
    application to connect customers with drivers and riders.
   </p>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
    <img
     className="w-full rounded-lg shadow-lg"
     src="/portfolio-image1.webp"
     alt="Portfolio 1"
    />
    <img
     className="w-full rounded-lg shadow-lg"
     src="/portfolio-image2.webp"
     alt="Portfolio 2"
    />
    <img
     className="w-full rounded-lg shadow-lg"
     src="/portfolio-image3.webp"
     alt="Portfolio 3"
    />
   </div>
  </section>
 );
}

export default Portfolio;
