import { createGlobalStyle } from "styled-components";

export const DefaultTheme = {
  hue: {
    black: "#333333",
    gold: "#B1953A",
    blue: "#004B85"
  }
}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    max-width: 1920px;
    margin: 0 auto;
    color: ${props => props.theme.hue.black};
    font-family: "Roboto", sans-serif;
    * {
      box-sizing: border-box;
    }
  }
`;