import React from "react";
import { ArrowRight } from "./svgs";

type Input = {
  type: string;
  label: string;
  name: string;
  labelStyle: string;
  inputStyle: string;
};

type ContactForm = {
  extraInfo?: boolean;
  dark?: boolean
};

const Input: React.FC<Input> = ({
  type,
  label,
  name,
  labelStyle,
  inputStyle,
}) => {
  return (
    <div className="flex flex-col">
      <label
        className={`-tracking-[2.5%] leading-[14.32px] text-base font-normal ${labelStyle}`}
      >
        {label}
      </label>
      {/* text-[#333333]  */}
      <input
        className={`outline-none focus:border-b border-b border-solid  focus:outline-none h-[25px] text-base font-normal ${inputStyle}`}
        type={type}
        name={name}
      />
      {/* border-[#101720] */}
    </div>
  );
};

function ContactForm({ extraInfo, dark }: ContactForm) {
  return (
    <section className="space-y-10">
      <Input
        type="text"
        name="FullName"
        label="Full Name"
        inputStyle={`${dark ? "" : "text-[#333333]"}`}
        labelStyle={`${dark ? "" : "border-[#101720]"}`}
        
      />

      <Input
        type="text"
        name="Email"
        label="Email address"
        inputStyle={`${dark ? "" : "text-[#333333]"}`}
        labelStyle={`${dark ? "" : "border-[#101720]"}`}
      />

      <div>
        <Input
          type="text"
          name="help"
          label="How can we help you ?"
          inputStyle={`${dark ? "" : "text-[#333333]"}`}
          labelStyle={`${dark ? "" : "border-[#101720]"}`}
        />

        {extraInfo && (
          <span className="text-xs font-normal leading-[18px] text-mirage-black">
            We will promise to not share your email to anyone else
          </span>
        )}
      </div>

      <button className="flex items-center gap-x-6 py-5 px-8 outline outline-1 outline-mirage-black rounded-[32px]">
        <span className="font-medium text-xl leading-[17.9px] text-mirage-black">
          Get a free inspection
        </span>

        <span className="">
          <ArrowRight />
        </span>
      </button>
    </section>
  );
}

export default ContactForm;
