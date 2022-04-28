import {
  Text,
  Name,
  Container,
  Person,
  Web,
  Linkedin,
  LinkWrapper
} from "./styles";

export function Avatar(props) {
  const { name, position, src, linkedin, website } = props;
  return (
    <Container>
      <Person src={src}/>
      <Name>{name}</Name>
      <Text>{position}</Text>
      <LinkWrapper>
        {website &&
          <a href={website}>
            <Web/>
          </a>
        }
        {
          linkedin &&
          <a href={linkedin}>
            <Linkedin/>
          </a>
        }
      </LinkWrapper>
    </Container>
  );
}