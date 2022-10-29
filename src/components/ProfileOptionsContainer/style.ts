import styled from "styled-components"

export const OptionsContainerDiv = styled.div`
    position: relative;
    top: -60px;
    padding: 6px;
`

export const OptionDiv = styled.div`
    width: 300px;
    height: 40px;
    padding: 0;
    margin: auto;
    padding: 200px;
    background-color: var(--gray500);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.6s;
    @media (max-width: 350px ){
        width: 200px;
    }

     &:hover{
        background-color: var(--gray800);
        cursor: pointer;
        >p{
            color: var(--primary);
        }
     }
    >p{
        font-size: 2.2rem;
        font: bold;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color: var(--gray600);
    }
`