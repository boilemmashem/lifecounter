import React from 'react'
import styled from 'styled-components'

const StyledPlayer = styled.section`
    
`
export const Player = (props) => {
    return (
        <StyledPlayer>
            <button>-1</button>
            <input type="text" className="playerName" defaultValue={props.defaultPlayerName}/>
            <button>+1</button>
        </StyledPlayer>
    )
}