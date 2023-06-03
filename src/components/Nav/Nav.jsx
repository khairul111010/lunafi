import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black/[.7] px-8 py-8 flex items-center justify-between">
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
