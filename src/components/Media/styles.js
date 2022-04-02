import styled from "styled-components";

export const Container = styled.ul`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  padding-inline-start: 0;
  & > li {
    margin-right: 20px;
    list-style-type: none;
  }
  & > li:hover {
    fill: ${props => props.theme.hue.blue};
  }
`;