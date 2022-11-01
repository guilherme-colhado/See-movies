import { createGlobalStyle } from "styled-components";
import background from "../assets/backgroundMobile.png";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        background-image: url(${background});
        min-height: 100vh;
        width: 100%;
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: center;
        ::-webkit-scrollbar {
            width: 10px;
            background: black;
        }
        ::-webkit-scrollbar-thumb {
            background: var(--primary); 
            border-radius: 10px;
        }

    }
    :root{
        font-size: 8px;
        --primary: #ffd800;
        --secondary: #faff00;
        --gray500: #dedede;
        --gray600: #8e8e8e;
        --gray800: #323232;
    }
`;
