import { useLocation, useNavigate } from "@remix-run/react";
import { createContext, useContext, useEffect, useState } from "react";

type SeasonContextType = {
  currentSeason: "summer" | "winter";
  setCurrentSeason: React.Dispatch<React.SetStateAction<"summer" | "winter">>;
  nextSeason: "summer" | "winter";
  setNextSeason: React.Dispatch<React.SetStateAction<"summer" | "winter">>;
  handleNavigation: (season: "summer" | "winter") => void;
};

const SeasonContext = createContext<SeasonContextType>({
  currentSeason: "summer",
  setCurrentSeason: () => {},
  nextSeason: "summer",
  setNextSeason: () => {},
  handleNavigation: () => {},
});

export const useSeason = () => {
  return useContext(SeasonContext);
};

export const SeasonProvider = ({ children }: { children: JSX.Element }) => {
  const value = useSeasonStore();
  return (
    <SeasonContext.Provider value={value}>{children}</SeasonContext.Provider>
  );
};

const useSeasonStore = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentSeason, setCurrentSeason] = useState<"summer" | "winter">(
    location.pathname.includes("work/summer") ? "summer" : "winter"
  );
  const [nextSeason, setNextSeason] = useState<"summer" | "winter">(
    location.pathname.includes("work/summer") ? "summer" : "winter"
  );

  useEffect(() => {
    if (location.pathname === "/work") {
      setCurrentSeason("summer");
      setNextSeason("summer");
      navigate("work/summer");
    }
  }, [location.pathname, navigate]);

  const handleNavigation = (season: "summer" | "winter") => {
    console.log("DOES THIS TRIGGER?");
    setNextSeason(season);
    setTimeout(() => {
      setCurrentSeason(season);
    }, 300);
    setTimeout(() => {
      navigate(`/work/${season}`);
    }, 200);
  };

  return {
    currentSeason,
    setCurrentSeason,
    nextSeason,
    setNextSeason,
    handleNavigation,
  };
};
