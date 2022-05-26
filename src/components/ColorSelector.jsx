import React from 'react'
import styled from 'styled-components'
import Colors from '../data/colors.json'

const StyledColorSelector = styled.div`
    button {
        display: inline-block;
        border: none;
        width: 1.5rem;
        height: 1.5rem;
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