"use client"

import React from "react";

import { Hamburger, CompanyLogo, PhoneIcon } from "./svgs";

function Header() {

  return (
    <header className="bg-transparent between container-spacing px-8 xl:px-10 fixed top-0 left-0 w-full py-5 md:py-3 z-50 header-container" ref={Header}>
      <nav className="hidden md:inline-block">
        <ul className="between  gap-x-4 lg:gap-x-5 xl:gap-x-8 text-mirage-black nav-list-wrapper leading-6 text-sm lg:text-base -tracking-[0.08px] ">
          <li>
            <a href="#">Home</a>
          </li>
          
          <li>
            <a href="#About">About</a>
          </li>

          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="relative xl:w-[154px] xl:h-[28px] lg:w-[145px] lg:h-[26px]  md:w-[135px] md:h-[24px] w-[154px] h-[25.9px]">
        <CompanyLogo />
      </div>

      <button className=" py-2 px-5 xl:py-3 xl:px-6 leading-6 gap-x-3 text-sm lg:text-base hidden md:between -tracking-[0.08px] bg-mirage-black text-white rounded-[30px] xl:rounded-[32px] stroke-[#ffff] hover:stroke-mirage-black form-button group after:bg-white ">
        <span className="group-hover:text-mirage-black">Schedule a Call</span>
        <div className="relative w-4 h-4 lg:w-6 lg:h-6 group-hover:fill-mirage-black fill-white">
          <PhoneIcon />
        </div>
      </button>

      <button className="start-center md:hidden gap-x-2 uppercase font-medium leading-[19.2px] text-base text-[#121212]">
        <Hamburger />

        <span>menu</span>
      </button>
    </header>
  );
}

export default Header;
