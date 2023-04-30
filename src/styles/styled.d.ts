import 'styled-components'

declare module 'styled-components'{
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string,
            secundary: string,
    
            background: string,
            text: string,
            bg_nav: string,
            text_nav: string,
        }
    }
}
    