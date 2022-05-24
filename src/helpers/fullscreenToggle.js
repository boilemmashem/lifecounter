export const fullscreenToggle = (isEnabled) => {
    const page = document.documentElement
    if(isEnabled && document.fullscreenElement === null) {
        page.requestFullscreen()
    } else if (document.fullscreenElement !== null) {
        document.exitFullscreen();
    }
}

export const fullscreenListener = () => {
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape' || e.key ==='1') {
            fullscreenToggle(false);
        }
    })
}