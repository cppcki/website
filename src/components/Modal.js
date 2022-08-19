import React, { useState } from "react";
import styled from "styled-components";
import { Col } from "./Footer/styles";

const MOBILE_THRESHOLD = 900;

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
                    Compete with your fellow Dangos to find the best pairing for
                    your Mentor/Mentee! Are you ready?
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

  @media (max-width: ${MOBILE_THRESHOLD}px) {
    border-radius: 10px;
    justify-content: center;
    width: 500px;
    height: 400px;
    align-items: center;
  }
`;

export const Container = styled.div`
  padding: 14px 28px;
  width: 80%;
  margin-bottom: 25%;
`;

export const TitleContent = styled.div`
  line-height: 1;

  & > h2 {
    color: ${(props) => props.theme.hue.blue};
  }

  & > h4 {
    color: ${(props) => (props.primary ? "white" : "#333333")};
    font-size: 12px;
  }
`;

export const Description = styled.p`
  color: ${(props) => (props.primary ? "white" : "#333333")};
  font-size: 14px;
  background: #fdfdfd;
`;

export const Tags = styled.button`
  //Note: assuming these tags will act like category link, a button is recommended to go to that category.
`;

export const Image = styled.img`
  overflow: hidden;
  display: block;
  border-radius: 10px 0px 0px 10px;
  //max-width: 600px;
  //min-width: 300px;
  //height: 400px;
  //min-height: 350px;
  //max-height: 500px;
  transform: translate(0%, 0%);

  @media (max-width: ${MOBILE_THRESHOLD}px) {
    height: 70px;
    width: 50px;
    border-radius: 10px 10px 0px 0px;
  }
`;

export const Row = styled.div`
  flex-direction: row;
  display: flex;
  //margin-bottom: 10px;
  align-items: center;
  @media (max-width: ${MOBILE_THRESHOLD}px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  //width: 500px;
  display: flex;
  justify-content: center;
  @media (max-width: ${MOBILE_THRESHOLD}px) {
    //width: 100px;
    //height: 70px;
  }
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
  left: 55%;
  @media (max-width: ${MOBILE_THRESHOLD}px) {
    width: 30%;
  }
`;
