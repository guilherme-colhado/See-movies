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
        min-width: 100vw;
        background-attachment: fixed;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
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
