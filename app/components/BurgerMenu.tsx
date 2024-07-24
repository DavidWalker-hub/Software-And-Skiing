import React from "react";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu: React.FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
  const genericHamburgerLine = `h-1 w-6 my-0.5 rounded-full bg-slate-600 transition ease transform duration-300`;

  return (
    <>
      <button
        className="h-12 w-12 rounded flex flex-col justify-center items-center group text-slate-600 relative z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${isMenuOpen ? "opacity-0" : ""}`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>
    </>
  );
};

export default BurgerMenu;
