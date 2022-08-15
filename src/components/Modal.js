import React, { useState } from "react";
import styled from "styled-components";
import { Col } from "./Footer/styles";

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
          <ModalContent>
            <Row>
              <Left>
                <Image
                  src={"https://pbs.twimg.com/media/EtzS4h6XEAk9_PJ.png"}
                  alt="test image"
                />
              </Left>
              <Container>
                <h2>Mentor & Mentee Mixer</h2>
                <p>
                  Compete with your fellow Dangos to find the best pairing for
                  your Mentor/Mentee! Are you ready?
                </p>
              </Container>
            </Row>
            <CloseModal onClick={toggleModal}>X</CloseModal>
          </ModalContent>
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
  background: #fdfdfd;
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

////////////////////////////////

export const ModalContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #fdfdfd;
  border-radius: 10px;
  max-width: 900px;
  min-width: 400px;
  height: 450px;
  ///////
  overflow: hidden;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 450px) {
    border-radius: 10px;
    justify-content: center;
    height: 300px;
    width: 400px;
    flex-direction: row;
  }
`;

export const Container = styled.div`
  padding: 14px 28px;

  & > h2 {
    color: ${(props) => props.theme.hue.blue};
    background: #fdfdfd;
    width: 100%;

    @media (max-width: 450px) {
    }
  }

  & > p {
    color: ${(props) => (props.primary ? "white" : "#333333")};
    font-size: 14px;
    background: #fdfdfd;
    width: 100%;

    @media (max-width: 450px) {
    }
  }
`;

export const Image = styled.img`
  overflow: hidden;
  border-radius: 10px 0px 0px 10px;
  max-width: 600px;
  min-width: 300px;
  width: 400px;
  height: 450px;
  transform: translate(0%, 0%);

  @media (max-width: 450px) {
    height: 250px;
    width: 200px;
  }
`;

/*
export const Image = styled.img.attrs((props) => ({
  as: !props.src && "div",
}))`
  margin: auto;
  width: 100%;
  height: ${(p) => p.height}px;
  background: transparent;
  transform: translate(${(p) => p.x || 0}, ${(p) => p.y || 0});
`;
*/

export const Row = styled.div`
  flex-direction: row;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`;

export const Left = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  @media (max-width: 450px) {
    justify-content: space-around;
  }
`;
