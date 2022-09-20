import { Navbar, Avatar, Footer, Event } from "../../components";

import {
  Flex,
  Container,
  Content,
  Heading,
  Image,
  Left,
  Title,
  AvatarContainer,
  Row,
} from "./styles";

import Annie from "../../assets/board/AnnieTaguchi.jpg";
import Fabiola from "../../assets/board/Fabiola.jpg";
import Lorenzo from "../../assets/board/LorenzoBarrios.jpg";
import Nicole from "../../assets/board/NicoleWu.jpg";
import Clarie from "../../assets/board/Claire.jpg";
import Fatima from "../../assets/board/Fatima.jpg";
import Gaelen from "../../assets/board/Gaelen.jpg";
import William from "../../assets/board/William.jpg";
import Johnny from "../../assets/board/JohnnyQiu.jpg";
import Minami from "../../assets/board/Minami.jpg";

import Banquet from "../../assets/images/banquet_brush.png";

export function About() {
  return (
    <div>
      <Navbar />
      <Container>
        <Flex>
          <Row>
            <Title>What's CKI?</Title>
          </Row>
          <Row>
            <Content>
              <p>
                Circle K blends community service and leadership training with
                the opportunity to meet many other college students at service
                projects, conferences, and conventions and form genuine lifelong
                friendships with people of all walks of life.
              </p>
              <p>
                It is a self-governing organization and elects its own officers,
                conducts its own meetings, and determines its own service
                activities. This high degree of autonomy allows for a unique
                service experience driven entirely by the members for the
                members.
              </p>
            </Content>
            <Left>
              <Image src={Banquet} height={300} />
            </Left>
          </Row>
        </Flex>
        <Heading> Meet the Board</Heading>
        <AvatarContainer>
          <Avatar
            src={Nicole}
            name="Nicole Wu"
            position="President"
            linkedin="https://www.linkedin.com/in/nicole-wu-852623203/"
            email="mailto:nicolewu@cpp.edu"
          />
          <Avatar
            src={Annie}
            name="Annie Taguchi"
            position="VP of Administration"
            linkedin="https://www.linkedin.com/in/annie-taguchi/"
            email="mailto:avtaguchi@cpp.edu"
          />
          <Avatar
            src={Fabiola}
            name="Fabiola Garcia"
            position="VP of Service"
            linkedin="https://www.linkedin.com/in/fabiola-garcia-4bb991239/"
            email="mailto:fgarcia@cpp.edu"
          />
          <Avatar 
            src={Clarie} 
            name="Claire Feld" 
            position="Secretary" 
            linkedin="https://www.linkedin.com/in/claire-f-b8906324a/"
            email="mailto:clfeld@cpp.edu"
          />
          <Avatar
            src={Lorenzo}
            name="Lorenzo Barrios"
            position="Treasurer"
            linkedin="https://www.linkedin.com/in/lorenzo-barrios-118622224/"
            email="mailto: lrbarrios@cpp.edu"
          />
          <Avatar
            src={Fatima}
            name="Fatima Santoyo"
            position="Graphics Chair"
            linkedin="https://www.linkedin.com/in/fatima-santoya-752a13245/"
            email="mailto:fis@cpp.edu"
          />
          <Avatar
            src={Gaelen}
            name="Gaelen Somera"
            position="Technology Chair"
            linkedin="https://www.linkedin.com/in/gaelensomera/"
            email="mailto:Gosomera@cpp.edu"
          />
          <Avatar
            src={Johnny}
            name="Johnny Qiu"
            position="Kiwanis Family Relations Chair"
            linkedin="https://www.linkedin.com/in/johnny-qiu-896a7b245"
            email="mailto:jqiu@cpp.edu"
          />
          <Avatar
            src={Minami}
            name="Ashley 'Minami' Chung"
            position="Membership Retention and Recognition Chair"
            linkedin="https://www.linkedin.com/in/ashley-chung-5976b423b/"
            email="mailto:ashleychung@cpp.edu"
          />
          <Avatar
            src={William}
            name="William Phan"
            position="Fundraising Chair"
            linkedin="https://www.linkedin.com/in/william-phan-3228b0245"
            email="mailto:wphan@cpp.edu"
          />
        </AvatarContainer>
        <Footer />
      </Container>
    </div>
  );
}