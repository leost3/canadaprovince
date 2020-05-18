import reset from 'react-style-reset/string'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    ${reset};
        
    html {
        box-sizing: border-box;
    }
    *, *:before, *:after {
    box-sizing: border-box;
    }
    body {
        background: white;
    }
`