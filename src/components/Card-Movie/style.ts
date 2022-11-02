import styled from "styled-components";

interface CardMovieProps {
    pointer: boolean
}

export const CardMovie = styled.div<CardMovieProps>`
    position: relative;
    width: 110px;
    height: 160px;
    transition: all .5s;
    cursor: ${({pointer}) => pointer && "pointer"};
    >img {
        width: 110px;
        height: 160px;
        position: absolute;
        top: 0;
        left: 0;
    }
    >h2{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 110px;
        opacity: 0;
        text-align: center;
        font-weight: bold;
        font-size: 2rem;
        padding: 5px 0;
        text-shadow: 5px 5px #000;
        color: white;
        background: linear-gradient(to bottom, transparent, black);
        transition: all .8s;
    }
    > div {
        position: absolute;
        width: 100%;
        height: max-content;
        top: 0;
        padding: 2px 5px;
        display: flex;
        justify-content: space-between;
        > button {
            font-size: 3rem;
            cursor: pointer;
            border: none;
            background-color: transparent;
        }
        > button:nth-child(1) {
            color: blue;
        }
        > button:nth-child(2) {
            color: red;
        }
    }
    :hover{
        transform: scale(1.3);
        z-index: 5;
        >h2{
            opacity: 1;
        }
    }
`