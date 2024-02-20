"use client"

import React from "react";
import Image from "next/image";
import gsap from "gsap"

import { Hamburger } from "./svgs";

function Header() {

  return (
    <header className="bg-transparent between container-spacing px-8 xl:px-10 fixed top-0 left-0 w-full py-5 md:py-3 z-10 header-container" ref={Header}>
      <nav className="hidden md:inline-block">
        <ul className="between gap-x-4 lg:gap-x-5 xl:gap-x-8 text-mirage-black leading-6 text-sm lg:text-base -tracking-[0.08px] ">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="relative xl:w-[154px] xl:h-[28px] lg:w-[145px] lg:h-[26px]  md:w-[135px] md:h-[24px] w-[154px] h-[25.9px]">
        <Image
          alt="company-logo"
          src="/assets/svg/CompanyLogo.svg"
          fill
          className="object-cover"
          priority
          quality={ 100 }
        />
      </div>

      <button className=" py-2 px-5 xl:py-3 xl:px-6 leading-6 gap-x-3 text-sm lg:text-base hidden md:between -tracking-[0.08px] bg-mirage-black text-white rounded-[30px] xl:rounded-[32px]">
        <span className="">Schedule a Call</span>
        <div className="relative w-4 h-4 lg:w-6 lg:h-6">
          <Image
            src="/assets/svg/Phone.svg"
            className="object-cover"
            alt="phone-icon"
            fill
            priority
            quality={100}
          />
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
