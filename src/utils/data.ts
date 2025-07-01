export interface DataProjects {
    name: string
    description: string
    imagesUrl: { imageMobile?: string, imageDesktop?: string }
}

export const dataProjects: DataProjects[] = [
    {name: 'Movie App', description: '', imagesUrl: {imageDesktop: '/movie-app-front.webp' }}, 
    {name: 'Tera Web', description: '', imagesUrl: { imageMobile:'/teraWebMobile-portrait.webp', imageDesktop: '/teraWebDesktop.webp'}},  
]