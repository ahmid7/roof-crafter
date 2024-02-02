import Image from "next/image";
import React from "react";
import { ArrowRight } from "./svgs";

function Footer() {
  return (
    <div className="py-[60px] px-10">
      <GetInTouch />
    </div>
  )
}

export default Footer;

const GetInTouch = () => {
  return (
    <div className="space-y-10">
      <h1 className="font-medium  text-[162px] leading-none -tracking-[2.5%] text-black">
        Get in touch <br/>
        <div className="flex items-center justify-between">
          With us
          <div className="w-[237px]  h-[166px] relative">
            <Image
              src="/assets/images/get-in-touch.png"
              alt="get-in-touch-image"
              fill
              priority
              quality={100}
              className="object-cover"
            />
          </div>{" "}
          Today
        </div>
      </h1>

      <div className="grid place-content-end">
        <div className="py-4 border-b-2 border-black flex items-center justify-between min-w-[400px]">
          <input
            placeholder="Enter your email"
            type="email"
            className="border-none outline-none basis-3/4 text-lg font-normal leading-[30px] -tracking-[0.5%] text-[#505050]"
          />

          <span className="w-fit">
            <ArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};
