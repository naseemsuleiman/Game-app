import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Racing() {
  const location = useLocation();
  const isOnActionPage = location.pathname === "/explore/racing";

  return (
    <div className="p-6 md:p-12 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
      <h4 className="text-1xl md:text-3xl font-extrabold mb-4 text-center">
        Racing
      </h4>
      {isOnActionPage && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            to="asphat"
            className="bg-gray-800 rounded-2xl shadow-xl p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src="/asphat.jpg"
              alt="Action"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-purple-400">
              Asphalt 8: Airborne
            </h3>
            <p className="text-sm text-gray-300">
              LEAVE GRAVITY IN THE DUST! • 300+ OFFICIAL SPEED MACHINES:
              Ferrari, Ducati, Lamborghini, McLaren, Bugatti, Mercedes, Audi,
              Ford, Chevrolet… From bikes to cars, we got ‘em all! • STUNNING
              GRAPHICS: Interactions between the vehicles, environments & tracks
              are fully physics-based!
            </p>
          </Link>

          <Link
            to="nitro"
            className="bg-gray-800 rounded-2xl shadow-xl p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src="/nitro.png"
              alt="English"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-blue-400">
              Nitro Nation Drag & Drift
            </h3>
            <p className="text-sm text-gray-300">
              Race, mod, and tune dozens of real licensed cars. Start a team,
              invite your friends, win tournaments. Trade car parts with other
              racers in real time and build your dream car for both Drag and
              Drift races! LOTS OF CARS - Supercars and Exotics? Check. Tuners
              and Street racers? Check. Classic and Modern muscle? You bet! .
            </p>
          </Link>

          <Link
            to="city"
            className="bg-gray-800 rounded-2xl shadow-xl p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src="/city.jpg"
              alt="Science"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-green-400">
              City Racing2
            </h3>
            <p className="text-sm text-gray-300">
              City Racing 2 is a fun real racing game with top 3D graphics and
              high quality, giving you the ultimate visual enjoyment. It gathers
              more than 50 top classic cars, also designs a brand new challenge
              for you! You can customize to create a car that reflects your
              personal style, plunge into a thrilling speed race, use your
              superb driving skills to conquer rivals, win epic races, and
              create your own ace car club to become a legend of the track!
            </p>
          </Link>
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default Racing;
