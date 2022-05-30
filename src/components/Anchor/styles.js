import styled from "styled-components";

export const Container = styled.div`
  & > a:hover {
    color: ${props => props.theme.hue.blue};
  }
  & a:hover > svg {
    fill: ${props => props.theme.hue.blue};
  }
  & > a {
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    text-decoration: none;
    font-size: 18px;
    color: ${props => props?.fill ? props.fill : props.theme.hue.black};
    & > svg {
      width: 18px;
      height: 18px;
      fill: ${props => props?.fill ? props.fill : props.theme.hue.black};
      margin-left: 5%;
    }
  }
`;