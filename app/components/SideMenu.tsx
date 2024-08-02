import React from "react";

interface Props {
  isMenuOpen: boolean;
}

const SideMenu: React.FC<Props> = ({ isMenuOpen }) => {
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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/work/summer">Summer</a>
            </li>
            <li>
              <a href="/work/winter">Winter</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
