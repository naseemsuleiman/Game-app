import React from 'react'
import { Link } from "react-router-dom";

function Spaces() {
  return (
    <div className="p-4 md:p-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center text-blue-400 drop-shadow-lg">
        Nova Space Armada
      </h1>

      <p className="text-lg md:text-xl text-center text-gray-300 mb-6">
        Command your fleet in an intergalactic war! Battle against alien forces, upgrade your spaceships, 
        and dominate the galaxy in this thrilling space strategy game.
      </p>

      <div className="flex justify-center mb-8">
        <img 
          src="/space.png" 
          alt="Nova Space Armada" 
          className="w-full md:w-3/4 lg:w-1/2 h-72 object-cover rounded-xl shadow-xl"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-blue-400"> Epic Space Battles</h2>
            <p className="text-sm text-gray-400">
              Engage in massive fleet battles with stunning visual effects and real-time strategy combat.
            </p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-blue-400"> Build & Upgrade</h2>
            <p className="text-sm text-gray-400">
              Customize your fleet, upgrade your ships, and research new technologies.
            </p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-blue-400">🌌 Explore the Universe</h2>
            <p className="text-sm text-gray-400">
              Discover new planets, unlock rare resources, and forge alliances with other players.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Link to="/explore/adventure">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg">
            Back 
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Spaces