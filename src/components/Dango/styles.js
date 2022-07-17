//Beta.reactjs.org

import styled from "styled-components";

export const Container = styled.div`
  /* background-color: red; */
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Left = styled.div`
  /* background-color: orange; */
  width: 40%;
  min-width: 300px;
  height: 400px;
  margin-left: 40px;
  margin-top:100px;
  align-items: center;
  justify-content: center;
`;

export const Right = styled.div`
  /* background-color: yellow; */
  flex: 1;
  height: 300px;
  margin-left: 50px;
`;

export const ImageStack = styled.div`
  content: ' ';
  display: table;
  clear: both;
`;
export const ImageStackTop = styled.div`
  float: left;
  width: 75%;
  margin-right: -100%;
  padding-left: 10%;
  position: relative;
  z-index: 2;
`;

export const ImageStackMiddle = styled.div`
  float: left;
  width: 66%;
  margin-right: -100%;
  padding-top: 20%;
  padding-left: 5%; 
  position: relative;
  z-index: 1;
`;

export const ImageStackBottom = styled.div`
  float: right;
  width: 50%;
  padding-top: 10%;
`;

