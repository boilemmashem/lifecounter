import React, {useState} from 'react'
import styled from 'styled-components'

const StyledPlayer = styled.section`
    
`
export const Player = (props) => {
    

    const [playerLifeTotal, setPlayerLifeTotal] = useState(props.startingLifeTotal);
    const [playerName, setPlayerName] = useState(props.defaultPlayerName);

    const addPlayerLife = (num) => {
        setPlayerLifeTotal(playerLifeTotal + num)
    }

    return (
        <StyledPlayer>
            <div>
                <button className="lifeTotalMinus" onClick={() => addPlayerLife(-1)}>-1</button>
                <span>{playerLifeTotal}</span>
                <button className="lifeTotalPlus" onClick={() => addPlayerLife(1)}>+1</button>
            </div>
            <input type="text" className="playerName" value={playerName} 
                onChange={(e) => setPlayerName(e.target.value)}
            />
        </StyledPlayer>
    )
}