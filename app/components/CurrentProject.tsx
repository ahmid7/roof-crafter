import React from 'react'
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react'

import { ButtonLeft, ButtonRight, Stars } from './svgs'


gsap.registerPlugin(ScrollTrigger)
function CurrentProject() {

  const CurrentProjectRef = React.useRef(null)

  useGSAP(() => {
    gsap.to(".project-t-image", {
      // backgroundSize: "400%",
      scale:1.5,
      ease: "none",
      scrollTrigger: {
        trigger: ".project-t-image",
        start: "top 75%",
        end: "bottom top",
        scrub: 0.5
      }
    });

    gsap.fromTo(".project-t-text", { xPercent: 100 } ,{
      xPercent: -150,
      ease: "none",
      scrollTrigger: {
        trigger: ".project-t-image",
        start: "top 75%",
        end: "bottom top",
        scrub: 1
      }
    });
  }, { scope: CurrentProjectRef })

  return (
    <section className='pt-12 md:pt-10 lg:pt-[50px] xl:pt-[60px] ' ref={ CurrentProjectRef }>
      <div className="text-center Header-Paragraph-Section">
        <h2 className="header-style2 overflow-hidden">
          <span className='inline-block'>What we have been up to</span>
        </h2>
        <p className="mt-3 xl:mt-5 mb-10 xl:mb-12 overflow-hidden">
          <span className='paragraph-style1 inline-block'>Take a look at our recent roofing projects.</span> 
        </p>
      </div>

      <div className=' md:mt-10 lg:mt-[50px] xl:mt-20'>
        <div className=' md:between-start space-y-8 gap-x-16 xl:gap-x-20'>
          <div className='space-y-4 xl:space-y-6'>
            <h1 className='header-style2'>Project T</h1>
            <p className='paragraph-style2 -tracking-[0.5%]'>Project T involved the meticulous installation of a cutting-edge cool roof system, enhancing energy efficiency and reducing cooling costs.</p>

            <div className='font-normal text-sm [&_span]:leading-[21px] [&_span]:rounded-[20px] space-x-2'>
              <span className='bg-[#EDF1FC] text-[#1A3AA9] px-2 py-1'>Eco-friendly Roofing</span>
              <span className='bg-[#E0F5E9] text-[#186D4B] px-2 py-1'>Cost-Saving Solutions</span>
            </div>
          </div>

          <div className='basis-[464px] grid grid-cols-2 gap-y-6 xl:gap-y-8 text-base md:text-sm xl:text-base [&_p]:font-bold [&_p]:leading-5 [&_p]:xl:leading-6 [&_p]:-tracking-[0.05%] [&_small]:font-normal [&_small]:leading-5 [&_small]:xl:leading-6 [&_small]:-tracking-[0.5%] [&_p]:pb-1 [&_p]:xl:pb-2'>
            <div>
              <p>Client</p>
              <small className=''>John Smith</small>
            </div>

            <div>
              <p>Date</p>
              <small>March 2023</small>
            </div>

            <div>
              <p>Description</p>
              <small>Roof Installation</small>
            </div>

            <div>
              <p>Customer Rating</p>
              <small><Stars/></small>
            </div>
          </div>
        </div>
      </div>

      <div className='my-8  lg:my-16 xl:my-20 relative w-full h-[450px] lg:h-[550px] xl:h-[600px] overflow-hidden' >
        <Image
          alt='project-image'
          className="object-cover z-0 project-t-image"
          src="/assets/images/projectImage.png"
          fill
          priority
          quality={100}
        />

        <h2 className='text-[350px] w-full h-full text-mirage-black text-opacity-60 border-solid border-2 absolute grid place-content-center text-nowrap' >
          <span className='project-t-text text-nowrap'>Project T</span>
        </h2>

      </div>

      <div className='md:px-4 lg:px-6 between'>
        <div className='[&_span]:w-2 [&_span]:h-2 [&_span]:rounded-full [&_span]:bg-[#E0E0E0] flex gap-x-2'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className='gap-x-3 lg:gap-x-[15px] flex items-center'>
          <ButtonLeft/>

          <ButtonRight />
        </div>
      </div>
    </section>
  )
}

export default CurrentProject