import React from 'react'
import { Link } from "react-router-dom";

function Metal() {
  return (
    <div className="p-6 md:p-12 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen flex flex-col items-center">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-yellow-400">
      Metal Gear Solid V: The Phantom Pain
    </h1>

    <img 
      src="/metal.jpg" 
      alt="Metal Gear Solid V" 
      className="w-full md:w-3/4 lg:w-1/2 h-72 object-cover rounded-lg shadow-xl mb-6"
    />

    <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl">
      Metal Gear Solid V: The Phantom Pain is an open-world stealth-action game 
      that follows the story of Venom Snake as he seeks revenge. With tactical 
      espionage operations, dynamic gameplay, and an engaging storyline, players 
      will experience a deeply immersive military simulation.
    </p>

    <ul className="mt-4 text-gray-400 text-lg list-disc list-inside">
      <li> Tactical espionage action with stealth gameplay</li>
      <li> Massive open-world environments with dynamic weather</li>
      <li>Build and manage your own private military base</li>
      <li>Realistic combat mechanics and AI behavior</li>
    </ul>

    
    <Link 
      to="/explore/action"
      className="mt-6 px-6 py-3 bg-yellow-600 hover:bg-yellow-800 rounded-xl text-white font-semibold text-lg transition"
    >
       Back
    </Link>
  </div>
  )
}

export default Metal