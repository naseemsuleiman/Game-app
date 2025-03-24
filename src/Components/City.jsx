import React from 'react'
import { Link } from "react-router-dom";

function City() {
  return (
    <div className="p-4 md:p-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center text-blue-400 drop-shadow-lg">
      City Racing 2
    </h1>

    <p className="text-lg md:text-xl text-center text-gray-300 mb-6">
      Race through open-world city streets, take on high-speed challenges, and customize 
      your dream car in **City Racing 2**—a thrilling mobile racing experience.
    </p>

    <div className="flex justify-center mb-8">
      <img 
        src="/city.jpg" 
        alt="City Racing 2" 
        className="w-full md:w-3/4 lg:w-1/2 h-72 object-cover rounded-xl shadow-xl"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-blue-400">Open-World Racing</h2>
          <p className="text-sm text-gray-400">
            Drive freely across detailed city streets with realistic traffic and environments.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-blue-400"> Car Customization</h2>
          <p className="text-sm text-gray-400">
            Upgrade engines, tweak performance, and personalize your ride with unique decals.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-blue-400"> Competitive Racing</h2>
          <p className="text-sm text-gray-400">
            Compete in career mode, street races, and online multiplayer challenges.
          </p>
        </div>
      </div>
    </div>

    {/* Back to Games Button */}
    <div className="flex justify-center mt-8">
      <Link to="/explore/racing">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg">
           Back 
        </button>
      </Link>
    </div>
  </div>
  )
}

export default City