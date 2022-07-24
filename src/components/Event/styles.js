import styled from "styled-components";

export const Container = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  border: solid 1px ${p => p.theme.hue.gray};
  border-radius: 10px;
  width: 300px;
  transition: 0.5s;
  animation: ease-in;
  margin: 15px;
`;

export const Content = styled.div`
  margin: 1rem;
  margin-top: 0.5rem;
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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
