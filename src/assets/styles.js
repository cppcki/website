import { createGlobalStyle } from "styled-components";

export const DefaultTheme = {
  hue: {
    black: "#333333",
    gold: "#B1953A",
    blue: "#004B85",
    gray: "#ececec"
  }
}

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0 auto;
    color: ${props => props.theme.hue.black};
    font-family: "Roboto", sans-serif;
    * {
      box-sizing: border-box;
    }
  }
`;