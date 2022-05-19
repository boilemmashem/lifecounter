import React from 'react'
import styled from 'styled-components'
import { SettingsContext } from './App'

const StyledSettingsModal = styled.div`
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.9);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SettingsModal = (props) => {
    // Get app settings from App context
    const settings = React.useContext(SettingsContext);


    if(settings.settingsOpen) {
        return (
            <StyledSettingsModal>
                <menu>
                    <button onClick={() => settings.setSettingsOpen(false)}>close settings</button>
                    {props.wakeLockSupport ? 
                        <div>
                            <label htmlFor="wakeLockMode">Keep screen awake</label>
                            <input id="wakeLockMode"type="checkbox" onChange={() => settings.setWakeLockMode(!settings.screenAwakeMode)} checked={settings.screenAwakeMode}/> 
                        </div>
                        : 
                        <div>
                            <label className='disabledFeature'>Keep screen awake</label>
                            <input type="checkbox" disabled/>
                        </div>
                    }
                    <div>
                        <label htmlFor="fullscreenMode">Fullscreen Mode</label>
                        <input id="fullscreenMode" type="checkbox" onChange={() => settings.setFullscreenMode(!settings.fullscreenMode)} checked={settings.fullscreenMode} />
                    </div>
                    <div>
                        <label htmlFor="landscapeMode">Landscape mode</label>
                        <input id="landscapeMode" type="checkbox" onChange={() => settings.setLandscapeMode(!settings.landscapeMode)} checked={settings.landscapeMode} />
                    </div>
                    <div>
                        <button>Reset Game</button>
                        <button>Save Game</button>
                    </div>
                </menu>
            </StyledSettingsModal>
        )
    }
}