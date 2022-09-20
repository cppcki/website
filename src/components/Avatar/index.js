import {
  Text,
  Name,
  Container,
  Person,
  Web,
  Linkedin,
  LinkWrapper,
  Email
} from "./styles";

export function Avatar(props) {
  const { name, position, src, linkedin, website, email } = props;
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
        {
        email &&
          <a href={email}>
            <Email/>
          </a>
        }
      </LinkWrapper>
    </Container>
  );
}