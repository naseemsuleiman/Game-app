import React from 'react'
import { Link } from "react-router-dom";

function Mines() {
  return (
    <div className="p-4 md:p-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center text-green-500 drop-shadow-lg">
      Minecraft
    </h1>

    <p className="text-lg md:text-xl text-center text-gray-300 mb-6">
      Build whatever you can imagine in your own infinite world that’s unique in every playthrough.
      Explore, mine, craft, and survive in this blocky sandbox adventure.
    </p>

    <div className="flex justify-center mb-8">
      <img 
        src="/minecraft.jpeg" 
        alt="Minecraft" 
        className="w-full md:w-3/4 lg:w-1/2 h-72 object-cover rounded-xl shadow-xl"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-green-400">⛏️ Endless Exploration</h2>
          <p className="text-sm text-gray-400">
            Travel through diverse biomes, from lush forests to deep caves and vast oceans.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-green-400">🏗️ Creative & Survival Modes</h2>
          <p className="text-sm text-gray-400">
            Choose between infinite creativity in Creative mode or survival challenges in Survival mode.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-green-400">👾 Multiplayer Fun</h2>
          <p className="text-sm text-gray-400">
            Join friends online to build, battle, and explore in shared worlds.
          </p>
        </div>
      </div>
    </div>

    <div className="flex justify-center mt-8">
      <Link to="/">
        <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg">
           Back 
        </button>
      </Link>
    </div>
  </div>
  )
}

export default Mines