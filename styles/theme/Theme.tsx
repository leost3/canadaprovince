import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../global'


const theme = {
    color:{
        primary:'#ffffff',
        secondary:'#347523',
        background:'#e73555'
    },
    padding: {
        contentPadding:'0px 35px'
    }
}

export const Theme:React.FC = ({children}) => {
    return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
    </ThemeProvider>

    )
}
