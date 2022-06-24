import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: auto;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
<<<<<<< Updated upstream
  justify-content: center;
=======
  @media (max-width: 650px) {
    justify-content: center;
  }
>>>>>>> Stashed changes
`;

export const Flex = styled.div`
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
  justify-content: center;
  flex-wrap: wrap;
  height: 400px;
`;

export const Content = styled.div`
  width: 50%;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  @media (max-width: 650px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-family: 'Permanent Marker', cursive;
`;

export const Image = styled.img.attrs(props => ({
  as: !props.src && "div"
}))`
  border-radius: 50%;
  margin: auto;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  position: absolute;
  object-fit: cover;
  background-color: ${p => p.theme.hue.gold};
  border: 2px solid ${p => p.theme.hue.gold};
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