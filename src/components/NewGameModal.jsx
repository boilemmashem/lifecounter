import React from 'react'
import styled from 'styled-components'
import { SettingsContext } from './App'
import BG40 from '../img/bg40.svg'

const StyledNewGame = styled.div`
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(41, 47, 54, 1);
    background-image: url('${BG40}');
    display: flex;
    justify-content: center;
    align-items: center;
    .newGameSettings {
        background: white;
        max-width: 90%;
    }
`
export const NewGameModal = (props) => {
    // Get app settings from App context
    const settings = React.useContext(SettingsContext)
    
    const startNewGame = () => {
        // Store the new game settings and begin game
        const newGamePlayerCount = parseInt(document.getElementById("newGamePlayerCount").value);
        const newGameStartingLifeTotal = parseInt(document.getElementById("newGameStartingLifeTotal").value);

        settings.setPlayerCount(newGamePlayerCount);
        settings.setStartingLifeTotal(newGameStartingLifeTotal);
        settings.setNewGameOpen(false);
        settings.setWakeLockMode(true);
    }

    if(settings.newGameOpen) {
        return (
            <StyledNewGame>
                <div className="newGameSettings">
                    <h1>Life Counter</h1>
                    <div>
                        <label htmlFor="newGamePlayerCount">Players: </label>
                        <select id="newGamePlayerCount" defaultValue={settings.playerCount}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="newGameStartingLifeTotal">Life Total: </label>
                        <input id="newGameStartingLifeTotal" type="number" defaultValue={settings.startingLifeTotal}/>
                    </div>
                    <div>
                        <button className='btnNewGameStart' onClick={() => startNewGame()}>Start Game</button>
                    </div>
                </div>
            </StyledNewGame>
        )
    }

}