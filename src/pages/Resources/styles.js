import styled from "styled-components";

export const Main = styled.div`
  max-width: 1440px;
  margin: auto;
`;

export const Container = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5rem;
  padding: 5px;
`;

export const Title = styled.h2`
  font-family: "Permanent Marker", cursive;
  align-items: center;
  text-align: center;
  text-transform: capitalize;
  font-size: 35px;
`;

export const Box = styled.div`
  border-radius: 10px;
  width: 300px;
  height: 200px;
  padding: 12;
  width: 300px;
  position: relative;
  text-align: left;
`;

export const ResourceImg = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  filter: brightness(50%);
`;

export const BoxContents = styled.div`
  position: absolute;
  top: 8px;
  & > p {
    position: absolute;
    color: white;
    left: 10px;
    font-size: 23px;
    width: 200px;
    font-family: "Permanent Marker";
  }
  & > a {
    font-weight: bold;
    text-decoration: none;
    text-transform: capitalize;
    text-align: center;
    & > button:hover {
      color: ${(props) => props.theme.hue.gold};
    }
  }
`;

export const BoxButton = styled.button`
  cursor: pointer;
  height: 30px;
  border: none;
  width: 120px;
  border-radius: 5px;
  color: black;
  text-align: center;
  position: absolute;
  background-color: white;
  top: 140px;
  left: 10px;
`;
