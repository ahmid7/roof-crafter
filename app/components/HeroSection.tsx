import React from 'react'
import ContactForm from './ContactForm'
import Image from "next/image"

function HeroSection() {
  return (
    <section className='flex pl-10'>
      <div className='space-y-6 pt-[114px] basis-1/2'>
        <h2 className='text-[56px] text-black font-bold -tracking-[0.84px] leading-[120%]'>Trusted Roofing Services for Your Home</h2>

        <p className='text-xl leading-[150%] -tracking-[0.1px]'>Protect your home with our reliable and professional roofing services. We offer roof repair, replacement, installation, emergency roofing, and more.</p>

        <ContactForm
          extraInfo
        />
      </div>

      <div className='basis-1/2 h-[925px]'>
        <div className='relative w-full h-full'>
          <Image  
            priority
            src='/assets/images/roofing.webp'
            layout='fill'
            quality={100}
            className="w-full h-full object-cover"
            alt='roofing-image'
          />
          <div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection