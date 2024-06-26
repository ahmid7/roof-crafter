"use client";

import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { ArrowRight } from "./svgs";

type Input = {
  type: string;
  label: string;
  name: string;
  dark: boolean;
};

type ContactForm = {
  extraInfo?: boolean;
  dark: boolean;
};

const Input: React.FC<Input> = ({ type, label, name, dark }) => {
  return (
    <div
      className={`flex flex-col gap-y-1.5 md:gap-y-1 ${
        dark ? "text-white" : "text-mirage-black"
      }`}
    >
      <label
        className={`-tracking-[2.5%] leading-[14.32px] text-base md:text-sm lg:text-base font-normal ${
          dark ? "" : "text-gray-1"
        }`}
      >
        {label}
      </label>
      <input
        className={`outline-none bg-transparent border-b border-solid  h-[25px] text-base md:text-sm lg:text-base font-normal ${
          dark ? "" : "border-mirage-black"
        }`}
        type={type}
        name={name}
      />
    </div>
  );
};

function ContactForm({ extraInfo, dark }: ContactForm) {
  const ContactFormRef = React.useRef(null);

  useGSAP(() => {}, { scope: ContactFormRef });

  return (
    <section
      className="space-y-9 md:space-y-6 lg:space-y-8 xl:space-y-10"
      ref={ContactFormRef}
    >
      <Input type="text" name="FullName" label="Full Name" dark={dark} />

      <Input type="text" name="Email" label="Email address" dark={dark} />

      <div>
        <Input
          type="text"
          name="help"
          label="How can we help you ?"
          dark={dark}
        />

        {extraInfo && (
          <span className="text-xs font-normal leading-3 lg:leading-[18px] text-mirage-black">
            We will promise to not share your email to anyone else
          </span>
        )}
      </div>

      <button
        className={`between gap-x-4 xl:gap-x-6 py-4 px-6 xl:py-5 xl:px-8 group hover:outline-0 outline outline-1 rounded-[32px] form-button ${
          dark
            ? "outline-white after:bg-white"
            : "outline-mirage-black after:bg-mirage-black "
        }`}
      >
        <span
          className={`font-medium  text-xl md:text-sm lg:text-base xl:text-xl leading-[17.9px] ${
            dark ? "group-hover:text-mirage-black" : "group-hover:text-white"
          }`}
        >
          Get a free inspection
        </span>

        <span
          className={`${
            dark
              ? "stroke-white group-hover:stroke-black"
              : "stroke-black group-hover:stroke-white"
          }`}
        >
          <ArrowRight />
        </span>
      </button>
    </section>
  );
}

export default ContactForm;
