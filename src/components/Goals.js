import React from "react";

function Goals() {
 return (
  <section className="p-10 bg-gray-900 rounded-lg m-4 text-center shadow-lg">
   <h2 className="text-5xl font-bold text-blue-300 drop-shadow-lg">
    Project Goals
   </h2>
   <div className="flex flex-wrap justify-around mt-6 space-y-8 md:space-y-0">
    <div className="w-full md:w-1/3 p-6 bg-gray-700 rounded-lg shadow-lg">
     <img
      className="w-full h-40 object-cover rounded-t-lg"
      src="/research.webp"
      alt="Research"
     />
     <h3 className="text-2xl font-bold text-white mt-4">Research</h3>
     <p className="mt-4 text-lg text-gray-300">
      Conduct thorough research with our team of over 200 software engineers
      working on applications to connect customers with drivers and riders.
     </p>
    </div>
    <div className="w-full md:w-1/3 p-6 bg-gray-700 rounded-lg shadow-lg">
     <img
      className="w-full h-40 object-cover rounded-t-lg"
      src="/practice.webp"
      alt="Practice"
     />
     <h3 className="text-2xl font-bold text-white mt-4">Practice</h3>
     <p className="mt-4 text-lg text-gray-300">
      Ensure more than 30 guaranteed rides and drives for our running captains
      to earn good income regularly.
     </p>
    </div>
    <div className="w-full md:w-1/3 p-6 bg-gray-700 rounded-lg shadow-lg">
     <img
      className="w-full h-40 object-cover rounded-t-lg"
      src="/improvement.webp"
      alt="Improvement"
     />
     <h3 className="text-2xl font-bold text-white mt-4">Improvement</h3>
     <p className="mt-4 text-lg text-gray-300">
      Learn from other groups and solve issues promptly. Regularly review
      customer feedback and address any issues swiftly.
     </p>
    </div>
   </div>
  </section>
 );
}

export default Goals;
