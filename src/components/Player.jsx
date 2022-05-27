import React, {useState} from 'react'
import styled from 'styled-components'
import { ColorSelector } from './ColorSelector'
import { useLongPress } from '../hooks/use-long-press'


const StyledPlayer = styled.section`
    background: ${props => props.playerColor};
    color: ${props => props.contrastColor};
    transition: background 1s;
    display: flex;
    flex-direction: column;

    .playerLifeArea {
        display: flex;
        justify-content: center;
        gap: 1rem;
        padding: 2vw;
        flex: 1;
        div {
            display: flex;
            flex-direction: column;
            justify-content: center ;
            align-items: center;
            flex: 2;
        }
    }

    .lifeTotal {
        font-size: ${props => props.landscapeMode ? '10vh' : '10vw'};
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .playerName {
        color: ${props => props.contrastColor};
        flex: 0.25;
        border: none;
        background: none;
        text-align: center;
        display: block;
        width: 100%;
        font-size: ${props => props.landscapeMode ? '3vh' : '4vw'};

        white-space: nowrap;
        overflow: hidden;

    }
    
    .lifeButton {
        border: 2px solid ${props => props.contrastColor === 'black' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'};
        border-radius: 0.75rem;
        background: none;
        flex: 1;
        font-size: ${props => props.landscapeMode ? '5vh' : '6vw'};
        color: ${props => props.contrastColor === 'black' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)'};;
        &:active {
            border: 2px solid rgba(255,255,255, 0.3);
        }
    }

    .playerOptionColor {
        flex: 0.25;
        display: flex;
    }

    .colorButton{
        color: ${props => props.contrastColor === 'black' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)'};
        border: none;
        margin: 0 auto;
        width: 35%;
        background: 0;
        font-size: ${props => props.landscapeMode ? '2vh' : '2vw'};
    }

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
        <StyledPlayer className={`player${props.playerNo}`} playerColor={playerBGColor} contrastColor={playerContrastColor} landscapeMode={props.landscapeMode}>
            <div className="playerLifeArea">
                <button
                    className="lifeButton subtract"
                    {...subtractBtnHandlers}
                >
                    -
                </button>
                <span className="lifeTotal">{playerLifeTotal}</span>
                <button
                    className="lifeButton add"
                    {...btnHandlers}
                >
                    +
                </button>
            </div>
            {/* Hide the player name if the colorSelector is open */}
            {colorSelectorOpen ? '' : 
                <input type="text" className="playerName" value={playerName} 
                    onChange={(e) => setPlayerName(e.target.value)}
                />
            }
            <ColorSelector 
                isOpen={colorSelectorOpen} 
                setPlayerBGColor={(e) => setPlayerBGColor(e)}
                setPlayerContrastColor={(e) => setPlayerContrastColor(e)}
                toggleColorSelector={() => toggleColorSelector()}
            />
        </StyledPlayer>
    )
}