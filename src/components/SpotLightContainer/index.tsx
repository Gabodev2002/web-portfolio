import { useState } from "react"

export const SpotLightContainer = ({ children }: { children: React.ReactNode }) => {

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
        
        console.log(rect, clientX, clientY)
    }

    return(
        <div className="my-container"  
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