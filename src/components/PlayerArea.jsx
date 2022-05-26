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
    section:nth-child(1) {
      border-bottom: var(--border-thickness) solid var(--border-color);
    }
    section:nth-child(2) {
      border-top: var(--border-thickness) solid var(--border-color);
    }
  }
  &.playerCount3 {
    flex-flow: row wrap;
    section { flex-basis: 50%; } // wrap after 2 sections
    section:nth-child(1) {
      border-right: var(--border-thickness) solid var(--border-color);
      border-bottom: var(--border-thickness) solid var(--border-color);
    }
    section:nth-child(2) {
      border-left: var(--border-thickness) solid var(--border-color);
      border-bottom: var(--border-thickness) solid var(--border-color);
    }
    section:nth-child(3) {
      border-top: var(--border-thickness) solid var(--border-color);
    }
  }
  &.playerCount4 {
    flex-flow: row wrap;
    section { flex-basis: 50%; } // wrap after 2 sections
    section:nth-child(1) {
      border-right: var(--border-thickness) solid var(--border-color);
      border-bottom: var(--border-thickness) solid var(--border-color);
    }
    section:nth-child(2) {
      border-left: var(--border-thickness) solid var(--border-color);
      border-bottom: var(--border-thickness) solid var(--border-color);
    }
    section:nth-child(3) {
      border-right: var(--border-thickness) solid var(--border-color);
      border-top: var(--border-thickness) solid var(--border-color);
    }
    section:nth-child(4) {
      border-left: var(--border-thickness) solid var(--border-color);
      border-top: var(--border-thickness) solid var(--border-color);
    }
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

