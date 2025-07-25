export interface DataProjects {
    name: string
    description: string
    imageUrl: string
    websiteUrl?: string
    imageSizes?: { width: number , height: number, maxWidth?: number , maxHeight?: number }
}

export const dataProjects: DataProjects[] = [

    {name: 'Movie App', description: `I'm designed and built a modern streaming application from the ground up, deployed live on Vercel. This project showcases my expertise in crafting intuitive, high-performance user interfaces using React and TypeScript..`, imageUrl: '/peliapp-front.webp', websiteUrl: 'https://react-peli-app-zeta.vercel.app/', imageSizes: { width: 470, height: 470, maxWidth: 470, maxHeight: 470}}, 

    {name: 'Tera Web', description: `I'm designed and built a modern streaming application from the ground up, deployed live on Vercel. This project showcases my expertise in crafting intuitive, high-performance user interfaces using React and TypeScript..`, imageUrl: '/teraWebMobile-portrait.webp', websiteUrl: 'https://www.teraelectricalstaffing.com/', imageSizes: { width: 320, height: 450, maxWidth: 290, maxHeight: 450}}, 

    {name: 'Todo App', description: `I'm designed and built a modern Todo App from the ground up, deployed live on Vercel. This project showcases my expertise in crafting intuitive, high-performance user interfaces using React and TypeScript..`, imageUrl: '/todoapp-portrait.webp', websiteUrl: 'https://todo-app-hazel-one.vercel.app/', imageSizes: { width: 320, height: 450, maxWidth: 290, maxHeight: 450}},  

]