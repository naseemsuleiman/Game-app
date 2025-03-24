
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const isOnHomePage = location.pathname === "/";

  return (
    <div className="p-6 md:p-12 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-center">
        Welcome to PlayPulse
      </h1>

      <p className="text-lg md:text-xl mb-6 text-center text-gray-300">
        Discover the latest video games, reviews, and updates.
      </p>

      <div className="flex justify-center mb-8">
        <Link to="/explore" style={{ textDecoration: "none" }}>
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full shadow-lg">
            Explore Games
          </button>
        </Link>
      </div>

      {isOnHomePage && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            to="explore/action/call"
            className="bg-gray-800 rounded-2xl shadow-xl p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src="callofduty.jpg"
              alt="Call of Duty"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-purple-400">Call of Duty</h3>
            <p className="text-sm text-gray-300">
              Call of Duty®: Black Ops 6 provides dynamic gameplay with action-packed moments.
            </p>
            <Link to="/explore/action/call">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full mt-4">
                Learn More
              </button>
            </Link>
          </Link>

          <Link
            to="explore/action/mine"
            className="bg-gray-800 rounded-2xl shadow-xl p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src="minecraft.jpeg"
              alt="Minecraft"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-blue-400">Minecraft</h3>
            <p className="text-sm text-gray-300">
              Build whatever you can imagine in a unique, procedurally generated world.
            </p>
            <Link to="/explore/action/mine">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full mt-4">
                Learn More
              </button>
            </Link>
          </Link>

          <Link
            to="explore/action/among"
            className="bg-gray-800 rounded-2xl shadow-xl p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src="amongus.jpg"
              alt="Among Us"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-green-400">Among Us</h3>
            <p className="text-sm text-gray-300">
              Play with 4-15 players as you try to prepare your spaceship, while avoiding impostors!
            </p>
            <Link to="/explore/action/among">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full mt-4">
                Learn More
              </button>
            </Link>
          </Link>
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default Home;


