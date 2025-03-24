import React from 'react'
import { Link } from "react-router-dom";

function Asphat() {
  return (
    <div className="p-4 md:p-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center text-blue-400 drop-shadow-lg">
      Asphalt 8: Airborne
    </h1>

    <p className="text-lg md:text-xl text-center text-gray-300 mb-6">
      Experience high-speed racing like never before! **Asphalt 8: Airborne** delivers adrenaline-pumping
      arcade racing with incredible jumps, high-performance cars, and breathtaking tracks.
    </p>

    <div className="flex justify-center mb-8">
      <img 
        src="/asphat.jpg" 
        alt="Asphalt 8: Airborne" 
        className="w-full md:w-3/4 lg:w-1/2 h-72 object-cover rounded-xl shadow-xl"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-blue-400"> High-Speed Racing</h2>
          <p className="text-sm text-gray-400">
            Race through intense tracks with over 220 high-performance cars and bikes.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-blue-400"> Gravity-Defying Stunts</h2>
          <p className="text-sm text-gray-400">
            Perform barrel rolls, insane jumps, and drift around tight corners.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-blue-400">🌍 Multiplayer & Career Mode</h2>
          <p className="text-sm text-gray-400">
            Compete in real-time multiplayer races or take on career mode challenges.
          </p>
        </div>
      </div>
    </div>

    
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

export default Asphat