import { useCallback, useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Header from "components/Header";

import { ReactComponent as HamburgerIcon } from "../assets/images/hamburger.svg";

const MOBILE_THRESHOLD = 530;

const disableScroll = () => {
  window.scrollTo(0, 0);
};

export default function Navbar(props) {
  const { color, containerRef, position } = props;

  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [showHamburger, setShowHamburger] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      const { innerWidth: width, innerHeight: height } = window;
      setWindowDimension({
        width,
        height,
      });
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      // Prevent memeory leaks; all event listeners need to be remove if they aren't being used anymore.
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowDimension.width <= MOBILE_THRESHOLD - 1) {
      setShowHamburger(true);
    } else {
      setShowHamburger(false);
      setNavbarOpen(false);
      if (containerRef?.current) {
        containerRef.current.style.transform = `translate(0px)`;
      }
    }

    return () => {
      window.removeEventListener("scroll", disableScroll);
      window.document.body.style.overflow = "";
    };
  }, [windowDimension, containerRef]);

  const handleOnHamburgerToggle = useCallback(() => {
    if (!navbarOpen) {
      setNavbarOpen(true);
      window.document.body.style.overflow = "hidden";
      window.addEventListener("scroll", disableScroll);
      if (containerRef?.current) {
        containerRef.current.style.transform = `translate(200px)`;
      }
    } else {
      setNavbarOpen(false);
      window.document.body.style.overflow = "";
      window.removeEventListener("scroll", disableScroll);
      if (containerRef?.current) {
        containerRef.current.style.transform = `translate(0px)`;
      }
    }
  }, [navbarOpen, containerRef]);

  const NavbarContent = (props) => {
    const { visible } = props;
    return (
      <>
        <Header />
        <HamburgerButton
          onClick={handleOnHamburgerToggle}
          visible={showHamburger}
        >
          <StyledHamburgerIcon fill={color} />
        </HamburgerButton>
        <Content isNavbarOpen={visible} isMobile={showHamburger} color={color}>
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
      </>
    );
  };

  const navbarOverlay = useMemo(() => {
    if (navbarOpen && position !== "absolute") {
      return (
        <OverlayContainer>
          <NavbarContent visible />
        </OverlayContainer>
      );
    }
    return null;
  }, [navbarOpen, position]);

  return (
    <Wrapper>
      <Container position={position}>
        <NavbarContent visible={navbarOpen && position === "absolute"} />
      </Container>
      {navbarOverlay}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const BaseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  justify-items: center;
  padding: 20px;
  width: 100%;
  z-index: 2;
`;

const OverlayContainer = styled(BaseContainer)`
  background-color: white;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid ${(p) => p.theme.hue.gray};
  position: absolute;
  top: 0;
`;

const Container = styled(BaseContainer)`
  position: ${(p) => (p.position ? p.position : "")};
`;

const navbarListingColors = (props) => {
  const { color, isNavbarOpen, theme } = props;
  if (color) {
    if (isNavbarOpen) {
      return theme.hue.blue;
    } else {
      return color;
    }
  } else {
    return theme.hue.black;
  }
};

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
      color: ${(p) => navbarListingColors(p)};
      font-size: ${(p) => (p.isMobile ? "25px" : "inital")};
      font-weight: bold;
      text-decoration: none;
      text-transform: lowercase;
      text-align: center;
    }
    & > a:hover {
      color: ${(props) => props.theme.hue.gold};
    }
  }

  @media (max-width: ${MOBILE_THRESHOLD}px) {
    display: ${(p) => (p.isNavbarOpen ? "block" : "none")};
    width: 100%;
  }
`;

const StyledHamburgerIcon = styled(HamburgerIcon)`
  fill: ${(p) => p?.fill};
  transition: fill 0.5s;

  &:hover {
    fill: ${(props) => props.theme.hue.blue};
  }
`;

const HamburgerButton = styled.button`
  display: ${(p) => (p.visible ? "block" : "none")};
  background-color: transparent;
  border: none;
`;
