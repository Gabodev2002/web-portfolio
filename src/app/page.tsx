'use client'

import { useRef, useState } from 'react';
import { ProjectSection } from '@/components/ProjectSection';
import { dataProjects } from '@/utils/data';
import { IoMdArrowDropdown } from "react-icons/io";
import  styles  from '../app/global.module.css' 


export default function Home() {

    const mainRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const headerTextRef = useRef<HTMLHeadingElement>(null)
    const [ isActive, setIsActive ] = useState(false)
    const [ isAnimationSlideIn ] = useState(true)
    const videoContainerRef = useRef<HTMLDivElement>(null)

    
    const handleStart = () => {
      setIsActive(true)
         if(mainRef.current && headerTextRef.current) {
           setTimeout(() => {
             if(mainRef.current && headerTextRef.current) {
              mainRef.current.scrollIntoView({ behavior: 'smooth', });
            }
           }, 500)
         }
    }

  return (

   <div ref={containerRef}>

      <section ref={videoContainerRef} className={`${styles.mainContainer}`}>
          <video className='w-full h-full absolute object-cover' autoPlay={true} loop muted src="./Cover-30-04.mp4"></video>
            <h1 ref={headerTextRef} className={`${isActive ? styles['out-animation'] : ''} ${isAnimationSlideIn ? styles['in-animation'] : ''} text-2xl lg:text-4xl z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
            I&apos;m <span className={`${styles.secondColor}`}>Gabo</span> - and I&apos;m passionate about bringing <span className={`${styles.secondColor}`}>web pages</span> to life.
            </h1>
            <button onClick={() => handleStart()} className="absolute bottom-6 left-1/2 -translate-x-1/2 w-auto h-auto animate-bounce"><IoMdArrowDropdown color='#00FFFF' size={70}/></button>
      </section>

      <main ref={mainRef} className='darkest-static-gradient'>
        <ProjectSection project={dataProjects[0]} index={1}/>

        <ProjectSection project={dataProjects[1]} index={2}/> 

        <ProjectSection project={dataProjects[2]} index={1}/> 

        <ProjectSection project={dataProjects[3]} index={2}/> 
      </main>
    

   </div>

  ); 
}
