//Beta.reactjs.org

import styled from "styled-components";

export const Container = styled.div`
  background-color: red;
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
  background-color: green;
  width: 40%;
  height: 400px;
`;

export const Right = styled.div`
  background-color: blue;
  flex: 1;
  height: 300px;
`;