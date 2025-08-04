"use client"

import { useState } from "react"

interface SpotLightContainerProps {
    children: React.ReactNode;
    width?: string;
    height?: string;
    cursor?: string;
}

export const SpotLightContainer = ({ children, width, height, cursor }: SpotLightContainerProps) => {

    const [ isSpotLightActive, setIsSpotLightActive ] = useState(false)
    const [ spotLight, setSpotLight ] = useState({ x: '50%', y: '50%' })

    const handleMouseEnter = () => {
        setIsSpotLightActive(true)
    }

    const handleMouseLeave = () => {
        setIsSpotLightActive(false)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const clientX = e.clientX - rect.left
        const clientY = e.clientY - rect.top
        setSpotLight({ x: `${clientX}px`, y: `${clientY}px` })
    }

    return(
        <div className={`my-container w-${width || 'full'} h-${height || 'auto'} cursor-${cursor || 'default'}`}  
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
            { children }

            <div
                className="container-spotlight-effect"
                style={{
                    '--mouse-x': spotLight.x,
                    '--mouse-y': spotLight.y,
                    opacity: isSpotLightActive ? 1 : 0,
                } as React.CSSProperties & Record<string, string | number>}
            />
            
        </div>
    )
}