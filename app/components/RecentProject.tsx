import React from "react";
import Image from "next/image";
import CurrentProject from "./CurrentProject";

type CardProps = {
  title: string;
  paragraph: string;
  imageSrc: string;
};

const services = [
  {
    title: "Expert roof services",
    paragraph:
      "We offer a comprehensive range of roofing services, including roof repair, roof replacement, new roof installation, emergency roofing, roof inspection, and storm damage repair. Our team of experienced professionals is dedicated to providing high-quality workmanship and exceptional customer service.",
    imageSrc: "/assets/images/roof1.png",
  },
  {
    title: "Quality roof repairs",
    paragraph:
      "Our roof repair services are designed to address any issues with your roof, from leaks and missing shingles to damaged flashing and more. We use top-quality materials and proven techniques to ensure long-lasting repairs that protect your home from further damage.",
    imageSrc: "/assets/images/roof2.png",
  },
  {
    title: "Professional Roof Replacement",
    paragraph:
      "When it's time for a new roof, trust our team to handle the job with professionalism and expertise. We offer a wide selection of roofing materials to suit your style and budget, and our skilled installers will ensure a flawless installation that enhances the beauty and value of your home.",
    imageSrc: "/assets/images/roof3.png",
  },
];

const Card = ({ title, paragraph, imageSrc }: CardProps) => (
  <div className="w-full h-[450px] xl:h-[625px] relative">
    <Image alt={`${title}-image`} src={imageSrc} fill quality={100} priority />

    <div className="absolute bottom-0 left-0 w-full px-10">
      <h4 className="max-w-[560px] font-medium text-white text-[40px] leading-[48px] capitalize -tracking-[1.5%]">
        {title}
      </h4>
      <p className="max-w-[753px] font-normal text-white text-base leading-6">
        {paragraph}
      </p>
    </div>
  </div>
);

function RecentProject() {
  return (
    <section className="pb-10 xl:pb-12 px-8 xl:px-10">
      <div className="text-center">
        <h2 className="capitalize header-style2">
          recent roofing projects
        </h2>
        <p className="paragraph-style1 pt-3 xl:pt-5 pb-10 xl:pb-12">
          Take a look at our recent roofing projects
        </p>
      </div>

      <div className="grid grid-cols-2 gap-y-10 xl:gap-y-12 gap-x-8 xl:gap-x-10">
        {services.map((service, index) => (
          <div key={ service.title + index } className ={`${ index == 0 ? 'col-span-2 border-2 border-solid border-green-900' : 'border-2 border-solid border-red-900' }`}>
            <Card
              title={service.title}
              paragraph={service.paragraph}
              imageSrc={service.imageSrc}
            />
          </div>
        ))}
      </div>

      <CurrentProject />
    </section>
  );
}

export default RecentProject;
