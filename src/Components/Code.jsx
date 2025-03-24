import React from 'react'
import { Link } from "react-router-dom";

function Code() {
    
  return (
    <div className="p-6 md:p-12 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-purple-400">
        Code of War: War Guns Shooter
      </h1>

      <img 
        src="/codeofwar.jpg" 
        alt="Code of War" 
        className="w-full md:w-3/4 lg:w-1/2 h-72 object-cover rounded-lg shadow-xl mb-6"
      />

      <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl">
        Code of War is a high-paced multiplayer shooter game that delivers intense 
        first-person shooter (FPS) action. Engage in tactical battles, upgrade your 
        weapons, and compete against top players worldwide.
      </p>

      <ul className="mt-4 text-gray-400 text-lg list-disc list-inside">
        <li> Realistic 3D graphics and animations</li>
        <li> Competitive online multiplayer modes</li>
        <li> Huge arsenal of weapons and upgrades</li>
        <li> Smooth controls and immersive combat mechanics</li>
      </ul>
      <Link 
        to="/explore/action"
        className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-800 rounded-xl text-white font-semibold text-lg transition"
      >
         Back 
      </Link>
    </div>
  )
}

export default Code