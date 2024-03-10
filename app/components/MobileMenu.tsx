import React from 'react'
import { Logo } from "./svgs/"

function MobileMenu() {
  return (
    <div className="menu-overlay backdrop-blur-[8px] hidden md:hidden fixed z-50 -top-10 right-0 h-full w-full ">
        <nav className="menu-inner top-0  m-3 p-5 bg-[#070A0E] space-y-7 w-4/5 rounded-2xl relative ">
          <div className="between">
            <div className="w-32 h-7">
              <Logo />
            </div>

            <button className="text-sm text-white border-white border border-solid py-1 px-4 rounded-[24px] menu-close form-button hover:text-mirage-black after:bg-white">
              Close
            </button>
          </div>

          <ul className="gap-x-4 space-y-7 text-white nav-list-wrapper mobile-nav-list leading-6 text-xl -tracking-[0.08px] [&_li]:text-center [&_li]:py-1">
            <li >
              <a  href="#">Home</a>
            </li>
            
            <li>
              <a href="#About">About</a>
            </li>

            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>

          <div>
            <div className="w-full h-[1px] bg-gray-1"/>

            <span className="text-sm text-white">
              All right reserved 2023
            </span>
          </div>
        </nav>
      </div>
  )
}

export default MobileMenu