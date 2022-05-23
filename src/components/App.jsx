import React, { useState } from 'react'
import styled from 'styled-components'
import {NewGameModal} from './NewGameModal'
import {Player} from './Player'
import { getRandomColor } from '../helpers/getColor'
import { SettingsModal } from './SettingsModal'

import { WakeLock } from '../helpers/WakeLock'

// Create a context to hold global settings
export const SettingsContext = React.createContext();

const StyledApp = styled.div`
  .playerArea.playerCount1 { 
    display: flex; 
    flex-direction: column;
    height: 100vh;
    section { height: 100%; }
  }
  .playerArea.playerCount2 { 
    display: flex;
    flex-direction: column;
    height: 100vh;
    section { flex: 1 }
  }
  .playerArea.playerCount3 { 
    display: flex;
    flex-flow: row wrap;
    height: 100vh;
    section { flex-basis: 50% }
    section:last-child {flex-basis: 100%}
  }
  .playerArea.playerCount4 { 
    display: flex;
    flex-flow: row wrap;
    height: 100vh;
    section { flex-basis: 50% }
  }
  .menu.playerCount2, .menu.playerCount3, .menu.playerCount4  {
    position: fixed;
    top: 50%;
    left: 50%;
    border-radius: 100rem;
    border: none;
  }
`
export function App() {
  
  const [playerCount, setPlayerCount] = useState(0)
  const [startingLifeTotal, setStartingLifeTotal] = useState(40)
  const [newGameOpen, setNewGameOpen] = useState(true)
  const [settingsOpen, setSettingsOpen] = useState(false)

  const [landscapeMode, setLandscapeMode] = useState(false);
  const [fullscreenMode, setFullscreenMode] = useState(false);
  const [wakeLockMode, setWakeLockMode] = useState(false);
  
    // Enable wakeLockMode for supported devices
    let wakeLockSupport = true;
    if(!WakeLock()) {
      wakeLockSupport = false;
    }
    WakeLock(wakeLockMode);

  
  const addPlayers = (playerCount) => {
    let playersArr = []
    let chosenColors = []

    const getNewPlayerColor = () => {
      let newColor = getRandomColor();
      // If newColor has already been chosen, execute a recursive call to select another
      if(chosenColors.includes(newColor[0])) {
        return getNewPlayerColor();
      }
      // colour has not been selected before so push it to the list and return it
      chosenColors.push(newColor[0]);
      return newColor;
    }

    for(let i = 1; i <= playerCount; i++) {
      
      playersArr.unshift(
        <Player
        startingLifeTotal={startingLifeTotal} 
        defaultPlayerName={`Player ${i}`}
        playerNo={i}
        playerColors={getNewPlayerColor()}
        key={`player${i}`} 
        />
        )
      }
    return playersArr;
  }

  return (
    <StyledApp>
      <SettingsContext.Provider value={{
        playerCount, setPlayerCount, startingLifeTotal, setStartingLifeTotal, newGameOpen, setNewGameOpen, settingsOpen, setSettingsOpen, landscapeMode, setLandscapeMode, fullscreenMode, setFullscreenMode, wakeLockMode, setWakeLockMode
      }}>
        <NewGameModal/>
        <SettingsModal wakeLockSupport={wakeLockSupport}/>
      </SettingsContext.Provider>
      <main className={`playerArea playerCount${playerCount}`}>
        {addPlayers(playerCount)}
      </main>
      <button className={`menu playerCount${playerCount}`} onClick={() => setSettingsOpen(true)}>menu</button>
    </StyledApp>
  );
}
