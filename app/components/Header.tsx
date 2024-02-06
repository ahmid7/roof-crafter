import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header className="bg-transparent between container-spacing px-8 xl:px-10 fixed top-0 left-0 w-full py-3 z-10">
      <nav>
        <ul className="between gap-x-4 lg:gap-x-5 xl:gap-x-8 text-mirage-black leading-6 text-sm lg:text-base -tracking-[0.08px] ">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="relative xl:w-[154px] xl:h-[28px] lg:w-[145px] lg:h-[26px] w-[135px] h-[24px]">
        <Image
          alt="company-logo"
          src="/assets/svg/CompanyLogo.svg"
          fill
          className="object-cover"
          priority
          quality={ 100 }
        />
      </div>

      <button className="py-2 px-5 xl:py-3 xl:px-6 leading-6 gap-x-3 text-sm lg:text-base between -tracking-[0.08px] bg-mirage-black text-white rounded-[30px] xl:rounded-[32px]">
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
    </header>
  );
}

export default Header;
