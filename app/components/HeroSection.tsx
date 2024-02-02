import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="flex font-neue">
      <div className="space-y-6 pt-[114px] basis-1/2 pl-10">
        <h2 className="text-[56px] text-black font-bold -tracking-[1.5%] leading-[120%] pr-[87px]">
          Trusted Roofing Services for Your Home
        </h2>

        <p className="text-xl leading-[30px] -tracking-[0.5%] font-normal pr-[87px]">
          Protect your home with our reliable and professional roofing services.
          We offer roof repair, replacement, installation, emergency roofing,
          and more.
        </p>

        <div className="pr-[87px]">
          <ContactForm extraInfo />
        </div>

        <div className="pr-8">
          <div className="flex items-center justify-between">
            <p className=" text-xl leading-8 -tracking-[1.5%]">
              These brands trust us
            </p>

            <div className="flex items-center">
              <div className="relative w-[140px] h-[56px]">
                <Image
                  className="w-fit h-fit"
                  fill
                  alt="webflow"
                  priority
                  quality={100}
                  src="/assets/images/webflow.png"
                />
              </div>

              <div className="relative w-[140px] h-[56px]">
                <Image
                  alt="relume"
                  className="w-fit h-fit"
                  priority
                  quality={100}
                  src="/assets/images/relume.png"
                  fill
                />
              </div>
            </div>
          </div>

          <div className="mt-[39px] ">
            <span className="text-lg font-medium text-mirage-black">
              Scroll Down{" "}
            </span>
          </div>
        </div>
      </div>

      <div className="basis-1/2 h-[925px]">
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
            <div className="space-y-12 text-white ">
              <div>
                <h5 className="text-2xl font-bold leading-[33.6px] -tracking-[1.5%]">heading</h5>
                <p className="text-base leading-6 -tracking-[0.5%]">todo</p>
              </div>

              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
