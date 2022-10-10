import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Facebook } from "../assets/media/meta.svg";
import { ReactComponent as Discord } from "../assets/media/discord.svg";
import { ReactComponent as Tiktok } from "../assets/media/tiktok.svg";
import { ReactComponent as Instagram } from "../assets/media/instagram.svg";
import CKI_Logo from "../assets/images/cki_logo.png";

export default function Footer() {
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

const Wrapper = styled.footer`
  margin-top: 30px;
  margin-bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 10px;

  @media (max-width: 450px) {
    justify-content: space-around;
  }
`;

const Row = styled.div`
  margin: ${props => props?.aligin ? "0 auto" : 0};

  @media (max-width: 400px) {
    width: 100%;
    margin-bottom: 10px;
  }

  @media (max-width: 450px) {
    margin: 0;
  }
`;

const HeadingRow = styled.div`
  @media (max-width: 450px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const Legal = styled.div`
  text-align: center;
  text-transform: uppercase;
  margin-top: 10px;
  font-size: 12px;
`;

const StyledAnchor = styled.a`
  color: ${(props) => props.theme.hue.gold};
  text-decoration: none;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  & > svg {
    fill: ${(props) => props.theme.hue.gold};
    width: 20px;
    margin-right: 10px;
  }
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.hue.blue};
  text-decoration: none;

  & > h3 {
    margin-bottom: 25px;
    margin-block-start: 0;
  }

  &:hover {
    color: ${(props) => props.theme.hue.gold};
  }
`;

const Logo = styled.img`
  display: block;
  max-height: 86px;
  max-width: 86px;
  text-transform: capitalize;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-bottom: 10px;
`;

const Heading = styled.div`
  color: ${(props) => props.theme.hue.gold};
  font-size: 20px;
  text-transform: capitalize;
  margin: 0;
`;

const Subheading = styled.h3`
  color: ${(props) => props.theme.hue.blue};
  margin-block-start: 0;
`;
