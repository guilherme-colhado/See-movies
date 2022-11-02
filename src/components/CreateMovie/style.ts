import styled from "styled-components";

export const FormCreateMovie = styled.form`
    background-color: var(--gray900);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 15px 10px;
    > div {    
        position: relative;
        > h2 {
            color: #fff;
            font-size: 2.5rem;
            text-align: center;
        }
        > button {
            background-color: transparent;
            border: none;
            color: white;
            position: absolute;
            font-size: 3rem;
            top: 0;
            right: 0;
            cursor: pointer;
        }
    } 
    > button {
        border: none;
        border-radius: 10px;
        padding: 10px;
        font-size: 2.5rem;
        color: var(--primary);
        background-color: var(--gray600);
        cursor: pointer;
    }
`