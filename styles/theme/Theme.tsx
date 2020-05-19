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
        widthPadding:'15%',
        headerPadding:'10px'
    },
    margin: {
        cardMargin:'15px',
    },
    boxShadow: '0px 3px 5px -1px rgba(196,172,196,1)'
}

export const Theme:React.FC = ({children}) => {
    return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
    </ThemeProvider>

    )
}
