import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --THEME_COLOR_01:hsl(204, 77.30%, 25.90%);
        --THEME_COLOR_02:hsl(204, 57.30%, 45.90%);
        --THEME_COLOR_03:hsl(204, 86.30%, 85.70%);
        --THEME_COLOR_04:hsl(201, 23.90%, 13.90%);
        --COLOR_GRAY-100: hsl(0, 0%, 10%);
        --COLOR_GRAY-300: hsl(0, 0%, 25%);
        --COLOR_GRAY-500: hsl(0, 0%, 50%);
        --COLOR_GRAY-700: hsl(0, 0%, 75%);
        --COLOR_GRAY-900: hsl(0, 0%, 90%);
        --COLOR_RED-300:hsl(0, 78.50%, 49.20%);
        --COLOR_RED-900:hsl(0, 44.30%, 81.00%);
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
