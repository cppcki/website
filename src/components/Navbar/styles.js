import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.ul`
  list-style-type: none;
  text-align: right;
  align-items: center;
  max-width: 1920px;
  & > li {
    margin-right: 10px;
    margin-top: 10px;
    & > a {
      color: ${props => props.theme.hue.blue};
      font-weight: bold;
      text-decoration: none;
      text-transform: lowercase;
    }
    & > a:hover {
      color: ${props => props.theme.hue.gold}
    }
  }
`;