import styles from '../global.module.css'
import Image from 'next/image'
import { FaReact, FaCss3, FaJsSquare, FaHtml5, FaGithub } from "react-icons/fa";
import { maskImage } from '@/utils/imageStyle';
import { IoLogoVercel } from "react-icons/io5";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

export default function AboutPage () {
    return (
       <section className={`${styles.sectionContainer} mt-20 px-8 lg:px-12 max-w-7xl m-auto`}>

        <h1 className='text-4xl md:text-6xl z-10'>About <span className='text-[#00ffff]'> me</span></h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 h-auto w-full max-w-7xl m-auto mt-10 md:mt-20'>
            
            <div className='flex flex-col gap-5  pt-5 '>
                <p>Im front end developer from Venezuela</p>
                <p>Im a passionate developer with a love for creating dynamic and responsive web applications.</p> 
                <p>I have been creating web applications since 1 year ago with react js, typeScript, vite, next js, tailwind</p>
            </div>
            <div className='w-full flex justify-center lg:justify-end'>
                <Image className='bg-cover rounded-2xl w-auto h-auto' style={maskImage} width='600' height='500' src="/fotocv.webp" alt="foto-cv" priority/>
            </div>

        </div>

        <div className='mt-10 md:mt-44'>
            <h1 className='text-4xl md:text-6xl z-10'>Skills</h1>
            <div className='flex items-center justify-center gap-8 py-20'>
                <FaReact size={70} className='icon-base react-icon animate-pulse'/>
                <FaHtml5 size={70} className='icon-base html-icon animate-pulse'/>
                <FaCss3 size={70} className='icon-base css-icon animate-pulse' />
                <FaJsSquare size={70} className='icon-base js-icon animate-pulse' />
                <IoLogoVercel size={70} className='icon-base vercel-icon animate-pulse'/>
                <SiTypescript size={70} className='icon-base ts-icon animate-pulse'/>
                <SiNextdotjs size={70} className='icon-base next-icon animate-pulse'/>
                <FaGitAlt size={70} className='icon-base git-icon animate-pulse'/>
                <FaGithub size={70} className='icon-base github-icon animate-pulse'/>
            </div>
        </div>

       </section>
    )
}