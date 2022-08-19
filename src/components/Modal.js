import React, { useState } from "react";
import styled from "styled-components";
import { Col } from "./Footer/styles";

const MOBILE_THRESHOLD = 800;

const SECOND_THRESHOLD = 450;

export function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <ModalDiv>
          <Overlay onClick={toggleModal} />
          <ModalPosition>
            <ModalContent>
              <Row>
                <Left>
                  <Image
                    src={"https://pbs.twimg.com/media/EtzS4h6XEAk9_PJ.png"}
                    alt="test image"
                  />
                </Left>
                <Container>
                  <TitleContent>
                    <h4>Saturday, November 6, 2022 @ 1pm - 3pm</h4>
                    <h2>Mentor & Mentee Mixer</h2>
                    <h4>The Quad @ Cal Poly Pomona</h4>
                    <hr />
                  </TitleContent>
                  <Description>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </Description>
                </Container>
              </Row>
              <RSVPButton>RSVP</RSVPButton>
              <CloseModal onClick={toggleModal}>X</CloseModal>
            </ModalContent>
          </ModalPosition>
        </ModalDiv>
      )}
    </>
  );
}

export const ModalDiv = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
`;

export const CloseModal = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 7px;
  font-size: 20px;
  border: 0ch;
  background: transparent;
`;

export const BtnModal = styled.button`
  padding: 10px 20px;
  display: block;
  margin: 100px auto 0;
  font-size: 18px;
`;

export const ActiveModal = styled.body`
  & > a.body {
    overflow-y: hidden;
  }
`;

export const ModalPosition = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: ${MOBILE_THRESHOLD}px) {
    top: 50%;
  }
`;

///////////////////////////////

export const ModalContent = styled.div`
  line-height: 1.4;
  background: #fdfdfd;
  border-radius: 10px;
  //max-width: 900px;
  //min-width: 400px;
  //max-height: 500px;
  //min-height: 350px;
  width: 900px;
  height: 500px;

  @media (max-width: ${MOBILE_THRESHOLD}px) {
    border-radius: 10px;
    justify-content: center;
    width: 400px;
    height: 550px;
    align-items: center;
  }

  @media (max-width: ${SECOND_THRESHOLD}px) {
    width: 300px;
    height: 600px;
  }
`;

export const Container = styled.div`
  padding: 14px 28px;
  width: 45%;
  position: absolute;
  left: 55%;

  @media (max-width: ${MOBILE_THRESHOLD}px) {
    width: 80%;
    left: 10%;
    top: 45%;
  }
`;

export const TitleContent = styled.div`
  line-height: 0.4;

  & > h2 {
    color: ${(props) => props.theme.hue.blue};
  }

  & > h4 {
    color: ${(props) => (props.primary ? "white" : "#333333")};
  }

  @media (max-width: ${MOBILE_THRESHOLD}px) {
    font-size: 11px;
  }
`;

export const Description = styled.p`
  color: ${(props) => (props.primary ? "white" : "#333333")};
  font-size: 14px;
  height: 300px;

  @media (max-width: ${MOBILE_THRESHOLD}px) {
    font-size: 10px;
  }
`;

export const Tags = styled.button`
  //Note: assuming these tags will act like category link, a button is recommended to go to that category.
`;

export const Image = styled.img`
  overflow: hidden;
  display: block;
  border-radius: 10px 0px 0px 10px;
  transform: translate(0%, 0%);
  height: 500px;
  width: 500px;

  @media (max-width: ${MOBILE_THRESHOLD}px) {
    height: 250px;
    width: 250px;
    border-radius: 10px;
    margin: 10px;
  }

  @media (max-width: ${SECOND_THRESHOLD}px) {
    height: 230px;
    width: 230px;
  }
`;

export const Row = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  @media (max-width: ${MOBILE_THRESHOLD}px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
`;

export const RSVPButton = styled.button`
  padding: 5px 15px;
  font-size: 14px;
  border-radius: 10px;
  border-width: 2px;
  min-width: 30%;
  max-width: 45%;
  background: ${(props) => props.theme.hue.blue};
  color: ${(props) => (props.primary ? "#333333" : "white")};
  position: absolute;
  top: 85%;
  left: 60%;
  @media (max-width: ${MOBILE_THRESHOLD}px) {
    width: 45%;
    left: 28%;
    top: 90%;
  }

  @media (max-width: ${SECOND_THRESHOLD}px) {
    top: 90%;
  }
`;
