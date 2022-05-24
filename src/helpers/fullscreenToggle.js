export const fullscreenToggle = (isEnabled) => {
    const page = document.documentElement
    if(isEnabled && document.fullscreenElement === null) {
        page.requestFullscreen()
    } else if (document.fullscreenElement !== null) {
        document.exitFullscreen();
    }
}