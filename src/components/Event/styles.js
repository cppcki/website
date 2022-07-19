import styled from "styled-components";

export const Container = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  width: 300px;
  overflow: hidden;
  box-shadow: 0px 0px 15px -5px;
  transition: 0.5s;
  animation: ease-in;
  margin: 15px;
  border-radius: 15px;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px 0px;
  }
`;

export const Content = styled.div`
  margin: 1rem;
  margin-top: 0.5rem;
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  display: flex;
  height: 220px;
  width: 300px;

  & > img {
    flex: 1;
    width: 300px;
    height: 220px;
  }
`;

export const CardTitle = styled.div`
  color: ${(props) => props.theme.hue.blue};
  text-transform: capitalize;
  margin-top: -10px;
  margin-bottom: -10px;
`;

export const CardDate = styled.a`
  color: ${(props) => props.theme.hue.grey};
  text-transform: capitalize;
  font-size: 13px;
  margin-bottom: 10px;
  align-items: center;
  display: flex;
  margin-top: -10px;
  margin-bottom: -25px;

  & > svg {
    fill: ${(props) => props.theme.hue.grey};
    width: 12px;
    margin-right: 5px;
  }
`;

export const CardBody = styled.div`
  color: ${(props) => props.theme.hue.grey};
  text-transform: capitalize;
`;
