import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


function Header() {
  return (
    <header className='between container-spacing absolute top-0 left-0 w-full py-3'>
      <nav>
        <ul className='between gap-x-8 text-mirage-black leading-6 text-base -tracking-[0.08px] '>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div>
        <Image 
          alt='company-logo'
          src="/CompanyLogo.svg"
          width={154}
          height={28}
          objectFit='cover'
        />
      </div>

      <button className='py-3 px-6 leading-6 gap-x-3 text-base between -tracking-[0.08px] bg-mirage-black text-white rounded-[32px]'>
        <span className=''>Schedule a Call</span>
        <Image 
          src="/Phone.svg"
          width={24}
          height={24}
          alt='phone-icon'
        />
      </button>
    </header>
  )
}

export default Header