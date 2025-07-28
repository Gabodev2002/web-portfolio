'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { IoDownloadOutline } from "react-icons/io5";

export const Header = () => {

    const pathname = usePathname()
    
    const isActive = 'text-[#00FFFF]'

    return(
        <div className="w-full fixed top-0 z-10"> 

            <div className="bg-[#111111] sticky top-0 w-full h-16 shadow-md">
                <nav className="w-full max-w-7xl flex justify-between px-4 pt-4 mx-auto items-center"> 
                <span>GaboDev.</span> 
                <ul className="flex gap-8 items-center"> 
                    <Link href={'/'} className={`${pathname === '/' && isActive}`}>Work</Link> 
                    <Link href={'/about'} className={`${pathname === '/about' && isActive} hover:text-[#00FFFF]`}>About</Link> 
                    <Link download={'curriculumv.pdf'} href='/curriculumv.pdf' className='text-sm cursor-pointer rounded-sm font-bold text-white hover:text-[#00FFFF] flex items-center gap-1'>Download cv <IoDownloadOutline className='' />
                    </Link>
                </ul>
            </nav>
            </div>
        </div>
    )
}