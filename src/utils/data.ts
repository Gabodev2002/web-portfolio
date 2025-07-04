export interface DataProjects {
    name: string
    description: string
    imageUrl: string
    websiteUrl?: string
    imageSizes?: { width: number , height: number, maxWidth?: number , maxHeight?: number }
}

export const dataProjects: DataProjects[] = [

    {name: 'Movie App', description: `I'm designed and built a modern streaming application from the ground up, deployed live on Vercel. This project showcases my expertise in crafting intuitive, high-performance user interfaces using React and TypeScript..`, imageUrl: '/movie-app-front.webp', websiteUrl: '', imageSizes: { width: 570, height: 570, maxWidth: 570, maxHeight: 570}}, 

    {name: 'Tera Web', description: `I'm designed and built a modern streaming application from the ground up, deployed live on Vercel. This project showcases my expertise in crafting intuitive, high-performance user interfaces using React and TypeScript..`, imageUrl: '/teraWebMobile-portrait.webp', websiteUrl: 'https://www.teraelectricalstaffing.com/', imageSizes: { width: 350, height: 570, maxWidth: 350, maxHeight: 600}},  

]