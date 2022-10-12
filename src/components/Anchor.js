import { Link } from "react-router-dom";

import { ReactComponent as Chevron } from "../assets/images/chevron.svg";

import styled from "styled-components";

export default function Anchor(props) {
  const { text, href } = props;

  if (!href)
    return new Error("Must provide href prop.");

  if (href.includes("http://", 0) || href.includes("https://", 0)) {
    return (
      <Container {...props}>
        <a href={href}>
          {text}
          <Chevron/>
        </a>
      </Container>
    );
  } else {
    return (
      <Container {...props}>
        <Link to={href}>
          {text}
          <Chevron/>
        </Link>
      </Container>
    );
  }
}

Anchor.defaultProps = {
  text: "learn more"
}

const Container = styled.div`
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