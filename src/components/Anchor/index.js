import { Link } from "react-router-dom";

import { Container } from "./styles";

import { ReactComponent as Chevron } from "../../assets/images/chevron.svg";

export function Anchor(props) {
  const { text, href } = props;

  // if (!href)
  //   return new Error("Must provide href prop.");

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