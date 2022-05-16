import React, {useState} from 'react'
import styled from 'styled-components'
import {getContrastColor} from '../data/getColor'


// TODO Pass player props into background
const StyledPlayer = styled.section`
    background: ${props => props.playerColor};
    color: ${props => props.contrastColor};
`
export const Player = (props) => {
    const [playerLifeTotal, setPlayerLifeTotal] = useState(props.startingLifeTotal);
    const [playerName, setPlayerName] = useState(props.defaultPlayerName);
    const [playerColor, setPlayerColor] = useState(props.playerColor)

    const addPlayerLife = (num) => {
        setPlayerLifeTotal(playerLifeTotal + num)
    }

    return (
        <StyledPlayer className={`player${props.playerNo}`} playerColor={playerColor} contrastColor={getContrastColor(playerColor)}>
            <div>
                <button className="lifeTotalMinus" onClick={() => addPlayerLife(-1)}>-1</button>
                <span>{playerLifeTotal}</span>
                <button className="lifeTotalPlus" onClick={() => addPlayerLife(1)}>+1</button>
            </div>
            <div>
                <input type="text" className="playerName" value={playerName} 
                    onChange={(e) => setPlayerName(e.target.value)}
                />
            </div>
        </StyledPlayer>
    )
}