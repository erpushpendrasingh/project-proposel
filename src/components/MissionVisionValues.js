import React from "react";

function MissionVisionValues() {
 return (
  <section className="p-10 bg-gray-800 rounded-lg m-4 text-center shadow-lg">
   <h2 className="text-5xl font-bold text-blue-300 drop-shadow-lg">
    The Project
   </h2>
   <div className="flex flex-wrap justify-around mt-6 space-y-8 md:space-y-0">
    <div className="w-full md:w-1/3 p-6 bg-gray-700 rounded-lg shadow-lg">
     <h3 className="text-2xl font-bold text-white">Mission</h3>
     <p className="mt-4 text-lg text-gray-300">
      To be India's largest service provider in transportation, connecting
      customers with drivers globally.
     </p>
    </div>
    <div className="w-full md:w-1/3 p-6 bg-gray-700 rounded-lg shadow-lg">
     <h3 className="text-2xl font-bold text-white">Vision</h3>
     <p className="mt-4 text-lg text-gray-300">
      To provide good income opportunities for drivers and riders, creating
      employment globally for a better future together.
     </p>
    </div>
    <div className="w-full md:w-1/3 p-6 bg-gray-700 rounded-lg shadow-lg">
     <h3 className="text-2xl font-bold text-white">Values</h3>
     <p className="mt-4 text-lg text-gray-300">
      Trustworthy, secure, punctual, humble, and polite to customers.
     </p>
    </div>
   </div>
  </section>
 );
}

export default MissionVisionValues;
