import styled from "styled-components";
import { ReactComponent as WebSVG } from "../../assets/images/web.svg";
import { ReactComponent as LinkedinSVG } from "../../assets/images/linkedin.svg";
import { ReactComponent as EmailSVG } from "../../assets/images/email.svg";

export const Container = styled.div`
  width: 200px;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LinkWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 15px;
`

export const Web = styled(WebSVG)`
  fill: ${p => p.theme.hue.gold};
  width: 16px;
  height: 16px;
`;

export const Linkedin = styled(LinkedinSVG)`
  fill: ${p => p.theme.hue.gold};
  width: 16px;
  height: 16px;
`;

export const Email = styled(EmailSVG)`
  width: 16px;
  height: 16px;
  & > path {
    fill: ${p => p.theme.hue.gold};
  }
`;

export const Text = styled.div`
  text-align: center;
`;

export const Name = styled(Text)`
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 20px;
`;

export const Person = styled.div`
  width: 150px;
  height: 150px;
  border: 2px solid ${p => p.theme.hue.gold};
  border-radius: 50%;
  background-size: contain;
  background-image: url(${props => props.src});
`;