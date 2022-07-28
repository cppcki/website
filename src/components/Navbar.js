import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Header } from "components";

import { ReactComponent as HamburgerIcon } from "../assets/images/hamburger.svg";

const MOBILE_THRESHOLD = 530;

export function Navbar(props) {
  const { color, containerRef, position } = props;

  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const [showHamburger, setShowHamburger] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      const { innerWidth: width, innerHeight: height } = window;
      setWindowDimension({
        width,
        height
      });
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.document.body.style.overflow = "";
    }
  }, []);

  useEffect(() => {
    if (windowDimension.width <= MOBILE_THRESHOLD - 1) {
      setShowHamburger(true);
    } else {
      setShowHamburger(false);
    }
  }, [windowDimension]);

  const handleOnHamburgerToggle = useCallback(() => {
    if (containerRef?.current) {
      if (!navbarOpen) {
        setNavbarOpen(true);
        containerRef.current.style.transform = `translate(200px)`;
        window.document.body.style.overflow = "hidden";
      } else {
        containerRef.current.style.transform = `translate(0px)`;
        window.document.body.style.overflow = "";
        setNavbarOpen(false);
      }
    } else {
      if (!navbarOpen) {
        setNavbarOpen(true);
      } else {
        setNavbarOpen(false);
      }
    }
  }, [navbarOpen, containerRef]);

  return (
    <Container position={position}>
      <Header/>
      <HamburgerButton onClick={handleOnHamburgerToggle} visible={showHamburger}>
        <StyledHamburgerIcon fill={color}/>
      </HamburgerButton>
      <Content isNavbarOpen={navbarOpen} isMobile={showHamburger} color={color}>
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
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: ${p => p.position ? p.position : ""};
  flex-wrap: wrap;
  justify-items: center;
  padding: 20px;
  width: 100%;
  z-index: 2;
`;

const Content = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 40px;
  flex-wrap: wrap;
  padding-inline-start: 0;
  & > li {
    margin-right: 10px;
    margin-top: 10px;
    & > a {
      color: ${p => p?.color ? p.isNavbarOpen ? p.theme.hue.blue : p.color : p.theme.hue.black};
      font-size: ${p => p.isMobile ? "25px" : "inital" };
      font-weight: bold;
      text-decoration: none;
      text-transform: lowercase;
      text-align: center;
    }
    & > a:hover {
      color: ${props => props.theme.hue.gold}
    }
  }

  @media (max-width: ${MOBILE_THRESHOLD}px) {
    display: ${p => p.isNavbarOpen ? "block" : "none" };
    width: 100%;
  }
`;

const StyledHamburgerIcon = styled(HamburgerIcon)`
  fill: ${p => p?.fill};
  transition: fill 0.5s;

  &:hover {
    fill: ${props => props.theme.hue.blue}
  }
`;

const HamburgerButton = styled.button`
  display: ${p => p.visible ? "block" : "none"};
  background-color: transparent;
  border: none;
`;