import React from "react";
import ReactDOM from "react-dom";
import { 
  Route, 
  Routes,
  BrowserRouter
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { 
  GlobalStyle, 
  DefaultTheme 
} from "./assets/styles";

import { 
  Home,
  About,
  Resources,
  Join
} from "./pages";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/resources" element={<Resources/>}/>
          <Route path="/join" element={<Join/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  root
);