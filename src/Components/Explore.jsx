import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Explore = () => {
  const location = useLocation();
  const isOnExplorePage = location.pathname === "/explore";

  return (
    <div className="p-6 md:p-12 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-center">
        Explore Games
      </h1>
      {isOnExplorePage && (
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <Link
            to="action"
            className="bg-gray-800 rounded-2xl shadow-xl p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src="action.jpg"
              alt="Action"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-purple-400">Action</h3>
            <p className="text-sm text-gray-300">
              Action: "High-paced games filled with excitement and
              challenges.
            </p>
          </Link>

          <Link
            to="adventure"
            className="bg-gray-800 rounded-2xl shadow-xl p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src="adventure.jpg"
              alt="English"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-blue-400">Adventure</h3>
            <p className="text-sm text-gray-300">
              Adventure: "Immersive stories with exploration and
              puzzles.
            </p>
          </Link>

         
          <Link 
            to="racing" 
            className="bg-gray-800 rounded-2xl shadow-xl p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <img src="racing.png" alt="Science" className="w-full h-48 object-cover rounded-lg mb-4"/>
            <h3 className="text-2xl font-semibold text-blue-400">Racing</h3>
            <p className="text-sm text-gray-300">Speed and thrill for racing enthusiasts.</p>
          </Link>
        
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Explore;
