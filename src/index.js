import React from "react";
import ReactDOM from "react-dom";
import { 
  Route, 
  Routes,
  BrowserRouter
} from "react-router-dom";

import { 
  Home,
  About,
  Resources,
  Join
} from "./pages";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/join" element={<Join/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  root
);