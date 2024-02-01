import React from 'react'
import Image from 'next/image'
import { LineDownward } from './svgs'

function Services() {
  return (
    <section className='pt-[60px] px-10'>
      <div>
        <div className='flex justify-between items-start '>
          <h2 className='font-medium text-[50px] leading-[67.2px] -tracking-[1.5%] basis-[45%]'>Building Trust Through Quality Roofing Services</h2>

          <p className='text-lg font-normal leading-[27px] basis-[45%] mr-16'>At Skycrafters, we have been providing exceptional roofing services for over 20 years. Our commitment to quality craftsmanship, attention to detail, and customer satisfaction sets us apart from the competition. We take pride in our work and strive to exceed our clients' expectations with every project.</p>
        </div>

        <div className='relative  h-[1246px] pt-[30px] flex  pl-[520px]'>
          <LineDownward />

          <div className='pl-[100px] font-normal flex gap-x-[78px]'>
            <div className=''>
              <h5 className='text-[112px] text-mirage-black leading-[134.4px]'>200+</h5>
              <p className='text-lg leading-[27px] -tracking-[0.5%] font-normal pt-[21px]'>Customers served over the years</p>
            </div>

            <div>
              <h5 className='text-[112px] text-mirage-black leading-[134.4px]'>400+</h5>
              <p className='text-lg leading-[27px] -tracking-[0.5%] font-normal pt-[21px]'>Roofs restored and making people so happy</p>
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
    </section>
  )
}

export default Services