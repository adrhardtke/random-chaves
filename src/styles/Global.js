import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;        
    }

    body {
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        background: #F5F5F5;
        min-height: 100vh;
        box-sizing:border-box;
    }
`

export default GlobalStyle