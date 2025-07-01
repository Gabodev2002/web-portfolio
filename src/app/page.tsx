import { ProjectSection } from '@/components/ProjectSection';
import  styles  from '../app/global.module.css' 
import { dataProjects } from '@/utils/data';


export default function Home() {

  return (
   <>
    <section className={`${styles.mainContainer}`}>
        <video className='w-full h-full absolute object-cover' autoPlay={true} loop muted src="./Cover-30-04.mp4"></video>
          <h1 className='text-4xl md:text-6xl z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
           I&apos;m <span className={`${styles.secondColor}`}>Gabo</span> - and I&apos;m passionate about bringing <span className={`${styles.secondColor}`}>web pages</span> to life.
          </h1>
    </section>

    <ProjectSection project={dataProjects[0]} index={1}/>

    <ProjectSection project={dataProjects[1]} index={2}/> 
    

   </>
  ); 
}
