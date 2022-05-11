import React, {useState} from 'react'
import styled from 'styled-components'

const StyledPlayer = styled.div`
    
`

export const Player = (props) => {
    const [playerLifeCount, setplayerLifeCount] = useState(20);
    const [playerInfectCount, setPlayerInfectCount] = useState(0);
    const [playerCmdrCount, setPlayerCmdrCount] = useState(0)
    const [playerName, setPlayerName] = useState(props.defaultPlayerName);

    const handlePlayerName = (e) => {
        setPlayerName(e.target.value)
    }

    return (
        <StyledPlayer>
            <input type="text" value={playerName} onChange={(e) => handlePlayerName(e)} />
            <button onClick={() => setplayerLifeCount(playerLifeCount - 1)}>- 1</button>
            Sup, player 1. You have { playerLifeCount } life
            Your starting life is {props.lifeTotal}
        </StyledPlayer>
    )
}