import styled from "styled-components";

export const Header = styled.header`
    color: white;
    object-fit: contain;
    height: 668px;
    width: 100vw;
    background-size: cover;
    background-position: center;
    ${({movieImg}) => `
        background-image: url(${movieImg});
    `}
`

export const BannerContent = styled.div`
    margin-left: 30px;
    padding-top: 140px;
    height: 190px;
`

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
`

export const BannerButtons = styled.div`

`

export const Button = styled.button`
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: rgba(51, 51, 51, 0.5);
    &:hover {
        color: #000;
        background-color: #e6e6e6;
        transition: all 0.2s;
    }
`

export const Description = styled.p`
    width: 45rem;
    max-width: 360px;
    height: 80px;
    line-height: 1.3;
    padding-top: 1rem;
    font-size: 0.8rem;
`

export const BannerFade = styled.div`
    height: 21.5rem;
    background-image: linear-gradient(
        transparent,
        rgba(37, 37, 37, 0.61),
        #111
    );
`