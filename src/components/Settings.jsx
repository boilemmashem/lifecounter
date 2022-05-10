import React from 'react'
import styled from 'styled-components'

const StyledSettings = styled.div`
    
`

export const Settings = (props) => {

    const changePlayerCount = (num) => {
        props.setPlayerCount(num.target.value)
    }

    return (
        <StyledSettings>
            <menu>
                <li>
                    <label htmlFor="playerCount">Number of Players: </label>
                    <input id="playerCount" value={props.playerCount} onChange={(num) => changePlayerCount(num)}/>
                </li>
                <li>
                    <label htmlFor="lifeTotal">Starting life total: </label>
                    <input id="lifeTotal" />
                </li>
            </menu>
        </StyledSettings>
    )
}