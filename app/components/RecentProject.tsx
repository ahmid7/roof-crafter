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
    imageSrc: "/assets/images/roof1.jpg",
  },
  {
    title: "Quality roof repairs",
    paragraph:
      "Our roof repair services are designed to address any issues with your roof, from leaks and missing shingles to damaged flashing and more. We use top-quality materials and proven techniques to ensure long-lasting repairs that protect your home from further damage.",
    imageSrc: "/assets/images/roof2.jpg",
  },
  {
    title: "Professional Roof Replacement",
    paragraph:
      "When it's time for a new roof, trust our team to handle the job with professionalism and expertise. We offer a wide selection of roofing materials to suit your style and budget, and our skilled installers will ensure a flawless installation that enhances the beauty and value of your home.",
    imageSrc: "/assets/images/roof3.jpg",
  },
];

const Card = ({ title, paragraph, imageSrc }: CardProps) => (
  <div className="w-full h-[470px] md:h-[450px] xl:h-[625px] relative border-2 border-solid border-red-900">
    
    <div className="absolute top-0 left-0 w-full h-full overlay-gradient bg-transparent"/>

    <Image 
      alt={`${title}-image`} 
      className="object-center overlay-gradient"
      src={imageSrc} 
      fill 
      quality={100} 
      priority 
    />

    <div className="absolute bottom-5 left-0 w-full px-4 md:px-5 lg:px-8 xl:px-10 space-y-3 xl:space-y-6">
      <h4 className="md:max-w-[300px] lg:max-w-[560px] header-style2 text-white capitalize ">
        {title}
      </h4>
      <p className=" lg:max-w-[753px] font-normal text-white text-base  md:text-sm lg:text-base leading-6 md:leading-5 lg:leading-6">
        {paragraph}
      </p>
    </div>
  </div>
);

function RecentProject() {
  return (
    <section className="pb-10 md:pb-8 lg:pb-10 xl:pb-12 container-spacing">
      <div className="text-center">
        <h2 className="capitalize header-style2">
          recent roofing projects
        </h2>
        <p className="paragraph-style1 pt-3 xl:pt-5 pb-10 xl:pb-12">
          Take a look at our recent roofing projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 lg:gap-y-10 xl:gap-y-12 gap-x-6 lg:gap-x-8 xl:gap-x-10">
        {services.map((service, index) => (
          <div key={ service.title + index } className ={`${ index == 0 ? 'md:col-span-2' : '' }`}>
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
