import React from "react";
import Image from "next/image";
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./Header";
import ContactForm from "./ContactForm";
import { ButtonLeft, ButtonRight } from "./svgs";

function HeroSection() {

  const HeroSectionRef = React.useRef(null)

  useGSAP(() => {
    gsap.from(".left-section", {
      opacity: 0.1,
      yPercent: 6,
      duration: 1.5,
    })
  }, { scope: HeroSectionRef })

  return (
    <section className="flex flex-col md:flex-row h-full" ref={HeroSectionRef}>
      <Header />
      <div className="space-y-11 xl:space-y-[60px] pt-24 xl:pt-[114px] basis-1/2 container-spacing left-section" >
        <div className="space-y-5 xl:space-y-6 pr-0 lg:pr-16 xl:pr-[87px]">
          <h2 className="header-style1">
            Trusted Roofing Services for Your Home
          </h2>

          <p className="paragraph-style1">
            Protect your home with our reliable and professional roofing
            services. We offer roof repair, replacement, installation, emergency
            roofing, and more.
          </p>

          <div className="hidden md:block">
            <ContactForm extraInfo dark={false} />
          </div>
        </div>

        <div className="lg:pr-8 hidden md:block">
          <div className="between">
            <p className="text-sm lg:text-base xl:text-xl leading-7 xl:leading-8 -tracking-[1.5%]">
              These brands trust us
            </p>

            <div className="start-center [&_div]:relative [&_div]:w-[90px] [&_div]:h-[32px] [&_div]:lg:w-[110px] [&_div]:lg:h-[42px] [&_div]:xl:w-[140px] [&_div]:xl:h-[56px]">
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

          <div className=" mt-5 lg:mt-7 pb-4 xl:mt-[39px]">
            <span className="text-sm lg:text-base xl:text-lg font-medium">
              Scroll Down{" "}
            </span>
          </div>
        </div>
      </div>

      <div className="pt-6 px-5 md:pt-0 md:px-0 md:basis-1/2  md:h-inherit">
        <div className="relative w-full h-[469.88px] md:h-full">
          <Image
            priority
            src="/assets/images/roofing.webp"
            layout="fill"
            quality={100}
            className="w-full h-full"
            alt="roofing-image"
          />

          <div className="absolute bottom-0 left-0 py-8 md:py-8 px-4 md:px-10 bg-[#1017204D]  w-full blur-[30%]">
            <div className="space-y-9 xl:space-y-12 text-white ">
              <div>
                <h5 className="text-2xl font-bold leading-[33.6px] -tracking-[1.5%]">
                  heading
                </h5>
                <p className="text-base leading-6 -tracking-[0.5%]">todo</p>
              </div>

              <div className="hidden md:between">
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

      <div className="px-5 md:hidden">
        <div className=" py-10 grid place-content-center">
          <div className="[&_span]:w-3 [&_span]:h-3 [&_span]:rounded-full [&_span]:bg-[#E0E0E0] flex gap-x-2">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ContactForm dark={false} extraInfo />
      </div>
    </section>
  );
}

export default HeroSection;
