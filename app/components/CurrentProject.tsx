import React from 'react'
import { ButtonLeft, ButtonRight, Stars } from './svgs'
import Image from "next/image"

function CurrentProject() {
  return (
    <section className='pt-10 lg:pt-[50px] xl:pt-[60px] '>
      <div className="text-center">
        <h2 className="header-style2">
        What we have been up to
        </h2>
        <p className="paragraph-style1 pt-3 xl:pt-5 pb-10 xl:pb-12">
          Take a look at our recent roofing projects.
        </p>
      </div>

      <div className='pt-10 lg:pt-[50px] xl:pt-20'>
        <div className='between-start gap-x-16 xl:gap-x-20'>
          <div className='space-y-4 xl:space-y-6'>
            <h1 className='header-style2'>Project T</h1>
            <p className='paragraph-style2 -tracking-[0.5%]'>Project T involved the meticulous installation of a cutting-edge cool roof system, enhancing energy efficiency and reducing cooling costs.</p>

            <div className='font-normal text-sm [&_span]:leading-[21px] [&_span]:rounded-[20px] space-x-2'>
              <span className='bg-[#EDF1FC] text-[#1A3AA9] px-2 py-1'>Eco-friendly Roofing</span>
              <span className='bg-[#E0F5E9] text-[#186D4B] px-2 py-1'>Cost-Saving Solutions</span>
            </div>
          </div>

          <div className='basis-[464px] grid grid-cols-2 gap-y-6 xl:gap-y-8 text-sm xl:text-base [&_p]:font-bold [&_p]:leading-5 [&_p]:xl:leading-6 [&_p]:-tracking-[0.05%] [&_small]:font-normal [&_small]:leading-5 [&_small]:xl:leading-6 [&_small]:-tracking-[0.5%] [&_p]:pb-1 [&_p]:xl:pb-2'>
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

      <div className='my-8 lg:my-16 xl:my-20 relative w-full h-[450px] lg:h-[550px] xl:h-[600px] '>
        <Image
          alt='project-image'
          className="object-cover"
          src="/assets/images/projectImage.png"
          fill
          priority
          quality={100}
        />
      </div>

      <div className='px-4 lg:px-6 between'>
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