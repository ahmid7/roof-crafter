import Image from "next/image";
import React from "react";
import { ArrowRight, LineWithStar, Logo, RightReservedIcon } from "./svgs";
import Link from "next/link";
import ContactForm from "./ContactForm";

function Footer() {
  return (
    <section className="overflow-hidden">
      <GetInTouch />

      <div className="bg-[#070A0E] pt-[60px] px-10 text-white">
        <div className="space-y-5 font-medium">
          <p className="text-8xl leading-[85.92px] -tracking-[2.5%]">
            Let's create <br /> magic together{" "}
          </p>

          <button className="gap-x-6 border border-solid border-white flex items-center  rounded-[32px] px-8 py-5 stroke-[#ffff]">
            <span className="text-xl leading-[17.9px]">Send us a message</span>
            <ArrowRight />
          </button>
        </div>

        <div className="py-[75px] ">
          <LineWithStar />
        </div>

        <div className="flex items-start justify-between ">
          <div className="flex items-start gap-x-[173px]">
            <div className="w-fit h-fit ">
              <Logo />
            </div>

            <nav className="flex items-start gap-x-[120px] font-normal text-2xl [&_>]:leading-[21.48px] [&_>]:-tracking-[-2.5%]">
              <ul className="flex flex-col gap-y-7">
                <Link href="#">Our Works</Link>
                <Link href="#">About Us</Link>
                <Link href="#">Service</Link>
                <Link href="#">Resources</Link>
                <Link href="#">Our Team</Link>
              </ul>

              <ul className="flex flex-col gap-y-7">
                <Link href="#">Linkedin</Link>
                <Link href="#">Instagram</Link>
                <Link href="#">Twitter</Link>
                <Link href="#">YouTube</Link>
              </ul>
            </nav>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>

        <div className="flex justify-between items-center pb-5 pt-[90px]">
          <p className="flex space-x-3 items-center">
            <span className="text-lg leading-[21.48px] -tracking-[2.5%] font-normal">
              All right reserved 2023
            </span>

            <RightReservedIcon />
          </p>

          <p className="font-medium text-lg leading-[27px]">Back to Top</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;

const GetInTouch = () => {
  return (
    <div className="space-y-10 px-10 py-[60px]">
      <h1 className="font-medium  text-[162px] leading-none -tracking-[2.5%] text-black">
        Get in touch <br />
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

          <span className="w-fit stroke-black">
            <ArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};
