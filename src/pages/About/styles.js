import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: auto;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: left;
  @media (max-width: 650px) {
    justify-content: center;
  }
`;

export const Flex = styled.div`
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
  flex-wrap: wrap;
  min-height: 400px;
`;

export const Row = styled.div`
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  @media (max-width: 650px) {
    flex-direction: column-reverse;
  }
`;

export const Content = styled.div`
  width: 40%;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const Left = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-family: 'Permanent Marker', cursive;
`;

export const Image = styled.img.attrs(props => ({
  as: !props.src && "div"
}))`
  margin: auto;
  width: 100%;
  height: ${p => p.height}px;
  background: transparent;
  transform: translate(${p => p.x || 0}, ${p => p.y || 0});
`;

export const Heading = styled(Title)`
  text-align: center;
`;

export const Header = styled.div`
  background-position-y: 30%;
  width: 100%;
  height: 400px;
`;