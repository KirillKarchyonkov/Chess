import { useState, useEffect, type FC } from 'react'

interface CoordinateStripProps{
    stripPosition: string;
}

const CoordinateStrip: FC<CoordinateStripProps> = ({stripPosition}) => {
  
    const coordinatingNumbers: string[] = ['0', '1', '2', '3', '4', '5', '6', '7'].reverse()
    const coordinatingLetters: string[] = ['0', '1', '2', '3', '4', '5', '6', '7']//['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    const [position, setPosition] = useState<object>({})
    const [coordinates, setCoordinates] = useState<string[]>([])
    const [isHorizontal, setIsHorizontal] = useState(false)

    useEffect(() => {
        switch (stripPosition) {
            case "left":
                setPosition({left: "-64px", top: "50%", transform: "translateY(-50%)"})
                setCoordinates(coordinatingNumbers)
                setIsHorizontal(false)
                break;
            case "right":
                setPosition({right: "-64px", top: "50%", transform: "translateY(-50%)"})
                setCoordinates(coordinatingNumbers)
                setIsHorizontal(false)
                break;
            case "top":
                setPosition({top: "-64px", left: "50%", transform: "translateX(-50%)"})
                setCoordinates(coordinatingLetters)
                setIsHorizontal(true)
                break;
            case "bottom": 
                setPosition({bottom: "-64px", left: "50%", transform: "translateX(-50%)"})
                setCoordinates(coordinatingLetters)
                setIsHorizontal(true)
                break;
            default:
                console.error("Ошибка, неверный пропс!");
                break;
        }
    }, [stripPosition])

    return (
    <ul    
        className={`coordinate-strip ${isHorizontal ? 'horizontal' : ''}`}
        style={{...position}}
    >
        {coordinates.map((value) => 
            <li key={value}>
                {value}
            </li>
        )}
        
    </ul>

  )
}

export default CoordinateStrip;