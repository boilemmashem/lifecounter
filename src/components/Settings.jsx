import React from 'react'
import styled from 'styled-components'
import { SettingsContext } from './App'


const StyledSettings = styled.div`
    
`
export const Settings = (props) => {
    const contextValue = React.useContext(SettingsContext);


    const saveChanges = (props) => {
        // Get fetch the values from the input boxes and store them in the Settings state.
        // Store the new values into localstorage
        const settingsLifeTotal = parseInt(document.getElementById("settingsLifeTotal").value)
        const settingsPlayerCount = parseInt(document.getElementById("settingsPlayerCount").value)

        contextValue.setLifeTotal(settingsLifeTotal);
        window.localStorage.setItem("lifeTotal", settingsLifeTotal)

        contextValue.setPlayerCount(settingsPlayerCount)
        window.localStorage.setItem("playerCount", settingsPlayerCount)
    }

    const closeMenu = () => {
        props.setMenuOpen(!props.menuOpen);
    }


    return (
        <StyledSettings>
            <button onClick={() => closeMenu()}>Close Menu</button>
            <menu>
                <li>
                    <label htmlFor="settingsLifeTotal">Starting Life total</label>
                    <input id="settingsLifeTotal" defaultValue={contextValue.lifeTotal}></input>
                </li>
                <li>
                    <label htmlFor="settingsPlayerCount">Number of Players: </label>
                    <select id="settingsPlayerCount" defaultValue={contextValue.playerCount}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </li>
            </menu>
            <button onClick={() => {saveChanges(); closeMenu()}}>Save &amp; Close</button>
        </StyledSettings>
    )
}