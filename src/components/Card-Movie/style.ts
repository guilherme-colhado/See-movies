import styled from "styled-components";

export const CardMovie = styled.div`
    position: relative;
    width: 110px;
    height: 160px;
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
        transition: all .5s;
    }
    :hover>h2{
        opacity: 1;
    }
`