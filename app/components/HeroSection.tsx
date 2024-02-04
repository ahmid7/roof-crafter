import React from "react";
import Image from "next/image";

import Header from "./Header";
import ContactForm from "./ContactForm";
import { ButtonLeft, ButtonRight } from "./svgs";

function HeroSection() {
  return (
    <section className="flex">
      <Header />
      <div className="space-y-11 xl:space-y-[60px] pt-24 xl:pt-[114px] basis-1/2 pl-8 xl:pl-10">
        <div className="space-y-5 xl:space-y-6 pr-16 xl:pr-[87px]">
          <h2 className="header-style1">
            Trusted Roofing Services for Your Home
          </h2>

          <p className="paragraph-style1">
            Protect your home with our reliable and professional roofing
            services. We offer roof repair, replacement, installation, emergency
            roofing, and more.
          </p>

          <ContactForm extraInfo  dark={ false }/>
        </div>

        <div className="pr-8">
          <div className="between">
            <p className="text-base xl:text-xl leading-7 xl:leading-8 -tracking-[1.5%]">
              These brands trust us
            </p>

            <div className="start-center [&_div]:relative [&_div]:w-[110px] [&_div]:h-[42px] [&_div]:xl:w-[140px] [&_div]:xl:h-[56px]">
              <div className="relative">
                <Image
                  className="object-cover"
                  fill
                  alt="webflow"
                  priority
                  quality={100}
                  src="/assets/images/webflow.png"
                />
              </div>

              <div className="">
                <Image
                  alt="relume"
                  className="object-cover"
                  priority
                  quality={100}
                  src="/assets/images/relume.png"
                  fill
                />
              </div>
            </div>
          </div>

          <div className="mt-7 pb-4 xl:mt-[39px]">
            <span className="text-base xl:text-lg font-medium">
              Scroll Down{" "}
            </span>
          </div>
        </div>
      </div>

      <div className="basis-1/2 h-inherit">
        <div className="relative w-full h-full">
          <Image
            priority
            src="/assets/images/roofing.webp"
            layout="fill"
            quality={100}
            className="w-full h-full object-cover"
            alt="roofing-image"
          />

          <div className="absolute bottom-0 left-0 py-8 px-10 bg-[#1017204D]  w-full blur-[30%]">
            <div className="space-y-9 xl:space-y-12 text-white ">
              <div>
                <h5 className="text-2xl font-bold leading-[33.6px] -tracking-[1.5%]">
                  heading
                </h5>
                <p className="text-base leading-6 -tracking-[0.5%]">todo</p>
              </div>

              <div className="between">
                <div className="[&_span]:w-2 [&_span]:h-2 [&_span]:rounded-full [&_span]:bg-[#E0E0E0] flex gap-x-2">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="gap-x-[15px] flex items-center text-white">
                  <ButtonLeft />

                  <ButtonRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
