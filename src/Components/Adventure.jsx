import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Adventure() {
  const location = useLocation();
  const isOnActionPage = location.pathname === "/explore/adventure";
  return (
    <div className="p-6 md:p-12 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
      <h4 className="text-1xl md:text-3xl font-extrabold mb-4 text-center">
        Adventure
      </h4>
      {isOnActionPage && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            to="spaces"
            className="bg-gray-800 rounded-2xl shadow-xl p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src="/space.png"
              alt="Action"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-purple-400">
              Nova: Space Armada
            </h3>
            <p className="text-sm text-gray-300">
              Code of War is a cutting-edge shooter game that delivers intense
              first-person shooter (FPS) action with dynamic battles and
              tactical gameplay.
            </p>
          </Link>

          <Link
            to="operation"
            className="bg-gray-800 rounded-2xl shadow-xl p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src="/operation.jpg"
              alt="English"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-blue-400">
              Operation: New Earth
            </h3>
            <p className="text-sm text-gray-300">
              Earth. Your home, your memories, your family... All is fading
              under the colossal shadow of an attacking alien force. Jump into
              this intense sci-fi multiplayer strategy game. Command an advanced
              military facility to defend Earth from hostile alien invasion!
            </p>
          </Link>

          <Link
            to="destiny"
            className="bg-gray-800 rounded-2xl shadow-xl p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src="/destiny.jpg"
              alt="Science"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-green-400">
              Destiny of Armor
            </h3>
            <p className="text-sm text-gray-300">
              Destiny of Armor co-published by MIRACLE GAMES INC, is an exciting
              SLG war game. The new mech theme combines strategic warfare,
              multiplayer online competition, free marching and real-time combat
              gameplay, providing players with a unique gaming experience.
            </p>
          </Link>
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default Adventure;
