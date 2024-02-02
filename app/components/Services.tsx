import React from "react";
import Image from "next/image";
import { LineDownward, LineTop } from "./svgs";

function Services() {
  return (
    <section className="px-8 xl:px-10">
      <div className="">
        <div className="flex gap-x-8 xl:gap-x-10 items-start">
          <h2 className="font-medium text-4xl xl:text-[50px] leading-[50px] xl:leading-[67.2px] -tracking-[1.5%] basis-[45%]">
            Building Trust Through Quality Roofing Services
          </h2>

          <p className="paragraph-style2 max-w-[500px] xl:max-w-[596px]">
            At Skycrafters, we have been providing exceptional roofing services
            for over 20 years. Our commitment to quality craftsmanship,
            attention to detail, and customer satisfaction sets us apart from
            the competition. We take pride in our work and strive to exceed our
            clients' expectations with every project.
          </p>
        </div>

        <div className="overflow-hidden mt-9 xl:mt-[47px]">
          <LineTop />

          <div className="relative h-[850px] xl:h-[1246px] gap-x-[50px] xl:gap-x-[80px] flex">
            <div className="basis-[65%] xl:basis-[36%]" />

            <div className=" flex gap-x-16 xl:gap-x-[111px]">
              <LineDownward />

              <div className="start font-normal gap-x-12 xl:gap-x-[62px] pt-6 xl:pt-[30px]">
                <div>
                  <h5 className="text-8xl xl:text-[112px] leading-[100px]  xl:leading-[134.4px]">
                    200+
                  </h5>
                  <p className="paragraph-style2 -tracking-[0.5%] pt-2 xl:pt-[21px]">
                    Customers served over the years
                  </p>
                </div>

                <div>
                  <h5 className="text-8xl xl:text-[112px] leading-[100px] xl:leading-[134.4px]">
                    400+
                  </h5>
                  <p className="-tracking-[0.5%] paragraph-style2 pt-2 xl:pt-[21px]">
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
