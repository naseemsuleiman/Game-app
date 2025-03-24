import React from 'react'
import { Link } from "react-router-dom";

function Among() {
  return (
    <div className="p-4 md:p-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center text-red-500 drop-shadow-lg">
      Among Us
    </h1>

    <p className="text-lg md:text-xl text-center text-gray-300 mb-6">
      Play with 4-15 players online or via local WiFi as you attempt to prepare your spaceship for departure. 
      But beware—one or more random players among the Crew are Impostors bent on sabotage!
    </p>

    <div className="flex justify-center mb-8">
      <img 
        src="/amongus.jpg" 
        alt="Among Us" 
        className="w-full md:w-3/4 lg:w-1/2 h-72 object-cover rounded-xl shadow-xl"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-red-400"> Space Adventure</h2>
          <p className="text-sm text-gray-400">
            Complete spaceship tasks while avoiding elimination by Impostors.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-red-400"> Deception & Strategy</h2>
          <p className="text-sm text-gray-400">
            Discuss, vote, and find out who the Impostors are before it's too late!
          </p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-red-400"> Multiplayer Fun</h2>
          <p className="text-sm text-gray-400">
            Play online with friends or strangers in intense social deduction gameplay.
          </p>
        </div>
      </div>
    </div>

    <div className="flex justify-center mt-8">
      <Link to="/explore/action">
        <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full shadow-lg">
           Back 
        </button>
      </Link>
    </div>
  </div>
  )
}

export default Among