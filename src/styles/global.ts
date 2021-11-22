import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  *, input, button {
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`
export default GlobalStyle