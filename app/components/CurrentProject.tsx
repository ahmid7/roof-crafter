import React from 'react'
import { ButtonLeft, ButtonRight, Stars } from './svgs'
import Image from "next/image"

function CurrentProject() {
  return (
    <section className='pt-[60px] '>
      <div className="text-center">
        <h2 className=" font-medium text-[40px] -tracking-[1.5%] leading-[48px]">
        What we have been up to
        </h2>
        <p className="font-normal text-xl leading-[30px] -tracking-[0.5%] pt-5 pb-12">
          Take a look at our recent roofing projects.
        </p>
      </div>

      <div className='pt-[80px]'>
        <div className='flex items-start gap-x-20 justify-between'>
          <div className='space-y-6'>
            <h1 className='font-bold text-[56px] leading-[67.2px] -tracking-[1.5%] '>Project T</h1>
            <p className='font-normal text-lg leading-[27px] -tracking-[0.5%]'>Project T involved the meticulous installation of a cutting-edge cool roof system, enhancing energy efficiency and reducing cooling costs.</p>

            <div className='font-normal text-sm [&_span]:leading-[21px] [&_span]:rounded-[20px] space-x-2'>
              <span className='bg-[#EDF1FC] text-[#1A3AA9] px-2 py-1'>Eco-friendly Roofing</span>
              <span className='bg-[#E0F5E9] text-[#186D4B] px-2 py-1'>Cost-Saving Solutions</span>
            </div>
          </div>

          <div className='basis-[464px] grid grid-cols-2 gap-y-8 text-base [&_p]:font-bold [&_p]:leading-6 [&_p]:-tracking-[0.05%] [&_small]:font-normal [&_small]:leading-6 [&_small]:-tracking-[0.5%] [&_p]:pb-2'>
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

      <div className='my-20 relative w-full h-[600px]'>
        <Image
          alt='project-image'
          className="object-cover"
          src="/assets/images/projectImage.png"
          fill
          priority
          quality={100}
        />
      </div>

      <div className='px-6 flex justify-between item-center pb-[60px]'>
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

        <div className='gap-x-[15px] flex items-center'>
          <ButtonLeft/>

          <ButtonRight />
        </div>
      </div>
    </section>
  )
}

export default CurrentProject