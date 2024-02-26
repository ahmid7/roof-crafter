import Image from "next/image";
import React from "react";
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Link from "next/link";
import ContactForm from "./ContactForm";
import { 
  ArrowRight, 
  LineWithStar,
  Logo, 
  RightReservedIcon 
} from "./svgs";


gsap.registerPlugin(ScrollTrigger)
function Footer() {

  const FooterRef = React.useRef(null)

  useGSAP(() => {
    gsap.from('.line-animation', {
      scaleX: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".line-animation",
        start: 'top 95%'
      }
    })
  }, { scope: FooterRef })

  return (
    <section className="overflow-hidden" ref={ FooterRef }>
      <GetInTouch />

      <div className="bg-[#070A0E] pt-7 md:pt-11 lg:pt-[50px] xl:pt-[60px] container-spacing text-white footer-section2" id="Contact">
        <div className="space-y-5 md:space-y-4 xl:space-y-5 font-medium">
          <p className="text-5xl md:text-7xl xl:text-8xl leading-[45px] md:leading-[70px] xl:leading-[85.92px] -tracking-[2.5%]">
            Let's create <br /> magic together{" "}
          </p>

          <button className="gap-x-5 xl:gap-x-6 outline outline-1 hover:outline-none flex items-center  rounded-[32px] px-5 py-4 md:px-8 md:py-5 stroke-[#ffff] hover:stroke-mirage-black form-button group after:bg-white">
            <span className="text-base lg:text-lg xl:text-xl leading-[14px] xl:leading-[17.9px] group-hover:text-mirage-black">
              Send us a message
            </span>

            <ArrowRight />
          </button>
        </div>

        <div className="my-7 md:my-8 lg:my-12 xl:my-[75px] w-full relative">
          <LineWithStar />

          <div className="line-animation absolute top-0 left-0 w-full h-full  scale-x-0 origin-right  bg-[#070a0e]"/>
        </div>

        <div className="space-y-[52px] md:space-y-0 md:between-start">
          <div className="flex flex-row items-start md:gap-x-16 lg:gap-x-[115px] xl:gap-x-[155px]">
            <div className="w-full h-fit  md:w-fit md:h-fit grid place-content-center md:inline-flex ">
              <Logo />
            </div>

            <nav className="hidden md:flex items-start md:gap-x-[60px] lg:gap-x-[85px] xl:gap-x-[110px] font-normal text-base lg:text-xl xl:text-2xl [&_>]:leading-[21.48px] [&_>]:-tracking-[-2.5%]">
              <ul className="flex flex-col gap-y-4 lg:gap-y-5 xl:gap-y-6 footer-links LinkSection1">
                <Link href="#">Our Works</Link>
                <Link href="#">About Us</Link>
                <Link href="#">Service</Link>
                <Link href="#">Resources</Link>
                <Link href="#">Our Team</Link>
              </ul>

              <ul className="flex flex-col gap-y-4 lg:gap-y-5 xl:gap-y-6 footer-links LinkSection2">
                <Link href="#">Linkedin</Link>
                <Link href="#">Instagram</Link>
                <Link href="#">Twitter</Link>
                <Link href="#">YouTube</Link>
              </ul>
            </nav>
          </div>

          <div className="min-w-full md:min-w-[280px] lg:min-w-[350px] xl:min-w-[440px]">
            <ContactForm dark />
          </div>

          <nav className="flex md:hidden items-start gap-x-24 md:gap-x-[85px] xl:gap-x-[110px] font-normal text-base lg:text-xl xl:text-2xl [&_>]:leading-[21.48px] [&_>]:-tracking-[-2.5%]">
            <ul className="flex flex-col gap-y-4 lg:gap-y-5 xl:gap-y-6">
              <Link href="#">Our Works</Link>
              <Link href="#">About Us</Link>
              <Link href="#">Service</Link>
              <Link href="#">Resources</Link>
              <Link href="#">Our Team</Link>
            </ul>

            <ul className="flex flex-col gap-y-4 lg:gap-y-5 xl:gap-y-6">
              <Link href="#">Linkedin</Link>
              <Link href="#">Instagram</Link>
              <Link href="#">Twitter</Link>
              <Link href="#">YouTube</Link>
            </ul>
          </nav>
        </div>

        <div className="between-start pb-5 pt-20 xl:pt-[90px] text-sm md:text-base xl:text-lg">
          <p className="flex space-x-3 items-center">
            <span className=" leading-[21.48px] -tracking-[2.5%] font-normal">
              All right reserved 2023
            </span>

            <RightReservedIcon />
          </p>

          <p className="font-medium leading-6 xl:leading-[27px]">
            <a href="#">Back to Top</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;

const GetInTouch = () => {
  return (
    <div className="space-y-5 md:space-y-7 lg:space-y-8 xl:space-y-10 container-spacing py-10 lg:py-[60px]">
      <h1 className="font-medium text-[44px] md:text-[92px] lg:text-[115px] xl:text-[162px] leading-none -tracking-[2.5%] text-black">
        Get in touch <br />
        <div className="start-center gap-x-1 md:gap-x-3 lg:gap-x-5 xl:gap-x-9 text-nowrap">
          <span>With us</span>
          <div className="w-[70px] h-[55px] md:w-[155px] md:h-[100px] lg:w-[180px] lg:h-[130px] xl:w-[225px] xl:h-[166px] relative">
            <Image
              src="/assets/images/get-in-touch.png"
              alt="get-in-touch-image"
              fill
              priority
              quality={100}
              className="object-cover object-center"
            />
          </div>{" "}
          <span>Today</span>
        </div>
      </h1>

      <div className="grid place-content-end">
        <div className="py-2 lg:py-3 xl:py-4 border-b-2 border-black between gap-x-2 xl:gap-x-3 min-w-[170px] md:min-w-[270px] lg:min-w-[360px] xl:min-w-[440px]">
          <input
            placeholder="Enter your email"
            type="email"
            className="border-none flex-1 outline-none basis-3/4 text-base lg:text-lg font-normal leading-[30px] -tracking-[0.5%] text-[#505050]"
          />

          <span className="w-fit stroke-black">
            <ArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};
