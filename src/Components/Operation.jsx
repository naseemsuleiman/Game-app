import React from 'react'
import { Link } from "react-router-dom";

function Operation() {
  return (
    <div className="p-4 md:p-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center text-green-400 drop-shadow-lg">
      Operation: New Earth
    </h1>

    <p className="text-lg md:text-xl text-center text-gray-300 mb-6">
      Defend humanity and rebuild civilization in this strategic battle for survival! 
      Train elite soldiers, research advanced technologies, and wage war against alien invaders.
    </p>

    <div className="flex justify-center mb-8">
      <img 
        src="/operation.jpg" 
        alt="Operation New Earth" 
        className="w-full md:w-3/4 lg:w-1/2 h-72 object-cover rounded-xl shadow-xl"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-green-400"> Build & Defend</h2>
          <p className="text-sm text-gray-400">
            Construct a powerful base and fortify your defenses against alien attacks.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-green-400"> Research & Upgrade</h2>
          <p className="text-sm text-gray-400">
            Unlock powerful weapons, vehicles, and technologies to enhance your army.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-green-400">🌎 Global Warfare</h2>
          <p className="text-sm text-gray-400">
            Join alliances and fight against players worldwide in real-time battles.
          </p>
        </div>
      </div>
    </div>

    <div className="flex justify-center mt-8">
      <Link to="/explore/adventure">
        <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg">
          Back 
        </button>
      </Link>
    </div>
  </div>
  )
}

export default Operation