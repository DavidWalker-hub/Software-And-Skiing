import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import SideMenu from "./SideMenu";

const AppBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="bg-white fixed top-0 left-0 right-0 shadow">
        <div className="flex flex-wrap justify-between items-center mx-auto px-3">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <h1 className="self-center text-2xl font-semibold whitespace-nowrap text-slate-900">
              <a href="/">WalkerSAS</a>
            </h1>
          </a>
          <div className="items-center justify-between space-x-6 hidden md:flex">
            <a
              href="/summer"
              className="text-lg  text-slate-600  hover:underline"
            >
              Summer
            </a>
            <hr className="h-1 w-8 rotate-90" />
            <a
              href="/winter"
              className="text-lg  text-slate-600  hover:underline"
            >
              Winter
            </a>
          </div>
          <div>
            {/* <button className="text-4xl  text-slate-600 ">&#9776;</button> */}
            <BurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>
        </div>
        <SideMenu isMenuOpen={isMenuOpen} />
      </nav>
      {/* <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="/"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default AppBar;
