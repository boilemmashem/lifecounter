import { useEffect, useState } from "react"

export const useFullscreen = (isEnabled) => {
    const [isFullscreen, setIsFullscreen] = useState(false)

    // useEffect enables us to setIsFullscreen based on the conditional input from the property isEnabled
    useEffect(() => {
        isEnabled ? setIsFullscreen(true) : setIsFullscreen(false)
    },[isEnabled])

    const page = document.documentElement
    if(isEnabled) {
        page.requestFullscreen()
    } else {
        document.exitFullscreen();
    }



    if (isFullscreen) {
        return console.log(`fullscreen is ${isFullscreen}`)
    } else {
        return console.log(`fullscreen is ${isFullscreen}`)
    }
}