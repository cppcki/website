import Navbar from "components/Navbar";
import Footer from "components/Footer";
import {
  Main,
  Title,
  Box,
  BoxContents,
  Container,
  BoxButton,
  ResourceImg,
} from "./styles";

import PCC from "../../assets/resources/PasadenaCityCollege.png";
import LACC from "../../assets/resources/LACC.jpg";
import ClaremontCollege from "../../assets/resources/ClaremontCollege.jpg";
import CSULA from "../../assets/resources/CSULA.jpg";
import MtSAC from "../../assets/resources/MtSAC.jpg";
import ELAC from "../../assets/resources/ELAC.jpg";
import facebook from "../../assets/resources/fb-logo.jpg";
import cki from "../../assets/resources/CKI_logo.jpg";

//desired plan.
//Make boxes pop out and remove visit button

export function Resources() {
  return (
    <div>
      <Navbar />
      <Main>
        <Title>Foothill Division</Title>
        <Container>
          <Box>
            <ResourceImg src={PCC} alt="its CC" />
            <BoxContents>
              <p>Pasadena City College</p>
              <a
                href="https://www.instagram.com/ckipcc/"
                target="_blank"
                rel="noreferrer"
              >
                <BoxButton>Visit</BoxButton>
              </a>
            </BoxContents>
          </Box>
          <Box>
            <ResourceImg src={LACC} alt="its LCC" />
            <BoxContents>
              <p>Los Angeles City College</p>
              <a
                href="https://www.instagram.com/lacccki/"
                target="_blank"
                rel="noreferrer"
              >
                <BoxButton>Visit</BoxButton>
              </a>
            </BoxContents>
          </Box>
          <Box>
            <ResourceImg src={ClaremontCollege} alt="its CC" />
            <BoxContents>
              <p>Claremont Colleges</p>
              <a
                href="http://claremontcki.weebly.com/"
                target="_blank"
                rel="noreferrer"
              >
                <BoxButton>Visit</BoxButton>
              </a>
            </BoxContents>
          </Box>
          <Box>
            <ResourceImg src={CSULA} alt="its CSULA" />
            <BoxContents>
              <p>California State University Los Angeles</p>
              <a
                href="https://www.instagram.com/cki_csula"
                target="_blank"
                rel="noreferrer"
              >
                <BoxButton>Visit</BoxButton>
              </a>
            </BoxContents>
          </Box>
          <Box>
            <ResourceImg src={MtSAC} alt="its MtSAC" />
            <BoxContents>
              <p>Mount San Antonio College</p>
              <a
                href="https://www.instagram.com/mtsaccki/"
                target="_blank"
                rel="noreferrer"
              >
                <BoxButton>Visit</BoxButton>
              </a>
            </BoxContents>
          </Box>
          <Box>
            <ResourceImg src={ELAC} alt="its ELAC" />
            <BoxContents>
              <p>East Los Angeles College</p>
              <a
                href="https://www.instagram.com/elac_cki"
                target="_blank"
                rel="noreferrer"
              >
                <BoxButton>Visit</BoxButton>
              </a>
            </BoxContents>
          </Box>
        </Container>
        <Title>District Information</Title>
        <Container>
          <Box>
            <ResourceImg src={cki} alt="cki" />
            <BoxContents>
              <p>Circle K International Website</p>
              <a
                href="http://www.cnhcirclek.org"
                target="_blank"
                rel="noreferrer"
              >
                <BoxButton>Visit</BoxButton>
              </a>
            </BoxContents>
          </Box>
          <Box>
            <ResourceImg src={facebook} alt="its facebook" />
            <BoxContents>
              <p>Circle K International Facebook</p>
              <a
                href="https://www.facebook.com/cnhcirclek"
                target="_blank"
                rel="noreferrer"
              >
                <BoxButton>Visit</BoxButton>
              </a>
            </BoxContents>
          </Box>
        </Container>
        <Footer />
      </Main>
    </div>
  );
}
