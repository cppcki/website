import { Navbar, Avatar, Footer } from "../../components";

import {
  Flex,
  Container,
  Content,
  Heading,
  Image,
  Left,
  Title,
  AvatarContainer,
} from "./styles";

import Annie from "../../assets/board/AnnieTaguchi.jpg";
import Fabiola from "../../assets/board/Fabiola.jpg";
import Lorenzo from "../../assets/board/LorenzoBarrios.jpg";
import Nicole from "../../assets/board/NicoleWu.jpg";
import Clarie from "../../assets/board/Clarie.jpg";
import Fatima from "../../assets/board/Fatima.jpg";
import Deric from "../../assets/board/DericKwok.jpg";

import Banquet from "../../assets/images/banquet.jpg";

export function About() {
  return (
    <div>
      <Navbar />
      <Container>
        <Flex>
          <Content>
            <Title>What's CKI?</Title>
            <p>
              Circle K blends community service and leadership training with the
              opportunity to meet many other college students at service
              projects, conferences, and conventions and form genuine lifelong
              friendships with people of all walks of life.
            </p>
            <p>
              It is a self-governing organization and elects its own officers,
              conducts its own meetings, and determines its own service
              activities. This high degree of autonomy allows for a unique
              service experience driven entirely by the members for the members.
            </p>
          </Content>
          <Left>
            <Image src={Banquet} width={300} height={300} />
          </Left>
        </Flex>
        <Heading> Meet the Board</Heading>
        <AvatarContainer>
          <Avatar
            src={Nicole}
            name="Nicole Wu"
            position="President"
            linkedin="https://www.linkedin.com/in/nicole-wu-852623203/"
          />
          <Avatar
            src={Annie}
            name="Annie Taguchi"
            position="VP of Administration"
            linkedin="https://www.linkedin.com/in/annie-taguchi/"
          />
          <Avatar
            src={Fabiola}
            name="Fabiola Garcia"
            position="VP of Service"
            linkedin="https://www.linkedin.com/in/fabiola-garcia-4bb991239/"
          />
          <Avatar src={Clarie} name="Claire Feld" position="Secretary" />
          <Avatar
            src={Lorenzo}
            name="Lorenzo Barrios"
            position="Treasurer"
            linkedin="https://www.linkedin.com/in/lorenzo-barrios-118622224/"
          />
          <Avatar
            src={Fatima}
            name="Fatima Santoyo"
            position="Graphics Chair"
          />
          <Avatar
            src={Deric}
            name="Deric Kwok"
            position="Technology Chair"
            website="https://deric.app"
            linkedin="https://linkedin.com/in/derickwok"
          />
        </AvatarContainer>
        <Footer />
      </Container>
    </div>
  );
}
