import  styles  from '../app/global.module.css' 
import Image from 'next/image';
import { FaLongArrowAltRight } from "react-icons/fa";


export default function Home() {

  return (
   <>
    <section className={`${styles.mainContainer}`}>
        <video className='w-full h-full absolute object-cover' autoPlay={true} loop muted src="./Cover-30-04.mp4"></video>
          <h1 className='text-4xl md:text-6xl z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
           I&apos;m <span className={`${styles.secondColor}`}>Gabo</span> - and I&apos;m passionate about bringing <span className={`${styles.secondColor}`}>web pages</span> to life.
          </h1>
    </section>

    <section className={`${styles.sectionContainer} grid grid-cols-1 gap-10 px-8 py-32 lg:grid-cols-2 lg:px-12 lg:gap-10 items-center justify-center max-w-7xl m-auto`}>
      <div className=''>
        <h2 className='text-3xl md:text-5xl pb-4'>Movie App</h2>
        <p className='text-lg text-[#888888] font-light text-justify'>I&apos;ve designed and built a modern streaming application from the ground up, deployed live on Vercel. This project showcases my expertise in crafting intuitive, high-performance user interfaces using React and TypeScript.. </p>
        <a href='https://www.teraelectricalstaffing.com' className='flex items-center gap-2 text-[#00FFFF] pt-5'>Project Preview <FaLongArrowAltRight /></a>
      </div>
        <div className='flex justify-center relative'>
              <Image
              className='w-auto h-auto bg-cover hover:scale-105 transition-transform duration-500'
              src="/movie-app-front.webp"
              width={570}
              height={570}
              alt="Description"
              priority
            />
        </div>
    </section>

    <section className={`${styles.sectionContainer} grid grid-cols-1 px-8 mt-32 lg:mt-8 lg:grid-cols-2 lg:px-12 lg:gap-10 items-center justify-center max-w-7xl m-auto`}>
      <div className='lg:order-2'>
            <h2 className='text-3xl md:text-5xl pb-4'>Tera Web</h2>
        <p className='text-lg text-[#888888]  font-light leading-7 text-justify'>I&apos;ve designed and built a modern streaming application from the ground up, deployed live on Vercel. This project showcases my expertise in crafting intuitive, high-performance user interfaces using React and TypeScript.. </p>
        <a href='https://www.teraelectricalstaffing.com' className='flex items-center pt-5 gap-2 text-[#00FFFF]'>Project Preview <FaLongArrowAltRight /></a>
      </div>
        <div className='flex justify-center relative'>
              <Image
              className={`w-full h-auto max-h-[570px] max-w-[350px] bg-contain mt-16 hover:scale-105 transition-transform duration-500`} 
              src="/teraWebMobile-portrait.webp"
              width={350}
              height={570}
              alt="Description"
              priority
            />
        </div>
    </section>

   </>
  ); 
}
