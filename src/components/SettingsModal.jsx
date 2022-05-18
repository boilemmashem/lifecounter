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
export const SettingsModal = () => {
    // Get app settings from App context
    const settings = React.useContext(SettingsContext);


    if(settings.settingsOpen) {
        return (
            <StyledSettingsModal>
                <menu>
                    <button onClick={() => settings.setSettingsOpen(false)}>close settings</button>
                    <div>
                        <label>Keep screen awake</label><input type="checkbox" />
                    </div>
                    <div>
                        <label>Fullscreen Mode</label><input type="checkbox" />
                    </div>
                    <div>
                        <label>Landscape mode<br /><small>Rotate the board 90&deg;</small></label><input type="checkbox" />
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