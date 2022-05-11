import React, {useState} from 'react'
import styled from 'styled-components'
import { Player } from './Player';
// import { Settings } from './Settings';
import { Menu } from './Menu';

export const SettingsContext = React.createContext();


const StyledApp = styled.div`
`
export function App() {

  // Hook contexts for settings
  // Pull in settings from localstorage as the initial value
  const [lifeTotal, setLifeTotal] = useState(localStorage.getItem('lifeTotal') ? localStorage.getItem('lifeTotal'): 20);
  const [playerCount, setPlayerCount] = useState(localStorage.getItem('playerCount') ? localStorage.getItem('playerCount'): 1);

  const makePlayers = (numOfPlayers) => {
    let playersArr = [];
    for(let i = 1; i <= numOfPlayers; i++) {
      playersArr.push(
        <Player
          lifeTotal={lifeTotal}
          defaultPlayerName={`Player ${i}`}
          key={`player${i}`}
        />
      )
    }
    return playersArr;
  }


  return (
    <StyledApp>
      <SettingsContext.Provider value={{lifeTotal, setLifeTotal, playerCount, setPlayerCount}}>
        <Menu/>
      </SettingsContext.Provider>
      {makePlayers(playerCount)}
    </StyledApp>
  );
}
