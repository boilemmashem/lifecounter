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
        display: flex;
        flex-direction: column;
        background: white;
        padding: 2vh 5vw;
        max-width: 80vw;
        max-height: 75vh;
        border-radius: 0.5rem;
        box-shadow: 0 0 20px black;
        h1 {
            font-size: 10vw;
            color: #333;
            text-align: center;
            font-weight: bold;
            letter-spacing: -3.5px;
        }
        label {
            font-size: 4vw;
            display: inline-block;
        }
        select#newGamePlayerCount {
            flex: 1;
        }
        select#newGamePlayerCount, input#newGameStartingLifeTotal {
            margin-left: 1rem;
            background: none;
            display: inline-block;
            border: 2px solid rgba(0,0,0,0.2);
            border-radius: 0.25rem;
            font-size: 3vw;
        }

        .btnNewGameStart {
            background: rgba(163, 230, 222, 1);
            border: 4px solid rgba(0,0,0,0.1);
            border-radius: 0.25rem;
            padding: 0.5rem 1rem;
            font-size: 1.25rem;
            margin: 0.75rem auto 0;
            text-transform: uppercase;
            color: rgba(0,0,0,0.6);
            font-weight: bold;
        }

        main {
            flex: 1;
            div {
                display: flex;
                margin: 0 0 1rem;
            }
        }
    }

    footer {
        margin-top: 2rem;
        color: rgba(0,0,0,0.2);
        font-weight: bold;
        text-align: center;
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
                    <main>
                        <h1>LifeCounter</h1>
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
                    </main>
                    <footer>
                        MH
                    </footer>
                </div>
            </StyledNewGame>
        )
    }

}