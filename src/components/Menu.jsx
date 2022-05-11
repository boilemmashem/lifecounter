import React, {useState} from 'react'
import styled from 'styled-components'
import {Settings} from './Settings'


const StyledMenuModal = styled.div`
    // Modal container
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    // Modal contents
    .menu {
        background: white;
        height: 10rem;
        width:80%;
        margin: 3rem auto 3rem;
        border-radius: 0.25rem;
    }
`
const MenuModal = (props) => {
    return (
        <StyledMenuModal onClick={props.onClick}>
            <div className='menu' onClick={e => e.stopPropagation()}>
                <Settings 
                    menuOpen={props.menuOpen}
                    setMenuOpen={props.setMenuOpen}
                />
            </div>
        </StyledMenuModal>
    )
}



const StyledMenu = styled.div``
export const Menu = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <StyledMenu>
            <button onClick={() => toggleMenuOpen()}>MENU</button>
            {menuOpen ? 
                <MenuModal 
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                    onClick={() => {setMenuOpen(false)}}/> 
                : null}
        </StyledMenu>
    )
}