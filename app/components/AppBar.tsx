import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import SideMenu from "./SideMenu";
import { Link } from "@remix-run/react";

const AppBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 shadow z-10">
      <div className="flex flex-wrap justify-between items-center mx-auto px-3">
        <Link
          to="/"
          prefetch="render"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <h2 className="self-center text-2xl font-semibold whitespace-nowrap text-slate-900">
            WalkerSAS
          </h2>
        </Link>
        <div>
          <BurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </div>
      <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </nav>
  );
};

export default AppBar;
