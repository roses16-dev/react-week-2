import { createGlobalStyle } from "styled-components";
import './miniReset.css'

const GlobalStyle = createGlobalStyle`

body {
    min-width: 800px;
    max-width: 1200px;
    margin: auto;
}
`

export default GlobalStyle