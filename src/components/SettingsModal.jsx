import React from 'react'
import styled from 'styled-components'
import { SettingsContext } from './App'
import {fullscreenToggle, fullscreenListener } from '../helpers/fullscreenHelper'

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

    menu {
        display: flex;
        flex-direction: column;
        --form-control-color: rebeccapurple;
        --form-control-disabled: #959495;
        .settingsOption {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem 0;
        }
        label {
            font-size: 1.05rem;
            width: 100%;
            &.disabledFeature {
                color: #555;
                cursor: not-allowed;
                small {
                    color: #888;
                }
            }
        }
        input[type="checkbox"] {
            /* Add if not using autoprefixer */
            -webkit-appearance: none;
            /* Remove most all native input styles */
            appearance: none;
            /* For iOS < 15 */
            background-color: var(--form-background);
            /* Not removed via appearance */
            margin: 0.1rem 0 0;

            font: inherit;
            color: currentColor;
            width: 1.15em;
            height: 1.15em;
            border: 0.15em solid currentColor;
            border-radius: 0.15em;
            transform: translateY(-0.075em);

            display: grid;
            place-content: center;
        }

            input[type="checkbox"]::before {
            content: "";
            width: 0.65em;
            height: 0.65em;
            clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
            transform: scale(0);
            transform-origin: bottom left;
            box-shadow: inset 1em 1em var(--form-control-color);
        }

            input[type="checkbox"]:checked::before {
            transform: scale(1);
        }

            input[type="checkbox"]:disabled {
            --form-control-color: var(--form-control-disabled);

            color: var(--form-control-disabled);
            cursor: not-allowed;
        }
    }

    .settingsBtnContainer {
        display: flex;
        gap: 1rem;
        .closeSettingsBtn {
            background: #A3E6DE;
            border: 4px solid rgba(0,0,0,0.1);
            border-radius: 0.25rem;
            padding: 0.5rem 1rem;
            font-size: 1rem;
            font-weight: bold;
            margin: 0.75rem auto 0;
        }
    
        .resetGameBtn {
            background: none;
            border: 4px solid #FF6B6B20;
            border-radius: 0.25rem;
            padding: 0.5rem 1rem;
            font-size: 1rem;
            margin: 0.75rem auto 0;
            color: #FF6B6B;
            font-weight: bold;
        }
    }

`
export const SettingsModal = (props) => {
    // Get app settings from App context
    const settings = React.useContext(SettingsContext);
    

    function handleFullscreenCheckbox(e) {
        settings.setFullscreenMode(!settings.fullscreenMode)
        fullscreenToggle(e.target.checked)
    }
    // Listen for fullscreen closing
    fullscreenListener(settings.setFullscreenMode)

    if(settings.settingsOpen) {
        return (
            <StyledSettingsModal>
                <menu>
                    <h2>Settings</h2>
                    {props.wakeLockSupport ? 
                        <div className="settingsOption">
                            <label htmlFor="wakeLockMode">Keep screen awake</label>
                            <input id="wakeLockMode"type="checkbox" onChange={() => settings.setWakeLockMode(!settings.wakeLockMode)} checked={settings.wakeLockMode}/> 
                        </div>
                        : 
                        <div className="settingsOption">
                            <label className='disabledFeature'>Keep screen awake<br />
                                <small>This feature is not available on your browser.</small>
                            </label>
                            <input type="checkbox" disabled/>
                        </div>
                    }
                    <div className="settingsOption">
                        <label htmlFor="fullscreenMode">Fullscreen Mode</label>
                        <input id="fullscreenMode" type="checkbox" onChange={(e) => handleFullscreenCheckbox(e)} checked={settings.fullscreenMode} />
                    </div>
                    <div className="settingsOption">
                        <label htmlFor="landscapeMode">Landscape mode</label>
                        <input id="landscapeMode" type="checkbox" onChange={() => settings.setLandscapeMode(!settings.landscapeMode)} checked={settings.landscapeMode} />
                    </div>
                    <div className="settingsBtnContainer">
                        <button className="resetGameBtn" onClick={() => window.location.reload(true)}>Reset Game</button>
                        <button className="closeSettingsBtn" onClick={() => settings.setSettingsOpen(false)}>Exit Settings</button>
                    </div>
                </menu>
            </StyledSettingsModal>
        )
    }
}