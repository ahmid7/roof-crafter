import React from "react";
import Image from "next/image";
import { ArrowRight } from "./svgs";

type Input = {
  type: string;
  label: string;
  name: string;
};

const Input: React.FC<Input> = ({ type, label, name }) => {
  return (
    <div className="flex flex-col">
      <label className="-tracking-[2.5%] leading-[14.32px] text-[#333333] text-base font-normal">{label}</label>

      <input className="outline-none focus:border-b border-b border-solid border-[#101720] focus:outline-none h-[25px] text-base font-normal" type={type} name={name} />
    </div>
  );
};

function ContactForm({ extraInfo }: { extraInfo?: boolean }) {
  return (
    <section className="space-y-10">
      <Input type="text" name="FullName" label="Full Name" />

      <Input type="text" name="Email" label="Email address" />

      <div>
        <Input 
          type="text"
          name="help"
          label="How can we help you ?"
        />

        {extraInfo && (
          <span className="text-xs font-normal leading-[18px] text-mirage-black">We will promise to not share your email to anyone else</span>
        )}
      </div>

      <button className="flex items-center gap-x-6 py-5 px-8 outline outline-1 outline-mirage-black rounded-[32px]">
        <span className="font-medium text-xl leading-[17.9px] text-mirage-black">Get a free inspection</span>

        <span>
          <ArrowRight />
        </span>
      </button>
    </section>
  );
}

export default ContactForm;
