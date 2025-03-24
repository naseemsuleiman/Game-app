import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Action() {
  const location = useLocation();
  const isOnActionPage = location.pathname === "/explore/action";

  return (
    <div className="p-6 md:p-12 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
      <h4 className="text-1xl md:text-3xl font-extrabold mb-4 text-center">
        Action
      </h4>
      {isOnActionPage && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            to="code"
            className="bg-gray-800 rounded-2xl shadow-xl p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src="/codeofwar.jpg"
              alt="Action"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-purple-400">
              Code of War: War Guns Shooter games
            </h3>
            <p className="text-sm text-gray-300">
              Code of War is a cutting-edge shooter game that delivers intense
              first-person shooter (FPS) action with dynamic battles and
              tactical gameplay.
            </p>
          </Link>

          <Link
            to="walking"
            className="bg-gray-800 rounded-2xl shadow-xl p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src="/walking.jpg"
              alt="English"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-blue-400">The Walking Dead: A New Frontier</h3>
            <p className="text-sm text-gray-300">
            A New Frontier, a five part episodic game series from the creators of The Wolf Among Us, Batman - The Telltale Series, and Tales from the Borderlands.
            </p>
          </Link>

          <Link
            to="metal"
            className="bg-gray-800 rounded-2xl shadow-xl p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src="/metal.jpg"
              alt="Science"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-green-400">Metal Gear Solid 5: The Phantom Pain</h3>
            <p className="text-sm text-gray-300">
            The Phantom Pain is the last MGS game we get, following the dissolution of Kojima Productions, and what a legacy it has left behind.
            </p>
          </Link>
       
         
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Action;
