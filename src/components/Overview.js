import React from "react";

function Overview() {
 return (
  <section
   className="p-10 text-center bg-cover bg-center rounded-lg m-4"
   style={{ backgroundImage: "url('/assets/images/overview-bg.jpg')" }}
  >
   <h2 className="text-5xl font-bold text-blue-300 drop-shadow-lg">
    Project Overview
   </h2>
   <p className="mt-6 text-xl text-white drop-shadow-md">
    RIDO India Inc. is a multinational company that started in 2014 in
    Bangalore, India. The company received the Leading Startup of India Award
    and now has a presence across India.
   </p>
  </section>
 );
}

export default Overview;
