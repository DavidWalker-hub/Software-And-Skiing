import { Link } from "@remix-run/react";
import React from "react";
import { useSeason } from "~/hooks/SeasonContext";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideMenu: React.FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { handleLinkNavigation } = useSeason();

  const handleSideMenuNavigation = (season?: "summer" | "winter") => {
    setIsMenuOpen(false);
    handleLinkNavigation(season);
  };

  return (
    <>
      <div
        className={`w-screen sm:w-64 h-screen shadow p-4  fixed top-0 right-0 z-30 bg-white transition ease transform duration-300 ${
          isMenuOpen ? "" : "translate-x-full"
        } `}
      >
        <div className="mt-10 flex flex-wrap justify-between items-center mx-auto">
          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                onClick={() => handleSideMenuNavigation()}
                prefetch="render"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/work/summer"
                onClick={() => handleSideMenuNavigation("summer")}
              >
                Summer
              </Link>
            </li>
            <li>
              <Link
                to="/work/winter"
                onClick={() => handleSideMenuNavigation("winter")}
              >
                Winter
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => handleSideMenuNavigation()}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
