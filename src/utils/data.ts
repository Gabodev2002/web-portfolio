export interface DataProjects {
    name: string
    description: string
    imageUrl: string
    websiteUrl?: string
    imageSizes?: { width: number , height: number, maxWidth?: number , maxHeight?: number }
    gitHubCodeUrl?: string
}

export const dataProjects: DataProjects[] = [

    {name: 'Movie App', description: `A front-end application inspired by Paramount+ and Disney+, built to demonstrate my skills in React and its hooks. The project uses Tailwind CSS, Vite, and TypeScript. Deployed on Vercel, the app features a fully responsive design that works on all devices.`, imageUrl: '/peliapp-front.webp', websiteUrl: 'https://react-peli-app-zeta.vercel.app/', imageSizes: { width: 350, height: 350, maxWidth: 400, maxHeight: 400 }, gitHubCodeUrl: 'https://github.com/Gabodev2002/react-peli-app'}, 

    {name: 'Tera Web', description: `A clean and modern landing page developed using JavaScript, Vite for a fast development experience, and Tailwind CSS for a streamlined styling process. This project was created to showcase my ability to build professional, fully responsive web interfaces. The final site is hosted on Vercel under a custom domain.`, imageUrl: '/teraWebMobile-portrait.webp', websiteUrl: 'https://www.teraelectricalstaffing.com/', imageSizes: { width: 300, height: 400, maxWidth: 290, maxHeight: 400}, gitHubCodeUrl: 'https://github.com/Gabodev2002/tera-web'}, 

    {name: 'Todo App', description: `This project is a simple Todo application built with React and TypeScript. It allows users to create, read, update, and delete tasks, showcasing my ability to build interactive UIs and manage application state effectively.`, imageUrl: '/todoapp-portrait.webp', websiteUrl: 'https://todo-app-hazel-one.vercel.app/', imageSizes: { width: 250, height: 400, maxWidth: 250, maxHeight: 400}, gitHubCodeUrl: 'https://github.com/Gabodev2002/todo-app'},

    {name: 'Collection App', description: `This is an application for managing a collection of photos, built with React and TypeScript, consuming unplash api. It features a user-friendly interface and allows users to easily add, edit, and remove items from their collection.`, imageUrl: '/collections-front.webp', websiteUrl: 'https://collection-app-r6qt.vercel.app/', imageSizes: { width: 470, height: 470, maxWidth: 470, maxHeight: 470}, gitHubCodeUrl: 'https://github.com/Gabodev2002/collection-app'},  

    {name: 'Sunny side page', description: `This is a simple single-page website built using JavaScript, HTML, and CSS. The primary goal of this project was to showcase my proficiency in using CSS Grid to create complex and responsive layouts.`, imageUrl: '/newsunnytv-front.webp', websiteUrl: 'https://sunnyside-page-nine.vercel.app/', imageSizes: { width: 400, height: 400, maxWidth: 450, maxHeight: 450}, gitHubCodeUrl: 'https://github.com/Gabodev2002/sunnyside-page'}, 

]