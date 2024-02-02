import React from "react";
import Image from "next/image";
import { LineDownward, LineTop } from "./svgs";

function Services() {
  return (
    <section className="pt-[60px] px-10">
      <div className="">
        <div className="flex gap-x-10 items-start ">
          <h2 className="font-medium text-[50px] leading-[67.2px] -tracking-[1.5%] basis-[45%]">
            Building Trust Through Quality Roofing Services
          </h2>

          <p className="text-lg font-normal leading-[27px] max-w-[596px]">
            At Skycrafters, we have been providing exceptional roofing services
            for over 20 years. Our commitment to quality craftsmanship,
            attention to detail, and customer satisfaction sets us apart from
            the competition. We take pride in our work and strive to exceed our
            clients' expectations with every project.
          </p>
        </div>

        <div className="overflow-hidden mt-[47px]">
          <LineTop />

          <div className="relative  h-[1246px] gap-x-[80px] flex">
            <div className="basis-[36%]" />

            <div className="flex-1 flex gap-x-[111px]">
              <LineDownward />

              <div className="font-normal flex justify-start gap-x-[62px] pt-[30px]">
                <div className="">
                  <h5 className="text-[112px] text-mirage-black leading-[134.4px]">
                    200+
                  </h5>
                  <p className="text-lg leading-[27px] -tracking-[0.5%] font-normal pt-[21px]">
                    Customers served over the years
                  </p>
                </div>

                <div>
                  <h5 className="text-[112px] text-mirage-black leading-[134.4px]">
                    400+
                  </h5>
                  <p className="text-lg leading-[27px] -tracking-[0.5%] font-normal pt-[21px]">
                    Roofs restored and making people so happy
                  </p>
                </div>

                <Image
                  fill
                  alt="roof-image"
                  src="/assets/images/roof.png"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
