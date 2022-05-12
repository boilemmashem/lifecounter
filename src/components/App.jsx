import React, { useState } from 'react'
import styled from 'styled-components'
import {NewGameModal} from './NewGameModal'
import {Player} from './Player'

// Create a context to hold global settings
export const SettingsContext = React.createContext();

const StyledApp = styled.div`
`
export function App() {

  // Fetch settings from previous session in localStorage
  const getSettingsObj = JSON.parse(localStorage.getItem('settingsObj'))
  const [settingsObj, setSettingsObj] = useState(getSettingsObj ? getSettingsObj : {})

  
  const [playerCount, setPlayerCount] = useState(settingsObj[0]? settingsObj.playerCount : 1)
  const [startingLifeTotal, setStartingLifeTotal] = useState(settingsObj[0]? settingsObj.startingLifeTotal : 40)
  const [newGameOpen, setNewGameOpen] = useState(true)

  const addPlayers = (numOfPlayers) => {
    let playersArr = []
    for(let i = 1; i <= numOfPlayers; i++) {
      playersArr.push(
        <Player
          lifeTotal={startingLifeTotal} 
          defaultPlayerName={`Player ${i}`}
          key={`player${i}`} 
        />
      )
    }
    return playersArr;
  }

  return (
    <StyledApp>
      <SettingsContext.Provider value={{
        playerCount, setPlayerCount, startingLifeTotal, setStartingLifeTotal, newGameOpen, setNewGameOpen, settingsObj, setSettingsObj
      }}>
        <NewGameModal settingsObj={settingsObj}/>
      </SettingsContext.Provider>
      {addPlayers(playerCount)}
    </StyledApp>
  );
}
