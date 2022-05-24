import React, {useState} from 'react'
import styled from 'styled-components'
import { ColorSelector } from './ColorSelector'
import { useLongPress } from '../hooks/use-long-press'


const StyledPlayer = styled.section`
    background: ${props => props.playerColor};
    color: ${props => props.contrastColor};
`
export const Player = (props) => {
    const [playerLifeTotal, setPlayerLifeTotal] = useState(props.startingLifeTotal);
    const [playerName, setPlayerName] = useState(props.defaultPlayerName);
    const [playerBGColor, setPlayerBGColor] = useState(props.playerColors[0])
    const [playerContrastColor, setPlayerContrastColor] = useState(props.playerColors[1])
    const [colorSelectorOpen, setIsColorSelectorOpen] = useState(false)

    const {btnHandlers} = useLongPress({
        onClick: () => lifeHandler(1),
        onLongPress: () => lifeHandler(10)
    });
    const {btnHandlers: subtractBtnHandlers} = useLongPress({
        onClick: () => lifeHandler(-1),
        onLongPress: () => lifeHandler(-10)
    })

    function lifeHandler(num) {
        setPlayerLifeTotal(playerLifeTotal + num)
    }
    function toggleColorSelector() {
        setIsColorSelectorOpen(!colorSelectorOpen)
    }


    return (
        <StyledPlayer className={`player${props.playerNo}`} playerColor={playerBGColor} contrastColor={playerContrastColor}>
            <div className="playerLifeArea">
                <button
                    {...subtractBtnHandlers}
                >
                    -1
                </button>
                <span>{playerLifeTotal}</span>
                <button
                    {...btnHandlers}
                >
                    +1
                </button>
            </div>
            <div>
                <input type="text" className="playerName" value={playerName} 
                    onChange={(e) => setPlayerName(e.target.value)}
                />
            </div>
            <ColorSelector 
                isOpen={colorSelectorOpen} 
                setPlayerBGColor={(e) => setPlayerBGColor(e)}
                setPlayerContrastColor={(e) => setPlayerContrastColor(e)}
                toggleOpen={() => toggleColorSelector()}
            />
            {colorSelectorOpen ? null : <button onClick={() => toggleColorSelector()}>colors</button>}
        </StyledPlayer>
    )
}