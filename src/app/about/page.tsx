import styles from '../global.module.css'
import Image from 'next/image'
import { FaReact } from "react-icons/fa";

export default function AboutPage () {
    return (
       <section className={`${styles.sectionContainer} mt-20 px-8 lg:px-12 max-w-7xl m-auto`}>
        <h1 className='text-4xl md:text-6xl z-10'>About <span className='text-[#00ffff]'> me</span></h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 h-auto w-full max-w-7xl m-auto mt-10 md:mt-20'>
            <div className='flex flex-col gap-5'>
                <p>Im front end developer from Venezuela</p>
                <p>Im a passionate developer with a love for creating dynamic and responsive web applications.</p> 
                <p>I have been creating web applications since 1 year ago with react js, typeScript, vite, next js, tailwind</p>
            </div>
            <div className='w-full flex justify-center lg:justify-end'>
                <Image className='bg-cover rounded-2xl w-auto h-auto' style={{ maxHeight: '500px' }} width='500' height='450' src="/fotocv.webp" alt="foto-cv" priority/>
            </div>
        </div>
        <div className='mt-10 md:mt-20'>
            <h1 className='text-4xl md:text-6xl z-10'>Skills</h1>
            <div>
                <FaReact color='cyan'/>
            </div>
        </div>
       </section>
    )
}