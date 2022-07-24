import styled from "styled-components";

export const Container = styled.div`
  flex-wrap: wrap;
  display: flex;
  border: solid 1px ${p => p.theme.hue.gray};
  border-radius: 10px;
  width: 300px;
`;

export const Content = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 15px;
`;

export const Image = styled.img`
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 300px;
  height: 300px;
`;

export const CardTitle = styled.h3`
  color: ${(props) => props.theme.hue.blue};
  text-transform: capitalize;
  margin-block-start: 0;
  margin-block-end: 5px;
`;

export const CardDate = styled.div`
  color: ${(props) => props.theme.hue.grey};
  font-size: 13px;
  margin-bottom: 10px;
  align-items: center;
  display: flex;
  margin-top: 10px;

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
  margin-block-end: 0;
`;
