import React from "react";
import { Header } from "../";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Logo,
  Center,
  Col,
  Subheading,
  Heading,
  TextLink,
  TextSpace,
  SecondCol,
} from "./styles";

import { ReactComponent as Meta } from "../../assets/media/meta.svg";
import { ReactComponent as Discord } from "../../assets/media/discord.svg";
import { ReactComponent as Tiktok } from "../../assets/media/tiktok.svg";
import { ReactComponent as Instagram } from "../../assets/media/instagram.svg";
import CKI_Logo from "../../assets/images/cki_logo.png";
import { About } from "pages";

export function Footer() {
  return (
    <div className="main-footer" flex-wrap="wrap">
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
            <SecondCol>
              <p>
                <a
                  href="https://Instagram.com"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Instagram fill="#B1953A" height="26px" />
                  <TextLink>cppcki</TextLink>
                </a>
              </p>
              <p>
                <a
                  href="https://Facebook.com"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Meta fill="#B1953A" height="26px" />
                  <TextLink>cppcki</TextLink>
                </a>
              </p>
              <p>
                <a
                  href="https://Tiktok.com"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Tiktok fill="#B1953A" height="26px" />
                  <TextLink>cppcki</TextLink>
                </a>
              </p>
              <p>
                <a
                  href="https://Discord.com"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Discord fill="#B1953A" height="26px" />
                  <TextLink>cppcki</TextLink>
                </a>
              </p>
            </SecondCol>
          </Col>
        </Row>
        {/* Column3 */}
        <Row>
          <Col>
            <Subheading>
              <TextSpace>
                <Link
                  style={{ textDecoration: "none", color: "#004B85" }}
                  to="/About"
                >
                  About Us
                </Link>
              </TextSpace>
              <TextSpace>
                <Link
                  style={{ textDecoration: "none", color: "#004B85" }}
                  to="/Home"
                >
                  Events
                </Link>
              </TextSpace>
              <TextSpace>
                <Link
                  style={{ textDecoration: "none", color: "#004B85" }}
                  to="/Resources"
                >
                  Resources
                </Link>
              </TextSpace>
              <TextSpace>
                <Link
                  style={{ textDecoration: "none", color: "#004B85" }}
                  to="/Join"
                >
                  Join
                </Link>
              </TextSpace>
            </Subheading>
          </Col>
        </Row>
      </Container>
      <Row>
        <Center>
          &copy; {new Date().getFullYear()} CIRCLE K INTERNATIONAL AT CAL POLY
          POMONA · All Rights Reserved
        </Center>
      </Row>
    </div>
  );
}
