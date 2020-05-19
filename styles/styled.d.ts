import 'styled-components'

declare module 'style-components' {
    export interface DefaultTheme {
        color: {
            primary:string,
            secondary:string,
            background:string,
        },
        padding:{
            headerPadding:string,
            widthPadding:string,
        },
        margin: {
            cardMargin:string,
        },
        boxShadow: string
    }
}