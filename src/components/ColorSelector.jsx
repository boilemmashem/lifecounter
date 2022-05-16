import React from 'react'
import styled from 'styled-components'
import Colors from '../data/colors.json'

const StyledColorSelector = styled.div`
    button {
        border: 2px solid rgba(255,255,255, 0.2);
    }
`
export const ColorSelector = () => {
    
    function addColorOptions(colors) {
        const numberOfColors = Object.values(colors).length
        let colorOptions = []
        for(let i = 0; i < numberOfColors; i++ ) {
            colorOptions.push(
                <button className='colorOption' key={`color${i}`} style={{background: Object.values(colors)[i][0]}}>
                    {Object.values(colors)[i][0]}
                </button>
            )
        }
        return colorOptions;
    }


    return (
        <StyledColorSelector>
            {addColorOptions(Colors)}
        </StyledColorSelector>
    )
}