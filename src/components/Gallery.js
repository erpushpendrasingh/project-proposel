import React from "react";

function Gallery() {
 return (
  <section className="p-10 bg-gray-900 rounded-lg m-4 text-center shadow-lg">
   <h2 className="text-5xl font-bold text-blue-300 drop-shadow-lg">
    Project Gallery
   </h2>
   <p className="mt-6 text-xl text-gray-300 drop-shadow-md">
    Inviting financially sound parties to engage with us as delivery channel
    partners, vendors, and get 100% ROI from day one.
   </p>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
    <img
     className="w-full rounded-lg shadow-lg"
     src="/gallery-image1.webp"
     alt="Gallery 1"
    />
    <img
     className="w-full rounded-lg shadow-lg"
     src="/gallery-image2.webp"
     alt="Gallery 2"
    />
    <img
     className="w-full rounded-lg shadow-lg"
     src="/gallery-image3.webp"
     alt="Gallery 3"
    />
   </div>
  </section>
 );
}

export default Gallery;
