import React, { useState } from "react";
import styled from "styled-components";

const MOBILE_THRESHOLD = 900;

const SECOND_THRESHOLD = 450;

export function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
    document.body.style.overflow = "hidden";
  } else {
    document.body.classList.remove("active-modal");
    document.body.style.overflow = "unset";
  }

  return (
    <>
      <StartUp onClick={toggleModal} className="btn-modal"></StartUp>

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
                    <h2>Mentor & Mentee Mixer, Lorem ipsum dolor sit amet</h2>
                    <h4>The Quad @ Cal Poly Pomona</h4>
                  </TitleContent>
                  <Tags>Leadership</Tags>
                  <hr />
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
              <ProfileIamge1
                src="https://www.looper.com/img/gallery/the-actor-who-inspired-christian-bales-american-psycho-performance-isnt-who-you-think/l-intro-1614807948.jpg"
                alt="test-image"
              />
              <ProfileIamge2
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/thanos-screaming-avengers-infinity-war-1554285280.jpg?crop=1xw:1xh;center,top&resize=480:*"
                alt="test-image"
              />
              <ProfileIamge3
                src="https://www.ctvnews.ca/polopoly_fs/1.4692721.1574189694!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg"
                alt="test-image"
              />
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
  width: auto;
  height: auto;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

export const Overlay = styled.div`
  width: auto;
  height: 200%;
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

export const ModalContent = styled.div`
  line-height: 1.4;
  background: #fdfdfd;
  border-radius: 10px;
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
  position: absolute;
  left: 55%;
  bottom: 3%;

  @media (max-width: ${MOBILE_THRESHOLD}px) {
    width: 90%;
    left: 5%;
    top: 45%;
  }

  @media (max-width: ${SECOND_THRESHOLD}px) {
    top: 38%;
  }
`;

export const TitleContent = styled.div`
  line-height: 0.4;
  height: 90px;
  font-size: 13px;

  & > h2 {
    color: ${(props) => props.theme.hue.blue};
    line-height: 1;
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

export const Tags = styled.p`
  //Note: assuming these tags will act like category link, a button is recommended to go to that category.
  background: #004b85;
  display: block;
  color: #ffffff;
  border-radius: 10px;
  font-size: 11px;
  width: 80px;
  text-align: center;

  @media (max-width: ${MOBILE_THRESHOLD}px) {
    margin-top: -3%;
  }
`;

export const Image = styled.img`
  overflow: hidden;
  display: block;
  border-radius: 10px 0px 0px 10px;
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
  border-width: 0px;
  width: 25%;
  background: ${(props) => props.theme.hue.blue};
  color: ${(props) => (props.primary ? "#333333" : "white")};
  position: relative;
  display: block;
  bottom: 15%;
  left: 60%;
  @media (max-width: ${MOBILE_THRESHOLD}px) {
    width: 45%;
    transform: translate(-8rem, 18rem);
  }

  @media (max-width: ${SECOND_THRESHOLD}px) {
    transform: translate(-75%, 23rem);
  }
`;

export const ProfileIamge1 = styled.img`
  overflow: hidden;
  position: relative;
  border-radius: 50%;
  bottom: 9%;
  left: 88%;
  height: 30px;
  width: 30px;
  transform: translate(10px);

  @media (max-width: ${MOBILE_THRESHOLD}px) {
    top: 30%;
    left: 90%;
    transform: translate(-40px, 70px);
  }

  @media (max-width: ${SECOND_THRESHOLD}px) {
    left: 88%;
    top: 40%;
  }
`;

export const ProfileIamge2 = styled.img`
  overflow: hidden;
  position: relative;
  border-radius: 50%;
  bottom: 9%;
  left: 88%;
  height: 30px;
  width: 30px;
  transform: translate(-5px);

  @media (max-width: ${MOBILE_THRESHOLD}px) {
    top: 30%;
    left: 90%;
    transform: translate(-50px, 70px);
  }

  @media (max-width: ${SECOND_THRESHOLD}px) {
    left: 88%;
    top: 40%;
  }
`;

export const ProfileIamge3 = styled.img`
  overflow: hidden;
  position: relative;
  border-radius: 50%;
  bottom: 9%;
  left: 88%;
  height: 30px;
  width: 30px;
  transform: translate(-20px);

  @media (max-width: ${MOBILE_THRESHOLD}px) {
    top: 30%;
    left: 90%;
    transform: translate(-60px, 70px);
  }

  @media (max-width: ${SECOND_THRESHOLD}px) {
    left: 88%;
    top: 40%;
  }
`;

export const StartUp = styled.button`
  display: flex;
  position: absolute;
  border-radius: 10px;
  background: transparent;
  overflow: hidden;
  border: 10px;
  min-width: 300px;
  min-height: 350px;
`;

/*
Notes:
ModalDiv and Overlay are important for placement of the modal and not destroying all the placement of everything else

Line 24-26 is the button needed to activate the modal, not sure how to change the button to be something like clicking the event-card, but made an interesting solution but bad

I most likely just publishing modal.js updates, so simply place the Modal file in any other file and click the button to test it, been mainly testing it in the Resources page.

The modal works in the home page, but bounds are being problematic and placement, will try to fix
*/
