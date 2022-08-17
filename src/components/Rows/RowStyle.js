import styled from "styled-components";

export const RowContainer = styled.div`
    margin-left: 40px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const RowTitle = styled.h2`
    margin-top: 30px;
    ${({ isLargeRow }) => isLargeRow && `
        margin-top: 0px;
    `}
`

export const RowPosters = styled.div`
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding:  20px 0;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const Poster = styled.img`
    width: 100%;
    max-height: 150px;
    object-fit: contain;
    margin-right: 20px;
    transition: transform 450ms;
    border-radius: 4px;
    &:hover {
        transform: scale(1.08);
    }
    ${({ isLargeRow }) => isLargeRow && `
        max-height: ${'250px'};
        &:hover {
            transform: scale(1.09);
        }
    `}
`