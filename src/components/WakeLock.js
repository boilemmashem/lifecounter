// Code from https://web.dev/wake-lock/
export const WakeLock = (isEnabled) => {
    if('wakeLock' in navigator && isEnabled) {
        console.log('Wakelock Engaged') 
        const activateWakeLock = async () => {
            let wakeLock = null;
            const requestWakeLock = async () => {
            try {
                wakeLock = await navigator.wakeLock.request();
                wakeLock.addEventListener('release', () => {
                });
            } catch (err) {
                console.error(`${err.name}, ${err.message}`);
            }
            };

            await requestWakeLock();

            // Wakelock will automatically be released when the page loses visibility.
            // So lets turn it back on when the user comes back.
            const handleVisibilityChange = async () => {
                if (wakeLock !== null && document.visibilityState === 'visible') {
                    // console.log('we are visible again');
                    await requestWakeLock();
                }
              };
            document.addEventListener('visibilitychange', handleVisibilityChange);
        }
        activateWakeLock();

          
    } else if('wakeLock' in navigator) {
        console.log('wakeLock is avalible but not turned on')
        return true
    } else {
        console.log('WakeLock not available')
        return false
    }
}