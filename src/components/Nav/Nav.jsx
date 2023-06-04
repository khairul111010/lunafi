import React, { useEffect, useState } from "react";
import "./Nav.css";
const Nav = ({ navheight, setNavheight }) => {
  const handleNavbar = () => {
    window.scrollY > 10 ? setNavheight("py-2") : setNavheight("py-8");
  };
  useEffect(() => {
    window.addEventListener("scroll", handleNavbar);
    return () => {
      window.removeEventListener("scroll", handleNavbar);
    };
  }, []);

  return (
    <div
      className={`z-50 fixed top-0 left-0 w-full bg-black px-8 ${navheight} flex items-center justify-between transition-all ease-in-out duration-700`}
    >
      <div className="cursor-pointer">
        <div>
          <h1 className="text-white font-bold text-lg">Benefit</h1>
        </div>
      </div>
      <div className="items-center gap-20 hidden lg:flex">
        <div className=" items-center gap-20 p-3 flex">
          <div className="text-white cursor-pointer nav">Twitter</div>
          <div className="text-white cursor-pointer nav">Discord</div>
          <div className="text-white cursor-pointer nav">Telegram</div>
          <div className="text-white cursor-pointer nav">LinkedIn</div>
          <div className="text-white cursor-pointer nav">Docs</div>
        </div>
        <div className="text-white cursor-pointer">
          <button className="coolBtn">
            <span className="uppercase">View WhitePaper</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
