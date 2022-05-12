import React, { useState } from 'react'
import styled from 'styled-components'
import {NewGameModal} from './NewGameModal'
import {Player} from './Player'

// Create a context to hold global settings
export const SettingsContext = React.createContext();

const StyledApp = styled.div`
`
export function App() {
  
  const [playerCount, setPlayerCount] = useState(0)
  const [startingLifeTotal, setStartingLifeTotal] = useState(40)
  const [newGameOpen, setNewGameOpen] = useState(true)

  const addPlayers = (numOfPlayers) => {
    let playersArr = []
    for(let i = 1; i <= numOfPlayers; i++) {
      playersArr.push(
        <Player
          startingLifeTotal={startingLifeTotal} 
          defaultPlayerName={`Player ${i}`}
          playerNo={i}
          key={`player${i}`} 
        />
      )
    }
    return playersArr;
  }

  return (
    <StyledApp>
      <SettingsContext.Provider value={{
        playerCount, setPlayerCount, startingLifeTotal, setStartingLifeTotal, newGameOpen, setNewGameOpen
      }}>
        <NewGameModal/>
      </SettingsContext.Provider>
      {addPlayers(playerCount)}
    </StyledApp>
  );
}
