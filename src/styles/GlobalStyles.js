import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0px;
        padding: 0px;
    }

    .content-wrap {
        padding-bottom: 200px;
    }

    .example {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
`
