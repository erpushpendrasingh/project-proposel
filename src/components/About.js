import React from "react";

function About() {
 return (
  <section className="p-10 bg-gray-900 rounded-lg m-4 flex flex-col md:flex-row items-center">
   <div className="md:w-1/2 md:pr-8">
    <h2 className="text-5xl font-bold text-purple-400 drop-shadow-lg mb-4">
     About Us
    </h2>
    <p className="text-xl text-gray-300 drop-shadow-md mb-4">
     RIDO India Inc. provides bike and car rental services with approximately
     1200 riders and drivers across India. Starting in Bangalore, we now have
     offices and services throughout South India and are expanding to the North.
     We are a fast-growing Indian multinational company with ties to leading
     brands and large MNCs globally.
    </p>
    <p className="text-xl text-gray-300 drop-shadow-md mb-4">
     Our mission is to offer affordable and reliable transportation solutions to
     our customers while providing significant earning opportunities for our
     riders and drivers. We are committed to innovation, excellence, and
     sustainability in all our endeavors.
    </p>
    <p className="text-xl text-gray-300 drop-shadow-md">
     Join us on our journey as we continue to revolutionize the transportation
     industry and expand our reach to new markets.
    </p>
   </div>
   <div className="md:w-1/2">
    <img
     className="mx-auto w-full rounded-lg shadow-lg"
     src="/about-us.webp"
     alt="RIDO"
    />
   </div>
  </section>
 );
}

export default About;
