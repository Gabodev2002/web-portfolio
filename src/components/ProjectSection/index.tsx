'use client'

import { useEffect, useRef, useState } from "react";
import Image from "next/image"
import styles from '../../app/global.module.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { DataProjects } from '@/utils/data';



export const ProjectSection = ({ project, index }: { project: DataProjects, index: number }) => {

    const sectionRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    const isEven = index % 2 === 0
    const textOrderClass = isEven ? 'lg:order-2' : 'lg:order-1'
    const imageOrderClass = isEven ? 'lg:order-1' : 'lg:order-2'

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                setIsVisible(true)
            } 
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        })

        if(sectionRef.current)  {
            observer.observe(sectionRef.current)
        }

        return () => {
            observer.disconnect()
        }
    },[])

   

    return(

    <section ref={sectionRef} className={`${isVisible ? `${styles.sectionContainer}` : 'opacity-0'} grid grid-cols-1 px-8 py-20 md:py-28 lg:mt-8 lg:grid-cols-2 lg:px-12 lg:gap-12 items-center justify-center max-w-7xl m-auto`}>

        <div className={`${textOrderClass}`}>

            <h2 className='text-3xl md:text-5xl pb-4'>{project.name}</h2>
            <p className='text-lg text-[#888888]  font-light leading-7 text-justify'>{project.description}</p>
            <a href={project.websiteUrl} className='flex items-center pt-5 gap-2 text-[#00FFFF]'>Project Preview <FaLongArrowAltRight /></a>

        </div>

        <div className={`flex justify-center relative ${imageOrderClass}`}>
            <Image
            style={{ maxWidth: project.imageSizes?.maxWidth || 'none', maxHeight: project.imageSizes?.maxHeight || 'none' }}
                className={`w-full h-auto bg-contain mt-16 hover:scale-105 transition-transform duration-500`} 
                src={project.imageUrl || ''}
                width={project.imageSizes?.width || 0}
                height={project.imageSizes?.height || 0}
                alt="Description"
                priority
            />
        </div>

    </section>

    )
}