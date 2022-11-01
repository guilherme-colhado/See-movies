import styled from 'styled-components';
export const VideoModal = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #20202050;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    z-index: 1000;
    button {
        background: transparent;
        border: none;
        color: white;
        font-size: 3rem;
        position: fixed;
        cursor: pointer;
        top: 20px;
        right: 40px;
    }
`