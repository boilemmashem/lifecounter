import React, { useState } from 'react'
import styled from 'styled-components'
import {NewGameModal} from './NewGameModal'
import {PlayerArea} from './PlayerArea'
import { SettingsModal } from './SettingsModal'
import { MenuButton } from './MenuButton'

import { WakeLock } from '../helpers/WakeLock'

// Create a context to hold global settings
export const SettingsContext = React.createContext();

const StyledApp = styled.div`

  margin: 0;
  .wrapper.landscapetrue {
    transform: rotate(90deg);
    transform-origin:bottom left;
    position:absolute;
    top: -100vw;
    left: 0;
    height:100vw; /* Height is width when in landscape */
    width:100vh;
    overflow:auto;
  }
  .wrapper.landscapefalse{
    height: 100vh;
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
        <MenuButton className={`menu playerCount${playerCount}`} onClick={() => setSettingsOpen(true)} landscapeMode={landscapeMode}/>
        </div>
    </StyledApp>
  );
}
