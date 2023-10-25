import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', system-ui;
  }

  body > #root {
    min-height: 100vh;
    display: grid;
    /* align-items: center; */
    grid-template-rows: auto 1fr auto;
    background-color: #e5e5f7;
    background-size: 20px 20px;
    background-image: radial-gradient(#444cf7 1.40px, #e5e5f7 1.50px);

    @media (width <= 1024px){
      background-size: 25px 25px;
      background-image: radial-gradient(#444cf7 1px, #e5e5f7 1px);
    }
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
  
`
export default GlobalStyles
