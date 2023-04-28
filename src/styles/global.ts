import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme['white-300']};
        font-family: "Roboto", sans-serif;
        line-height: ${(props) => props.theme['line-height-default']};
    }

    button {
        background: transparent;
        outline: none;
        border: none;
    }
`
