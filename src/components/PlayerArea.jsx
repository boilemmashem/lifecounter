import React from 'react'
import styled from 'styled-components'
import {Player} from './Player'
import { getRandomColor } from '../helpers/getColor'


const StyledPlayerArea = styled.main`
  --border-color: #444;
  --border-thickness: 2.5px;
  display: flex;
  height: 100%;
  section {
    flex: 1;
  }
  &.playerCount2 {
    flex-direction: column;
    section {
      height: 50%;
      border-top: var(--border-thickness) solid var(--border-color);
    }
  }
  &.playerCount3 {
    section { height: 50% }
    flex-flow: row wrap;
    section { 
      flex-basis: 50%; // wrap after 2 sections
      border-top: var(--border-thickness) solid var(--border-color);
    } 
    section:nth-child(1) {
      border-left: var(--border-thickness) solid var(--border-color);
    }
    section:nth-child(2) {
      section { height: 50% }
      border-right: var(--border-thickness) solid var(--border-color);
    }
  }
  &.playerCount4 {
    flex-flow: row wrap;
    section { 
      flex-basis: 50%; // wrap after 2 sections
      height: 50%;
      border-top: var(--border-thickness) solid var(--border-color);
    }
    section:nth-child(1) { // player 4
      border-left: var(--border-thickness) solid var(--border-color);
    }
    section:nth-child(2) { // player 3
      border-right: var(--border-thickness) solid var(--border-color);
    }
    section:nth-child(3) { // player 2
      border-right: var(--border-thickness) solid var(--border-color);
    }
    section:nth-child(4) { // player 1
      border-left: var(--border-thickness) solid var(--border-color);
    }
  }

  // 2 Player Mode - Player 2 is upside down
  &.playerCount2 .player2 {
    transform: rotate(180deg);
  }
  // 3 Player Mode - Player 2 and 3 are upside down
  &.playerCount3 .player2, &.playerCount3 .player3 {
    transform: rotate(180deg);
  }
  // 4 Player Mode - Player 3 and 4 are upside down
  &.playerCount4 .player3, &.playerCount4 .player4 {
    transform: rotate(180deg);
  }

`
export const PlayerArea = (props) => {
    
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
            startingLifeTotal={props.startingLifeTotal} 
            defaultPlayerName={`Player ${i}`}
            playerNo={i}
            playerColors={getNewPlayerColor()}
            landscapeMode={props.landscapeMode}
            key={`player${i}`} 
            />
            )
          }
        return playersArr;
    }


    return (
        <StyledPlayerArea className={props.className}>
            {addPlayers(props.playerCount)}
        </StyledPlayerArea>
    )
}

