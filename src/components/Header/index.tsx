'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export const Header = () => {

    const pathname = usePathname()
    
    const isActive = 'text-[#00FFFF]'

    return(
        <div className="w-full fixed top-0 z-10">
            <nav className="w-full max-w-7xl flex justify-between px-4 pt-4 mx-auto items-center">
            <span>GaboDev.</span>
            <ul className="flex gap-8 items-center"> 
                <Link href={'/'} className={`${pathname === '/' && isActive}`}>Work</Link>
                <Link href={'/about'} className={`${pathname === '/about' && isActive}`}>About</Link>
                <Link download={'curriculumv.pdf'} href='/curriculumv.pdf' className='py-2 px-5 text-sm bg-[#00FFFF] hover:bg-[#10FFFF] cursor-pointer rounded-sm text-black font-bold hover:text-white'>Download cv</Link>
            </ul>
        </nav>
        </div>
    )
}