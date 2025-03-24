import React from 'react'
import { Link } from "react-router-dom";

function Nitro() {
  return (
    <div className="p-4 md:p-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center text-yellow-400 drop-shadow-lg">
      Nitro Nation: Drag & Drift
    </h1>

    <p className="text-lg md:text-xl text-center text-gray-300 mb-6">
      Get behind the wheel and experience the thrill of **Nitro Nation: Drag & Drift**! 
      Race, tune, and customize your car in a competitive online racing experience.
    </p>

    <div className="flex justify-center mb-8">
      <img 
        src="/nitro.png" 
        alt="Nitro Nation: Drag & Drift" 
        className="w-full md:w-3/4 lg:w-1/2 h-72 object-cover rounded-xl shadow-xl"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-yellow-400">Real Drag Racing</h2>
          <p className="text-sm text-gray-400">
            Compete in high-speed drag races with real-time multiplayer action.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-yellow-400"> Full Car Customization</h2>
          <p className="text-sm text-gray-400">
            Upgrade engines, tweak gear ratios, and personalize every detail of your ride.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-yellow-400">Drift & Street Racing</h2>
          <p className="text-sm text-gray-400">
            Master precision drifting mechanics and dominate the streets.
          </p>
        </div>
      </div>
    </div>

   
    <div className="flex justify-center mt-8">
      <Link to="/explore/racing">
        <button className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-full shadow-lg">
           Back 
        </button>
      </Link>
    </div>
  </div>
 );
};

export default Nitro