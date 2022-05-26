import React from 'react'
import styled from 'styled-components'
import Colors from '../data/colors.json'

const StyledColorSelector = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 0.8rem;
    padding: 1rem 0;
    button {
        border: 2px solid rgba(255,255,255,0.2);
        width: 2rem;
        height: 2rem;
        border-radius: 10rem;
    }
`
export const ColorSelector = (props) => {

    function addColorOptions(colors) {
        const numberOfColors = Object.values(colors).length
        const colorArr = Object.values(colors)
        let colorOptions = []
        for(let i = 0; i < numberOfColors; i++ ) {
            colorOptions.push(
                <button 
                    className='colorOption' 
                    key={`color${i}`} 
                    style={{background: colorArr[i][0]}}
                    value={[colorArr[i][0], colorArr[i][1]]}
                    onClick={(e) => {
                        props.setPlayerBGColor(e.target.value.substring(0,7)); // Set player's background: ;
                        props.setPlayerContrastColor(e.target.value.substring(8,13)) // set player's contrast color
                        props.toggleColorSelector(); // Close color selection
                    }}
                >
                </button>
            )
        }
        return colorOptions;
    }

    if(props.isOpen) {
        // If the colorSelector is open
        return (
            <div className='playerOptionColor'>
                <StyledColorSelector>
                    {addColorOptions(Colors)}
                </StyledColorSelector>
            </div>
        )
    } else {
        return (
            <div className='playerOptionColor'>
                <button onClick={() => props.toggleColorSelector()} className="colorButton">colors</button>
            </div>
        )
    }
}