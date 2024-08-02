import React from "react";
import { useSeason } from "~/hooks/SeasonContext";

const Summer: React.FC = () => {
  const { currentSeason, nextSeason } = useSeason();
  return (
    <div
      className={`p-8 transition-transform duration-500 ${
        nextSeason === "summer"
          ? currentSeason === nextSeason
            ? "translate-x-0"
            : "-translate-x-full"
          : "-translate-x-full"
      }`}
    >
      <div className="pt-24 font-sans flex justify-center">
        <h1 className="text-7xl font-bold tracking-widest text-green-700">
          Summer
        </h1>
      </div>
    </div>
  );
};
export default Summer;
