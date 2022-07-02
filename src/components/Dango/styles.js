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

