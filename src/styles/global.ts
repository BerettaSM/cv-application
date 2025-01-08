import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --THEME_COLOR_01: #0F4C75;
        --THEME_COLOR_02: #3282B8;
        --THEME_COLOR_03: #BBE1FA;
        --THEME_COLOR_04: #1B262C;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
    }

    html,
    body {
        height: 100%;
    }

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        color: var(--THEME_COLOR_01);
        background-color: var(--THEME_COLOR_03);
    }

    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
    }

    #root {
        isolation: isolate;
    }
`;
