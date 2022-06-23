import React from "react";
import { Header } from "../";
import {
  Container,
  Row,
  Link,
  Logo,
  Center,
  Col,
  Subheading,
  Heading,
  TextLink,
  Icon,
  TextHeight,
} from "./styles";

import { ReactComponent as Meta } from "../../assets/media/meta.svg";
import { ReactComponent as Discord } from "../../assets/media/discord.svg";
import { ReactComponent as Tiktok } from "../../assets/media/tiktok.svg";
import { ReactComponent as Instagram } from "../../assets/media/instagram.svg";
import CKI_Logo from "../../assets/images/cki_logo.png";

function HyperLink(props) {
  const Icon = props.icon;
  const link = props.href;
  return (
    <li>
      <Link href={link} target="_blank">
        <Icon />
        <div>{props.children}</div>
      </Link>
    </li>
  );
}

export function Footer() {
  return (
    <div className="main-footer">
      <Container>
        <Row>
          {/*column1 */}
          <ul className="list-unstyled">
            <Logo src={CKI_Logo} alt="Circle K International Logo" />
            <Heading>Circle K</Heading>
            <Subheading>Cal Poly Pomona</Subheading>
          </ul>
        </Row>
        {/* Column2 */}
        <Row>
          <Col>
            <Subheading>
              <li> Contact Us </li>
            </Subheading>
            <p>
              <Instagram fill="#B1953A" />
              <TextLink href="https://Instagram.com" target="_blank">
                cppcki
              </TextLink>
            </p>
            <p>
              <Meta fill="#B1953A" />
              <TextLink href="https://Facebook.com" target="_blank">
                cppcki
              </TextLink>
            </p>
            <p>
              <Tiktok fill="#B1953A" />
              <TextLink href="https://Tiktok.com" target="_blank">
                cppcki
              </TextLink>
            </p>
            <p>
              <Discord fill="#B1953A" />
              <TextLink href="https://Discord.com" target="_blank">
                cppcki
              </TextLink>
            </p>
          </Col>
        </Row>
        {/* Column3 */}
        <Row>
          <Col>
            <Subheading>
              <TextHeight>
                <p>About Us</p>
                <p>Events</p>
                <p>Resources</p>
                <p>Join</p>
              </TextHeight>
            </Subheading>
          </Col>
        </Row>
      </Container>
      <Row>
        <Center>
          &copy;{new Date().getFullYear()} CIRCLE K INTERNATIONAL AT CAL POLY
          POMONA · All Rights Reserved
        </Center>
      </Row>
    </div>
  );
}
