import React from 'react'
import { Link } from "react-router-dom";

function Walking() {
  return (
    <div className="p-6 md:p-12 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen flex flex-col items-center">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-red-500">
      The Walking Dead: Survival
    </h1>

    <img 
      src="/walking.jpg" 
      alt="The Walking Dead Game" 
      className="w-full md:w-3/4 lg:w-1/2 h-72 object-cover rounded-lg shadow-xl mb-6"
    />

    <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl">
      The Walking Dead: Survival is a post-apocalyptic action game where players 
      fight to survive against hordes of zombies. Make tough choices, scavenge 
      for resources, and team up with allies to stay alive in a world overrun 
      by the undead.
    </p>

    <ul className="mt-4 text-gray-400 text-lg list-disc list-inside">
      <li> Intense survival and action gameplay</li>
      <li>Battle against zombies and rival survivors</li>
      <li>Customize weapons and gear</li>
      <li>Explore dangerous open-world environments</li>
    </ul>

    <Link 
      to="/explore/action"
      className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-800 rounded-xl text-white font-semibold text-lg transition"
    >
      Back
    </Link>
  </div>
  )
}

export default Walking