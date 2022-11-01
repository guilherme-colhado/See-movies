import styled from "styled-components";

export const Movie = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const MovieMain = styled.main`
    background-color: #000;
    padding: 0;
    box-shadow: 3px -2px 33px 28px rgba(0, 0, 0, 1);
    font-family: 'Inter', sans-serif;
    > figure, > figure > img {
        width: 100%;
    }
    > div{
        padding: 0 12px;
        > h2 {
            color: var(--primary);
            font-size: 2.5rem;
            font-weight: bold;
        }
        > h3 {
            color: var(--gray600);
            font-size: 2rem;
            font-weight: 700
        }
        > div {
            margin: 5px 0 21px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            button {
                padding: 20px 0;
                background-color:var(--gray500);
                color: var(--gray600);
                display: flex;
                justify-content: center;
                gap: 3px;
                font-size: 2.5rem;
                cursor: pointer;
                border: none;
                border-radius: 10px;
            }
        }
        > p {
            padding: 0 12px;
            color: white;
            font-size: 2.5rem;
            font-weight: 400;
            text-align: justify;
            margin-bottom: 10px;
        }
    }
`