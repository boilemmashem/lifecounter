export const fullscreenToggle = (isEnabled) => {
    const page = document.documentElement
    if(isEnabled && document.fullscreenElement === null) {
        page.requestFullscreen()
    } else if (document.fullscreenElement !== null) {
        document.exitFullscreen();
    }
}

export function fullscreenListener(stateSetter) {
    // Listen for escape and F11 keypress to exit fullscreen
    function exitFullscreen(e) {
        if(e.key === 'F11' || e.key === 'Escape') {
            stateSetter(false)
            fullscreenToggle(false)
        }
    }
    document.addEventListener('keydown', e => exitFullscreen(e))
    // The browser / OS tools can be used to exit fullscreen mode. We must check to see if fullscreen is active so we can set the correct state
    document.addEventListener('fullscreenchange', e => {
        if (!document.fullscreenElement) {
            // Runs when fullscreen is closed
            stateSetter(false)
            fullscreenToggle(false)
        }
    })
}
