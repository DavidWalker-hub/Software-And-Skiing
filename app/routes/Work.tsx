import React from "react";
import { Outlet } from "@remix-run/react";
import { useSeason } from "~/hooks/SeasonContext";

const Work: React.FC = () => {
  const { nextSeason, handleNavigation } = useSeason();

  return (
    <div className="pt-24 font-sans">
      <div className="flex justify-center mb-8">
        <div className="relative flex items-center text-gray-500">
          <button
            className={`px-6 py-2 text-2xl font-bold transition-all`}
            onClick={() => handleNavigation("summer")}
          >
            Summer
          </button>
          <button
            className={`px-8 py-2 text-2xl font-bold transition-all`}
            onClick={() => handleNavigation("winter")}
          >
            Winter
          </button>
          <div
            className={`absolute bottom-0 h-0.5 bg-slate-900 transition-all duration-300
               ${nextSeason === "summer" ? "left-0 w-1/2" : "left-1/2 w-1/2"}`}
          />
        </div>
      </div>
      {/* <div className="overflow-hidden">
        <div
          className={`transform transition-transform duration-500 ${
            isSummer ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div
            className={`flex-shrink-0 w-full transition-opacity duration-500 ${
              isSummer ? "opacity-100" : "opacity-0"
            }`}
          >
            <Summer />
          </div>
        </div>
        <div
          className={`transform transition-transform duration-500 ${
            !isSummer ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div
            className={`flex-shrink-0 w-full transition-opacity duration-500 ${
              !isSummer ? "opacity-100" : "opacity-0"
            }`}
          >
            <Winter />
          </div>
        </div>
      </div> */}

      {/* set animation in the component with a delay. use effect on location.pathname and if it includes summer then set timeout off screen to on screen */}

      <div className="relative overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Work;
