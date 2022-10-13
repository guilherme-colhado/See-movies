import styled from "styled-components";

export const InputDiv = styled.div`
    position: relative;
    width: 300px;
    height: 40px;
    margin: 10px auto;
    background-color: var(--gray500);
    border-radius: 16px;
    
    >input {
        background-color: transparent;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        outline: none;
        border: none;
        z-index: 0;
        border-radius: 16px;
        padding: 8px;
    }

    >label {
        font-size: 2.5rem;
        position: absolute;
        top: 50%;
        left: 8px;
        transform: translateY(-50%);
        z-index: 2;
        color: var(--gray600);
        transition: all .5s;
    }

    >input:not(:placeholder-shown)+label, >input:focus+label {
        top: 0;
        left: 16px;
        font-size: 2rem;
        color: #111;
    }
`