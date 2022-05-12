import React, { useState } from 'react'
import styled from 'styled-components'
import {NewGameModal} from './NewGameModal'

// Create a context to hold global settings
export const SettingsContext = React.createContext();


const StyledApp = styled.div`
`
export function App() {

  // Fetch settings from previous session in localStorage
  // const settingsObj = JSON.parse(localStorage.getItem('settingsObj'));

  const [playerCount, setPlayerCount] = useState(1)
  const [startingLifeTotal, setStartingLifeTotal] = useState(40)
  const [newGameOpen, setNewGameOpen] = useState(true)

  return (
    <StyledApp>
      <SettingsContext.Provider value={{
        playerCount, setPlayerCount, startingLifeTotal, setStartingLifeTotal, newGameOpen, setNewGameOpen
      }}>
        <NewGameModal />
      </SettingsContext.Provider>
    </StyledApp>
  );
}
