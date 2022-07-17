import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex: 1;
    padding-top: 150px;
    justify-content: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const Left = styled.div`
  /* background-color: orange; */
  max-width: 300px;
  height: 400px;
  align-items: center;
  justify-content: center;  
`;

export const Middle = styled.div`
  /* background-color: red; */
  max-width: 300px;
  height: 400px;
  align-items: center;
  margin-left: 5%;
  justify-content: center;  
`;

export const Right = styled.div`
  /* background-color: yellow; */
  max-width: 300px;
  height: 400px;
  align-items: center;
  margin-left: 5%;
  justify-content: center;  
`;

export const Describe = styled.p`
  text-align: center;
`;
