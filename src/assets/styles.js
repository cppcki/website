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
    margin: 0;
    padding: 0;
<<<<<<< HEAD
    /* max-width: 1920px;
    margin: 0 auto; */
=======
    /* max-width: 1440px; */
    margin: 0 auto;
>>>>>>> 3397cb9 (mobile navbar)
    color: ${props => props.theme.hue.black};
    font-family: "Roboto", sans-serif;
    * {
      box-sizing: border-box;
    }
  }
`;