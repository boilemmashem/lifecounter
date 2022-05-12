import React, {useState} from 'react'
import styled from 'styled-components'
import {saveLocal, loadLocal} from '../localHelper'

const StyledPlayer = styled.section`
    
`
export const Player = (props) => {
    
    // Check to see if there's any playerName in localStorage, if so load the settings key into hasCustomPlayerName 
    let hasCustomPlayerName = null;
    if(loadLocal().hasOwnProperty(`Player ${props.playerNo}`)) {
        hasCustomPlayerName = loadLocal()[`Player ${props.playerNo}`]
    }

    const [playerLifeTotal, setPlayerLifeTotal] = useState(props.startingLifeTotal);
    const [playerName, setPlayerName] = useState(hasCustomPlayerName ? hasCustomPlayerName : props.defaultPlayerName);

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
                onChange={(e) => {setPlayerName(e.target.value); saveLocal(props.defaultPlayerName, e.target.value)}}
            />
        </StyledPlayer>
    )
}