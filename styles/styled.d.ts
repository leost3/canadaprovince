import 'styled-components'

declare module 'style-components' {
    export interface DefaultTheme {
        color: {
            primary:string,
            secondary:string,
            background:string,
        },
        contentPadding:string,
    }
}