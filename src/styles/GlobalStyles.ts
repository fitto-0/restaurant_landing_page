import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', 'Roboto', Arial, sans-serif;
    background: linear-gradient(120deg, #0a2342 0%, #e7d7c1 100%);
    color: #e7d7c1;
    min-height: 100vh;
    overflow-x: hidden;
    transition: background 0.5s, color 0.5s;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
