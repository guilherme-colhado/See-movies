import styled from "styled-components";

export const Register = styled.div`
    padding-top: 70px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    >header {
        margin: 0 auto;
        >figure {
            width: 150px;
            >img {
                width: 100%;
            }
        }
    }
`

export const Info = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    p {
        font-size: 2.5rem;
        font-weight: 700;
        span {
            color: var(--primary)
        }
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin: 0 auto;
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