import React from 'react'
import { Link } from "react-router-dom";

function Destiny() {
  return (
    <div className="p-4 md:p-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center text-pink-400 drop-shadow-lg">
      Destiny of Amor
    </h1>

    <p className="text-lg md:text-xl text-center text-gray-300 mb-6">
      Embark on an epic journey of love, fate, and adventure. In **Destiny of Amor**, 
      battle mystical forces, uncover hidden secrets, and determine the course of destiny.
    </p>

    <div className="flex justify-center mb-8">
      <img 
        src="/destiny.jpg" 
        alt="Destiny of Amor" 
        className="w-full md:w-3/4 lg:w-1/2 h-72 object-cover rounded-xl shadow-xl"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-pink-400"> Romantic Adventure</h2>
          <p className="text-sm text-gray-400">
            Explore a beautifully crafted world filled with love, heartbreak, and redemption.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-pink-400">Epic Battles</h2>
          <p className="text-sm text-gray-400">
            Engage in fast-paced combat against mythical creatures and dark forces.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-pink-400">🛡️ Forge Your Destiny</h2>
          <p className="text-sm text-gray-400">
            Shape the story with your choices and unlock multiple endings.
          </p>
        </div>
      </div>
    </div>

   
    <div className="flex justify-center mt-8">
      <Link to="/explore/adventure">
        <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full shadow-lg">
        Back
        </button>
      </Link>
    </div>
  </div>
  )
}

export default Destiny