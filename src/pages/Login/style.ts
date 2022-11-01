import styled from "styled-components";

export const LoginDiv = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    >header{
        padding: 80px;
    }
`;

export const FormDiv = styled.form`
    display: flex;
    flex-direction: column;
    gap: 4.5rem;
    >div {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    >span{
        display: flex;
        font-size: 2.2rem;
        font: bold;
        gap: 3px;
        >p{
            color: #FAFF00;
            text-shadow: 1px 1px #000;
            &:hover{
                cursor: pointer;
            }
        }
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    >button{
        height: 40px;
        width: 300px;
        outline: none;
        border: 2px solid #FAFF00;
        border-radius: 22px;
        background-color: #000;
        color: #fff;
        font-size: 2.0rem;
        &:hover{
            cursor: pointer;
        }
    }
    >span{
        display: flex;
        align-items: center;
        gap: 2px;
        >label{
            font-size: 1.8rem;
            font: bolder;
        }
    }
`;
