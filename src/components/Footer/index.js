import React from "react";

import {
  Wrapper,
  Container,
  HeadingRow,
  Row,
  Logo,
  Legal,
  Col,
  Subheading,
  Heading,
  StyledLink,
  StyledAnchor
} from "./styles";

import { ReactComponent as Facebook } from "../../assets/media/meta.svg";
import { ReactComponent as Discord } from "../../assets/media/discord.svg";
import { ReactComponent as Tiktok } from "../../assets/media/tiktok.svg";
import { ReactComponent as Instagram } from "../../assets/media/instagram.svg";
import CKI_Logo from "../../assets/images/cki_logo.png";

export function Footer() {
  return (
    <Wrapper>
      <Container>
        <HeadingRow>
          <StyledLink to="/">
            <Logo src={CKI_Logo} alt="Circle K International Logo" />
            <Heading>Circle K</Heading>
            <Subheading>Cal Poly Pomona</Subheading>
          </StyledLink>
        </HeadingRow>
        <Row aligin="center">
          <Col>
            <Subheading>
              contact us
            </Subheading>
            <StyledAnchor
              href="https://instagram.com/cppcki"
              target="_blank"
              rel="noreferrer">
              <Instagram/>
              instagram
            </StyledAnchor>
            <StyledAnchor
              href="https://facebook.com/cppcki"
              target="_blank"
              rel="noreferrer">
              <Facebook/>
              facebook
            </StyledAnchor>
            <StyledAnchor
              href="https://tiktok.com/@cppcki"
              target="_blank"
              rel="noreferrer">
              <Tiktok/>
              tiktok
            </StyledAnchor>
            <StyledAnchor
              href="https://discord.com/invite/SBPrv8Yy8B"
              target="_blank"
              rel="noreferrer">
              <Discord/>
              discord
            </StyledAnchor>
          </Col>
        </Row>
        <Row>
          <Col>
            <StyledLink to="/">
              <h3>home</h3>
            </StyledLink>
            <StyledLink to="/about">
              <h3>about us</h3>
            </StyledLink>
            <StyledLink to="/resources">
              <h3>resources</h3>  
            </StyledLink>
            <StyledLink to="/Join">
              <h3>join</h3>
            </StyledLink>
          </Col>
        </Row>
      </Container>
      <Legal>
        &copy; {new Date().getFullYear()} circle k international at cal poly pomona · all rights reserved
      </Legal>
    </Wrapper>
  );
}
