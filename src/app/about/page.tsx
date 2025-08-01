import styles from '../global.module.css'
import Image from 'next/image'
import { FaReact, FaCss3, FaJsSquare, FaHtml5, FaGithub } from "react-icons/fa";
import { maskImage } from '@/utils/imageStyle';
import { IoLogoVercel } from "react-icons/io5";
import { SiNextdotjs, SiTypescript, SiVite } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SpotLightContainer } from '@/components/SpotLightContainer';

export default function AboutPage () {
    return (
       <section className={`${styles.sectionContainer}  mt-35 px-8 lg:px-12 max-w-6xl m-auto`}>

        <h1 className='text-3xl md:text-3xl z-10'>About <span className='text-[#00ffff]'> me</span></h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 h-auto w-full max-w-7xl m-auto mt-5 md:mt-5'> 
            

                <div className='flex flex-col items-center justify-center h-auto w-full'> 
                    <SpotLightContainer>
                        <div className='flex flex-col items-center gap-5  pt-5 '> 
                            <p className='leading-7 lg:'>I&apos;m a Front-End Developer with a passion for bringing designs to life. Give me a vision, and I&apos;ll transform it into a responsive, pixel-perfect reality. I&apos;m a quick learner and I love diving into new challenges to expand my skillset. I thrive in collaborative environments and enjoy working as part of a team. 
                            </p> 
                            
                            {/* <p>
                                I&apos;m a self-taught developer, building my skills through platforms like Platzi and other online resources. Over the past year, I&apos;ve actively developed a range of personal projects, gaining practical experience and a strong foundation. I&apos;m ready to put my knowledge into production and contribute to impactful projects.
                            </p> */}
                        </div>
                    </SpotLightContainer>
                </div>


            <div className='w-full h-[300px] flex justify-center'>
                <Image className='bg-cover rounded-2xl' style={maskImage} width={300} height={300} src="/fotocv.webp" alt="foto-cv" priority />
            </div>

        </div>

        <div className='flex flex-col md:flex-row  gap-4 '>

            <div className='mt-10 md:mt-20 w-full'>

                <h1 className='text-2xl z-10 text-center'>Skills</h1>
                
                <div className='flex flex-wrap items-center gap-8 py-10 lg:py-20 m-auto'>
                    <FaReact size={40} className='icon-base react-icon animate-pulse'/>
                    <FaHtml5 size={40} className='icon-base html-icon animate-pulse'/>
                    <FaCss3 size={40} className='icon-base css-icon animate-pulse' />
                    <FaJsSquare size={40} className='icon-base js-icon animate-pulse' />
                    <IoLogoVercel size={40} className='icon-base vercel-icon animate-pulse'/>
                    <SiTypescript size={40} className='icon-base ts-icon animate-pulse'/>
                    <SiNextdotjs size={40} className='icon-base next-icon animate-pulse'/>
                    <FaGitAlt size={40} className='icon-base git-icon animate-pulse'/>
                    <FaGithub size={40} className='icon-base github-icon animate-pulse'/>
                    <RiTailwindCssFill size={40} className='icon-base tw-icon'/>
                    <SiVite size={40} className='icon-base vite-icon'/>
                </div>

        </div>

        <div className='mt-10 md:mt-20 w-full'>
            <h1 className='text-2xl z-10 text-center'>Contact</h1>

            <div className='flex justify-center items-center gap-4 w-full '>

                    <div className='z-10'>
                
                        <div className='flex flex-col items-center gap-5 flex flex-wrap justify-center py-10 lg:pt-20'>

                        
                                <p>Email: gabo.mgb6@gmail.com</p>
                         

                           
                                <p>Tlf: +58 414-388-27-31</p>
                            

                                <p className='cursor-pointer'>Github: <a href="https://github.com/gabodev2002" target="_blank" rel="noopener noreferrer">github.com/gabodev2002</a></p>
                            

                        </div>
                    </div>
            </div>

        </div>
        </div>

       </section>
    )
}