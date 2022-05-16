import React, { useState } from 'react'
import styled from 'styled-components'
import {NewGameModal} from './NewGameModal'
import {Player} from './Player'
import { getRandomColor } from '../data/getColor'

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
    let chosenColors = []

    // TODO fix this so it returns a new value each time
    const getNewPlayerColor = () => {
      let newColor = getRandomColor();
      // If newColor has already been chosen return a different one
      if(chosenColors.includes(newColor)) {
        getNewPlayerColor();
        chosenColors.push(newColor);
        return newColor;
      }
      chosenColors.push(newColor); // add it to the list
      return newColor;
    }
    // end TODO

    for(let i = 1; i <= numOfPlayers; i++) {
      
      playersArr.push(
        <Player
        startingLifeTotal={startingLifeTotal} 
        defaultPlayerName={`Player ${i}`}
        playerNo={i}
        playerColor={getNewPlayerColor()}
        key={`player${i}`} 
        />
        )
      }
    console.log(chosenColors);
    return playersArr;
  }

  return (
    <StyledApp>
      <SettingsContext.Provider value={{
        playerCount, setPlayerCount, startingLifeTotal, setStartingLifeTotal, newGameOpen, setNewGameOpen
      }}>
        <NewGameModal/>
      </SettingsContext.Provider>
      <main className="playerArea">
        {addPlayers(playerCount)}
      </main>
    </StyledApp>
  );
}
