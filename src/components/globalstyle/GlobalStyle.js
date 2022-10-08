import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
 box-sizing: border-box;
 text-decoration: none;
}

body {
    min-width: 800px;
    max-width: 1200px;
    margin: auto;
}
`

export default GlobalStyle