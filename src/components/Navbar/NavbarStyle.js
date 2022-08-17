import styled from "styled-components";

export const Nav = styled.div`
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px;
    height: 40px;
    z-index: 1;

    display: flex;
    justify-content: space-between;

    // Animations
    transition-timing-function: ease-in;
    transition: all 0.5s;

    ${({ show })  => show && `
        background-color: #111;
    `
    }
`

export const LeftNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.img`
    position: fixed;
    top: 0;
    left: 40px;
    width: 140px;
    object-fit: contain;
`

export const List = styled.ul`
    position: fixed;
    left: 200px;
    display: flex;
    gap: 3rem;

    @media screen and (max-width: 992px) {
        display: none;
    }
`

export const ListItem = styled.li`
    list-style: none;
    font-size: 1.3em;
    color: white;
    cursor: pointer;
    &:hover {
        color: lightgray;
    }
`

export const Avatar = styled.img`
    position: fixed;
    /* top: 25px; */
    right: 40px;
    width: 45px;
    object-fit: contain;

    @media screen and (max-width: 992px) {
        padding: 0 1rem;
    }
`

export const MenuBlock = styled.div`
    display: none;
    position: fixed;
    left: 200px;

    @media screen and (max-width: 992px) {
        display: block;
    }
`

export const MenuButton = styled.button`
    background-color: transparent;
    color: white;
    font-size: 1em;
    border: none;
    cursor: pointer;
    transition: transform 450ms;
    &:hover {
        transform: scale(1.08);
    }

`

export const ListMenu = styled.div`
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 90px;
    left: 110px;
    width: 200px;
    height: 300px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-top: white 2px solid;
`

export const Triangulo = styled.div`
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
    position: absolute;
    top: -10px;
    left: 110px;
`