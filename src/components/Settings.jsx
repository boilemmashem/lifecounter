import React from 'react'
import styled from 'styled-components'
import { SettingsContext } from './App'


const StyledSettings = styled.div`
    
`
export const Settings = () => {
    const contextValue = React.useContext(SettingsContext);


    const saveChanges = () => {
        //Get fetch the values from the input boxes and store them in the Settings state.
        contextValue.setLifeTotal(document.getElementById("settingsLifeTotal").value)
        contextValue.setPlayerCount(document.getElementById("settingsPlayerCount").value)
    }


    return (
        <StyledSettings>
            <menu>
                <li>
                    <label htmlFor="settingsLifeTotal">Starting Life total</label>
                    <input id="settingsLifeTotal" defaultValue={contextValue.lifeTotal}></input>
                </li>
                <li>
                    <label htmlFor="settingsPlayerCount">Number of Players: </label>
                    <input id="settingsPlayerCount" defaultValue={contextValue.playerCount}/>
                </li>
            </menu>
            <button onClick={() => saveChanges()}>Save Changes</button>
        </StyledSettings>
    )
}