import styles from '../global.module.css'
import Image from 'next/image'
import { FaReact, FaCss3, FaJsSquare, FaHtml5, FaGithub } from "react-icons/fa";
import { maskImage } from '@/utils/imageStyle';
import { IoLogoVercel } from "react-icons/io5";
import { SiNextdotjs, SiTypescript, SiVite } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function AboutPage () {
    return (
       <section className={`${styles.sectionContainer}  mt-20 px-8 lg:px-12 max-w-7xl m-auto`}>

        <h1 className='text-4xl md:text-6xl z-10'>About <span className='text-[#00ffff]'> me</span></h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 h-auto w-full max-w-7xl m-auto mt-10 md:mt-20'>
            
            <div className='flex flex-col gap-5  pt-5 '>
                {/* <p>Im front end developer from Venezuela</p>
                <p>Im a passionate developer with a love for creating dynamic and responsive web applications.</p> 
                <p>I have been creating web applications since 1 year ago with react js, typeScript, vite, next js, tailwind</p>
                <p>Front-End Developer with 1 year of hands-on experience crafting modern and responsive user interfaces. My self-taught background, solidified through Platzi, has equipped me with strong problem-solving skills and a rapid learning ability. I am proficient in technologies such as HTML, CSS, JavaScript, and React. I am actively seeking my first professional opportunity to contribute my skills, collaborate within a team, and continue growing in the world of web development.</p> */}
                <p className='leading-7 lg:text-lg'>Im a passionate Front-End Developer from Venezuela, with one and a half years of experience crafting dynamic and responsive web applications. My self-taught background and Platzi training have equipped me with strong problem-solving skills and a rapid learning ability. Im proficient in HTML, CSS, JavaScript, and TypeScript, and have hands-on experience with React.js, Next.js, Vite, and Tailwind CSS. Im actively seeking my first professional opportunity to apply my skills and continue growing in the world of web development.</p>
            </div>
            <div className='w-full flex justify-center lg:justify-end'>
                <Image className='bg-cover rounded-2xl w-auto h-auto' style={maskImage} width='600' height='500' src="/fotocv.webp" alt="foto-cv" priority/>
            </div>

        </div>

        <div className='mt-10 md:mt-44'>
            <h1 className='text-4xl md:text-6xl z-10'>Skills</h1>
            <div className='flex flex-wrap items-center justify-center gap-8 py-20'>
                <FaReact size={70} className='icon-base react-icon animate-pulse'/>
                <FaHtml5 size={70} className='icon-base html-icon animate-pulse'/>
                <FaCss3 size={70} className='icon-base css-icon animate-pulse' />
                <FaJsSquare size={70} className='icon-base js-icon animate-pulse' />
                <IoLogoVercel size={70} className='icon-base vercel-icon animate-pulse'/>
                <SiTypescript size={70} className='icon-base ts-icon animate-pulse'/>
                <SiNextdotjs size={70} className='icon-base next-icon animate-pulse'/>
                <FaGitAlt size={70} className='icon-base git-icon animate-pulse'/>
                <FaGithub size={70} className='icon-base github-icon animate-pulse'/>
                <RiTailwindCssFill size={70} className='icon-base tw-icon'/>
                <SiVite size={70} className='icon-base vite-icon'/>
            </div>
        </div>

       </section>
    )
}