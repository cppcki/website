import styled from "styled-components";

export default function Avatar(props) {
  const { title, src, school } = props;
  return (
    <Box>
      <School src={src} />
      <BoxContents>
        <Text>{title}</Text>
        <SourceLink href={school} target="_blank" rel="noreferrer">
          <BoxButton>Visit</BoxButton>
        </SourceLink>
      </BoxContents>
    </Box>
  );
}

const Box = styled.div`
  border-radius: 10px;
  width: 300px;
  height: 200px;
  padding: 12;
  width: 300px;
  position: relative;
  text-align: left;
`;

const BoxContents = styled.div`
  position: absolute;
  top: 8px;
`;

const SourceLink = styled.a`
  font-weight: bold;
  text-decoration: none;
  text-transform: capitalize;
  text-align: center;
  & > button:hover {
    color: ${(props) => props.theme.hue.gold};
  }
`;

const Text = styled.p`
  position: absolute;
  color: white;
  left: 10px;
  font-size: 23px;
  width: 200px;
  font-family: "Permanent Marker";
`;

const School = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  filter: brightness(50%);
  background-image: url(${(props) => props.src});
  border: 3px solid ${(p) => p.theme.hue.gold};
`;

const BoxButton = styled.button`
  cursor: pointer;
  height: 30px;
  border: none;
  width: 120px;
  border-radius: 5px;
  color: black;
  text-align: center;
  position: absolute;
  background-color: white;
  top: 140px;
  left: 10px;
`;
