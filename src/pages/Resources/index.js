import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Card from "components/Card";

import { Main, Title, Container } from "./styles";

import PCC from "../../assets/resources/PasadenaCityCollege.png";
import LACC from "../../assets/resources/LACC.jpg";
import ClaremontCollege from "../../assets/resources/ClaremontCollege.jpg";
import CSULA from "../../assets/resources/CSULA.jpg";
import MtSAC from "../../assets/resources/MtSAC.jpg";
import ELAC from "../../assets/resources/ELAC.jpg";
import facebook from "../../assets/resources/fb-logo.jpg";
import cki from "../../assets/resources/CKI_logo.jpg";

//desired plan.
//Make boxes pop out and remove visit button or simply just make the buttons clickable

export function Resources() {
  return (
    <div>
      <Navbar />
      <Main>
        <Title>Foothill Division</Title>
        <Container>
          <Card
            src={PCC}
            title="Pasadena City College"
            school="https://www.instagram.com/ckipcc/"
          />
          <Card
            src={LACC}
            title="Los Angeles City College"
            school="https://www.instagram.com/lacccki/"
          />
          <Card
            src={ClaremontCollege}
            title="Claremont College"
            school="http://claremontcki.weebly.com/"
          />
          <Card
            src={CSULA}
            title="California State University Los Angeles"
            school="https://www.instagram.com/cki_csula"
          />
          <Card
            src={MtSAC}
            title="Mount San Antonio College"
            school="https://www.instagram.com/mtsaccki/"
          />
          <Card
            src={ELAC}
            title="East Los Angeles College"
            school="https://www.instagram.com/elac_cki"
          />
        </Container>
        <Title>District Information</Title>
        <Container>
          <Card
            src={cki}
            title="Circle K International Website"
            school="http://www.cnhcirclek.org"
          />
          <Card
            src={facebook}
            title="Circle K International Facebook"
            school="https://www.facebook.com/cnhcirclek"
          />
        </Container>
        <Footer />
      </Main>
    </div>
  );
}
