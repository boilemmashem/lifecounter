import React, {useState} from 'react'
import styled from 'styled-components'

const StyledPlayer = styled.div`
    
`

export const Player = (props) => {
    const [playerLifeCount, setplayerLifeCount] = useState(props.lifeTotal);
    // const [playerInfectCount, setPlayerInfectCount] = useState(0);
    // const [playerCmdrCount, setPlayerCmdrCount] = useState(0)
    const [playerName, setPlayerName] = useState(props.defaultPlayerName);

    const handlePlayerName = (e) => {
        setPlayerName(e.target.value)
    }

    return (
        <StyledPlayer>
            <div>
                <input type="text" value={playerName} onChange={(e) => handlePlayerName(e)} />
            </div>
            <div>
                <button onClick={() => setplayerLifeCount(playerLifeCount - 1)}>- 1</button>
                { playerLifeCount } life
                <button onClick={() => setplayerLifeCount(playerLifeCount + 1)}>+ 1</button>
            </div>
        </StyledPlayer>
    )
}