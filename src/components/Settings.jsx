import React from 'react'
import styled from 'styled-components'
import { SettingsContext } from './App'


const StyledSettings = styled.div`
    
`
export const Settings = () => {
    const contextValue = React.useContext(SettingsContext);


    const saveChanges = () => {
        alert(
            "save changes..."
        )
    }


    return (
        <StyledSettings>
            <menu>
                <li>
                    <label htmlFor="lifeTotal">Starting Life total</label>
                    <input id="lifeTotal" defaultValue={contextValue.lifeTotal}></input>
                </li>
                <li>
                    <label htmlFor="playerCount">Number of Players: </label>
                    <input id="playerCount" defaultValue={contextValue.playerCount}/>
                </li>
            </menu>
            <button onClick={() => saveChanges()}>Save Changes</button>
        </StyledSettings>
    )
}