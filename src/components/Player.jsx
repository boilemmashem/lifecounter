import React, {useState} from 'react'
import styled from 'styled-components'

const StyledPlayer = styled.section`
    
`
export const Player = (props) => {
    const [playerLifeTotal, setPlayerLifeTotal] = useState(props.startingLifeTotal)

    return (
        <StyledPlayer>
            <div>
                <button className="lifeTotalMinus">-1</button>
                <span>{props.startingLifeTotal}</span>
                <button className="lifeTotalPlus">+1</button>
            </div>
            <input type="text" className="playerName" defaultValue={props.defaultPlayerName}/>
        </StyledPlayer>
    )
}