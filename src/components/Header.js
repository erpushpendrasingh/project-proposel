import React from "react";
import { useTheme } from "../ThemeContext";

function Header() {
 const { theme, toggleTheme } = useTheme();

 return (
  <header
   className={`p-10 ${
    theme === "dark"
     ? "bg-gradient-to-r from-purple-600 to-blue-500"
     : "bg-gradient-to-r from-yellow-400 to-orange-400"
   } text-center relative shadow-lg`}
  >
   <h1 className="text-6xl font-bold text-white drop-shadow-lg">
    Project Proposal
   </h1>
   <p className="text-lg text-gray-200 mt-2 drop-shadow-lg">
    By RIDO India Inc.
   </p>
   <button
    onClick={toggleTheme}
    className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded"
   >
    Toggle Theme
   </button>
   <div className="absolute bottom-0 left-0 right-0 flex justify-center">
    <div className="w-1/3 h-1 bg-pink-500"></div>
   </div>
  </header>
 );
}

export default Header;
