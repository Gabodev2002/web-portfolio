export interface DataProjects {
    name: string
    description: string
    imagesUrl: { imageMobile?: string, imageDesktop?: string }
    websiteUrl?: string
    imageSizes?: { width: number, height: number }
}

export const dataProjects: DataProjects[] = [

    {name: 'Movie App', description: 'I&apos;ve designed and built a modern streaming application from the ground up, deployed live on Vercel. This project showcases my expertise in crafting intuitive, high-performance user interfaces using React and TypeScript..', imagesUrl: {imageDesktop: '/movie-app-front.webp' }, websiteUrl: ''}, 

    {name: 'Tera Web', description: 'I&apos;ve designed and built a modern streaming application from the ground up, deployed live on Vercel. This project showcases my expertise in crafting intuitive, high-performance user interfaces using React and TypeScript..', imagesUrl: { imageMobile:'/teraWebMobile-portrait.webp', imageDesktop: '/teraWebDesktop.webp'}, websiteUrl: 'https://www.teraelectricalstaffing.com/', imageSizes: { width: 350, height: 570}},  

]