'use client'

import { useState } from 'react';
import  styles  from '../app/global.module.css' 
import Image from 'next/image';

export default function Home() {

  const [isMobile, setIsMobile] = useState(true)

  const handleIsMobileShow = () => {
    setIsMobile(!isMobile)
  }

  return (
   <>
    <section className={`${styles.mainContainer}`}>
        <video className='w-full h-full absolute object-cover' autoPlay={true} loop muted src="./Cover-30-04.mp4"></video>
          <h1 className='text-4xl md:text-6xl z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
           I&apos;m Gabo <span className={`${styles.secondColor}`}>-</span> and I&apos;m passionate about bringing web pages to life.
          </h1>
    </section>

    <section className={`${styles.sectionContainer} grid grid-cols-1 px-8 lg:grid-cols-2 lg:px-12 lg:gap-10 items-center justify-center max-w-7xl m-auto`}>
      <div className=''>
        <h2 className='text-3xl md:text-5xl pb-4'>Movie App</h2>
        <p className='text-lg text-[#888888] font-light text-justify'>I&apos;ve designed and built a modern streaming application from the ground up, deployed live on Vercel. This project showcases my expertise in crafting intuitive, high-performance user interfaces using React and TypeScript.. </p>
      </div>
        <div className='flex justify-center relative'>
              <Image
              className='w-full max-w-[670px] max-h-[570px] h-auto bg-cover hover:scale-105 transition-transform duration-500'
              src="/movie-app-front.webp"
              width={670}
              height={670}
              alt="Description"
              priority
            />
        </div>
    </section>

    <section className={`${styles.sectionContainer} grid grid-cols-1 px-8 lg:grid-cols-2 lg:px-12 lg:gap-10 items-center justify-center max-w-7xl m-auto`}>
      <div className='lg:order-2'>
        <div className='flex items-center gap-4'>
            <h2 className='text-3xl md:text-5xl pb-4'>Tera Web</h2>
          <button className='text-[#888888] hover:text-[#00FFFF] border-b border-b-[#00FFFF] font-light hidden lg:block cursor-pointer' onClick={() => handleIsMobileShow()}>
              change view
            </button>
        </div>
        <p className='text-lg text-[#888888]  font-light leading-7 text-justify'>I&apos;ve designed and built a modern streaming application from the ground up, deployed live on Vercel. This project showcases my expertise in crafting intuitive, high-performance user interfaces using React and TypeScript.. </p>
      </div>
        <div className='flex justify-center relative'>
              <Image
              className={`${isMobile ? 'block' : 'hidden'} w-full h-auto max-h-[570px] max-w-[350px] bg-contain mt-16 hover:scale-105 transition-transform duration-500`} 
              src="/teraWebMobile-portrait.webp"
              width={350}
              height={570}
              alt="Description"
              priority
            />
            <Image
              className={`${isMobile ? 'hidden' : 'block'} w-full max-w-[670px] max-h-[570px] h-auto bg-cover hover:scale-105 transition-transform duration-500`}
              src="/teraWebDesktop-front.webp"
              width={670}
              height={670}
              alt="Description"
              priority
            />
        </div>
    </section>

    

    
    
   </>
  ); 
}
