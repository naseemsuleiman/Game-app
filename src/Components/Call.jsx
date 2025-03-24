import React from 'react'
import { Link } from "react-router-dom";

function Call() {
  return (
    <div className="p-4 md:p-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center text-red-500 drop-shadow-lg">
      Call of Duty: Black Ops 6
    </h1>

    <p className="text-lg md:text-xl text-center text-gray-300 mb-6">
      The Black Ops 6 Campaign provides dynamic gameplay with blockbuster set 
      pieces and action-packed moments.
    </p>

    <div className="flex justify-center mb-8">
      <img 
        src="/callofduty.jpg" 
        alt="Call of Duty Black Ops 6" 
        className="w-full md:w-3/4 lg:w-1/2 h-72 object-cover rounded-xl shadow-xl"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-red-400">Intense Combat</h2>
          <p className="text-sm text-gray-400">
            Engage in high-speed warfare with realistic mechanics and dynamic battlefields.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-red-400"> Global Missions</h2>
          <p className="text-sm text-gray-400">
            Experience thrilling single-player and multiplayer missions across the world.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-red-400">Weapon Customization</h2>
          <p className="text-sm text-gray-400">
            Upgrade and personalize your arsenal to dominate the battlefield.
          </p>
        </div>
      </div>
    </div>

  
    <div className="flex justify-center mt-8">
      <Link to="/">
        <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full shadow-lg">
          Back 
        </button>
      </Link>
    </div>
  </div>
  )
}

export default Call