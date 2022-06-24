import React from "react";
import ReactDOM from "react-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
      <HelmetProvider>
        <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
        </Helmet>
        <GlobalStyle/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/resources" element={<Resources/>}/>
            <Route path="/join" element={<Join/>}/>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  </React.StrictMode>,
  root
);