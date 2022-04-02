import styled from "styled-components";

export const Container = styled.div`
  & > a:hover {
    color: ${props => props.theme.hue.blue};
  }
  &:hover > a svg {
    fill: ${props => props.theme.hue.blue};
  }
  & > a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 18px;
    color: ${props => props.theme.hue.black};
    width: 100%;
    & > svg {
      fill: ${props => props.theme.hue.black};
      margin-left: 2%;
    }
  }
`;