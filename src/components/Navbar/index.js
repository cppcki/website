import { useState } from "react";
import { Link } from "react-router-dom";

import { Header } from "components";

import { 
  Container,
  Content,
  Heading 
} from "./styles";

export function Navbar(props) {
  const { color } = props;

  // `isOpen` getter
  // `setIsOpen(newValue)` setter
  const [isOpen, setIsOpen] = useState(false);

  function handleOnClick() {
    // alert("cat was here.");
    if (isOpen){
      setIsOpen(false);
    } else{
      setIsOpen(true);
    }
    // setIsOpen(!isOpen);
  }

  return (
    <Container>
      <Header/>
      <Heading> yes</Heading>
      <button onClick={handleOnClick}>toggle</button>
      {isOpen &&
        <Content color={color}>
          <li> 
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <a href="https://forms.gle/iBqpsS2ngCRVSnsn6">Join</a>
          </li>
        </Content>
      }
    </Container>
  );
}