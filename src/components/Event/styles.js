import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  border: solid 1px ${p => p.theme.hue.gray};
  border-radius: 10px;
  min-width: 300px;
  background-color: transparent;
  padding: 0;
  text-align: left;
  margin: 0;
`;

export const Content = styled.div`
  width: 100%;
  margin: 10px;
`;

export const Image = styled.img`
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  height: 300px;
`;

export const CardTitle = styled.h2`
  color: ${(props) => props.theme.hue.blue};
  text-transform: capitalize;
  margin-block-start: 10px;
  margin-block-end: 10px;
`;

export const CardDate = styled.div`
  color: ${(props) => props.theme.hue.grey};
  font-size: 13px;
  align-items: center;
  display: flex;

  & > svg {
    fill: ${(props) => props.theme.hue.grey};
    width: 12px;
    margin-right: 5px;
  }
`;

export const CardLocation = styled.p`
  color: ${(props) => props.theme.hue.grey};
  text-transform: capitalize;
  font-size: 15px;
  margin-block-start: 0;
  margin-block-end: 10px;
`;
