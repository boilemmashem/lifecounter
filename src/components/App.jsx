import React, { useState } from 'react'
import styled from 'styled-components'
import {NewGameModal} from './NewGameModal'
import {Player} from './Player'
import {PlayerArea} from './PlayerArea'
import { getRandomColor } from '../helpers/getColor'
import { SettingsModal } from './SettingsModal'

import { WakeLock } from '../helpers/WakeLock'

// Create a context to hold global settings
export const SettingsContext = React.createContext();

const StyledApp = styled.div`
// app styles
  margin: 0;
  overflow: hidden;
  .wrapper.landscapetrue {
    transform: rotate(90deg);
    transform-origin:bottom left;
    position:absolute;
    top: -100vw;
    left: 0;
    height:100vw;
    width:100vh;
    overflow:auto;
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


  return (
    <StyledApp>
      <div className={`wrapper landscape${landscapeMode}`}>
        <SettingsContext.Provider value={{
          playerCount, setPlayerCount, startingLifeTotal, setStartingLifeTotal, newGameOpen, setNewGameOpen, settingsOpen, setSettingsOpen, landscapeMode, setLandscapeMode, fullscreenMode, setFullscreenMode, wakeLockMode, setWakeLockMode
        }}>
          <NewGameModal/>
          <SettingsModal wakeLockSupport={wakeLockSupport}/>
        </SettingsContext.Provider>
        <PlayerArea playerCount={playerCount} startingLifeTotal={startingLifeTotal} className={`playerArea playerCount${playerCount}`} />
        <button className={`menu playerCount${playerCount}`} onClick={() => setSettingsOpen(true)}>menu</button>
        </div>
    </StyledApp>
  );
}
