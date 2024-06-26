import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, FreeMode, } from 'swiper/modules';

import { Stars, ButtonLeft, ButtonRight } from "./svgs";

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

type ReviewProps = {
  paragraph: string;
  name: string;
  titleHeld: string;
  imageSrc: string;
};

const ReviewsData = [
  {
    paragraph:
      '"As a long-time customer of Skycrafter Co., I can confidently say that their roof repair and restoration services are top-notch. They have been in business for 10 years and consistently provide the best quality work."',
    name: "John Smith",
    title: "Homeowner, ABC Construction",
    imageSrc: "/assets/images/AvatarImage.png",
  },
  {
    paragraph:
      '"I was hesitant to trust anyone with my roof, but Skycrafter Co. exceeded my expectations. They are reliable, professional, and truly know what they are doing."',
    name: "Jane Doe",
    title: "Business Owner, XYZ Corporation",
    imageSrc: "/assets/images/AvatarImage.png",
  },
  {
    paragraph:
      '"After a bad experience with another roofing company, I was relieved to find Skycrafter Co. Their team was knowledgeable and efficient, and my roof looks better than ever."',
    name: "Mike Johnson",
    title: "Property Manager, 123 Property Management",
    imageSrc: "/assets/images/AvatarImage.png",
  },
  {
    paragraph:
      '"As a long-time customer of Skycrafter Co., I can confidently say that their roof repair and restoration services are top-notch. They have been in business for 10 years and consistently provide the best quality work."',
    name: "John Smith",
    title: "Homeowner, ABC Construction",
    imageSrc: "/assets/images/AvatarImage.png",
  },
];

const Review = ({ paragraph, name, titleHeld, imageSrc }: ReviewProps) => {
  return (
    <div className="py-3 md:py-5 xl:py-8 space-y-4 xl:space-y-6 text-mirage-black">
      <Stars />

      <p className="paragraph-style2 -tracking-[0.5%]">
        {paragraph}
      </p>

      <div className="flex items-center gap-x-3 xl:gap-x-5">
        <div className="relative w-12 h-12 md:w-10 md:h-10 xl:w-14 xl:h-14 rounded-full">
          <Image
            src={imageSrc}
            alt="customer-image"
            fill
            quality={100}
            priority
          />
        </div>

        <div className="text-base md:text-sm xl:text-base [&_>]:leading-6 [&_>]:-tracking-[0.05%]">
          <p className="font-medium">{name}</p>
          <span className="font-normal">{titleHeld}</span>
        </div>
      </div>
    </div>
  );
};

function CustomerReview() {
  const [swiper, setSwiper ] = React.useState<any>(null)

  const nextTo = () => {
    swiper.slideNext()
  }

  const prevTo = () => {
    swiper.slidePrev()
  }

  return (
    <section className="container-spacing pt-3 md:pt-0 pb-10 md:pb-8 lg:pb-[60px] ">
      <div className="text-center Header-Paragraph-Section">
        <h2 className="header-style2 overflow-hidden">
           <span className="inline-block">Hey, don’t just take our word for it</span> 
        </h2>

        <p className="mt-3 xl:mt-5 mb-12 xl:mb-[75px] overflow-hidden">
          <span className="paragraph-style1  inline-block">Read how much our customers appreciate our roofs</span>
        </p>
      </div>

      <div className="w-full">
        {/*  swiper containier */}
        <Swiper
          freeMode={ true }
          loop= { true }
          pagination= {{
            clickable: true,
            el: ".swiper-custom-pagination"
          }}
          onSwiper={(s:any) => {
            setSwiper(s)
          }}
          modules= {[ FreeMode, Pagination, Navigation ]}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 32
            }
          }}
        >  
          {/* array of swiper item */}
          {ReviewsData.map((review, index) => {
              return (
                <SwiperSlide className="w-full md:min-w-[500px] xl:min-w-[600px]" key={index + 10}>
                  <Review
                    paragraph={review.paragraph}
                    name={review.name}
                    titleHeld={review.title}
                    imageSrc={review.imageSrc}
                  />
                </SwiperSlide>
              );
            })}

          <div className="mt-7 lg:mt-9 xl:mt-12 flex justify-between items-center">
            {/* pagination  */}
            <div className="swiper-custom-pagination flex items-center gap-x-1 md:gap-x-1.5"/>
            
            {/* swiper - buttons */}
            <div className="gap-x-[15px] flex items-center swiper-nav-btns">
              <button onClick={ prevTo }>
                <ButtonLeft />
              </button>

              <button onClick={ nextTo }>
                <ButtonRight />
              </button>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default CustomerReview;