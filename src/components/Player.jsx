import React, {useState} from 'react'
import styled from 'styled-components'

const StyledPlayer = styled.div`
    
`

export const Player = () => {
    const [lifeTotal, setLifeTotal] = useState(20);
    const [playerName, setPlayerName] = useState('');

    const handlePlayerName = (e) => {
        setPlayerName(e.target.value)
    }

    return (
        <StyledPlayer>
            <input type="text" value={playerName} onChange={(e) => handlePlayerName(e)} />
            <button onClick={() => setLifeTotal(lifeTotal - 1)}>set the life total</button>
            Sup, player 1. You have { lifeTotal } life
        </StyledPlayer>
    )
}