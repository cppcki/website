import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px;
  @media (max-width: 500px) {
    justify-content: center;
  }
`;

export const Content = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 40px;
  max-width: 1920px;
  flex-wrap: wrap;
  padding-inline-start: 0;
  & > li {
    margin-right: 10px;
    margin-top: 10px;
    & > a {
      color: ${p => p?.color ? p.color : p.theme.hue.black};
      font-weight: bold;
      text-decoration: none;
      text-transform: lowercase;
      text-align: center;
    }
    & > a:hover {
      color: ${props => props.theme.hue.gold}
    }
  }
`;