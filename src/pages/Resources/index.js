import styled from "styled-components";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

export function Resources() {
  return (
    <div>
      <Navbar />
      <Main>
        <Title>Foothill Division</Title>
        <Container>
          <Box>
            <img
              src={
                "https://sites.redlands.edu/globalassets/depts/gpe/images/ccc/pcc-placeholder.png"
              }
              alt="its PCC"
            />
            <BoxContents>
              <p>Pasadena City College</p>
              <a
                href="https://www.instagram.com/ckipcc/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Visit</button>
              </a>
            </BoxContents>
          </Box>
          <Box>
            <img
              src={
                "https://eonreality.com/wp-content/uploads/2020/08/XR_LACC.jpg"
              }
              alt="its LCC"
            />
            <BoxContents>
              <p>Los Angeles City College</p>
              <a
                href="https://www.instagram.com/lacccki/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Visit</button>
              </a>
            </BoxContents>
          </Box>
          <Box>
            <img
              src={
                "https://colleges.claremont.edu/fivecadmissions/wp-content/uploads/sites/39/2019/06/aerial-claremont-colleges.jpg"
              }
              alt="its CC"
            />
            <BoxContents>
              <p>Claremont Colleges</p>
              <a
                href="http://claremontcki.weebly.com/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Visit</button>
              </a>
            </BoxContents>
          </Box>
          <Box>
            <img
              src={
                "https://www.calstate.edu/attend/campuses/SiteAssets/campus-facts/campus-fact-data/campus-images/LOS%20ANGELES/los%20angeles-3.jpg"
              }
              alt="its CSULA"
            />
            <BoxContents>
              <p>California State University Los Angeles</p>
              <a
                href="https://www.instagram.com/cki_csula"
                target="_blank"
                rel="noreferrer"
              >
                <button>Visit</button>
              </a>
            </BoxContents>
          </Box>
          <Box>
            <img
              src={
                "https://s3.amazonaws.com/photos.niche.com/0f6ab87f02d8e4074dc878fc8faf8286245fb338"
              }
              alt="its CSULA"
            />
            <BoxContents>
              <p>Mount San Antonio College</p>
              <a
                href="https://www.instagram.com/mtsaccki/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Visit</button>
              </a>
            </BoxContents>
          </Box>
          <Box>
            <img
              src={
                "https://www.selacollab.org/wp-content/uploads/2019/03/ELAC-letter-Monterey-Park-campus.jpg"
              }
              alt="its CSULA"
            />
            <BoxContents>
              <p>East Los Angeles College</p>
              <a
                href="https://www.instagram.com/elac_cki"
                target="_blank"
                rel="noreferrer"
              >
                <button>Visit</button>
              </a>
            </BoxContents>
          </Box>
        </Container>
        <Title>District Information</Title>
        <Container>
          <Box>
            <img
              src={
                "https://community.ucla.edu/images/orgs/studentorg/51-og.jpg?f446551bfd5a6b749543ff8a4dea947e"
              }
              alt="its fullerton"
            />
            <BoxContents>
              <p>Circle K International Website</p>
              <a
                href="http://www.cnhcirclek.org"
                target="_blank"
                rel="noreferrer"
              >
                <button>Visit</button>
              </a>
            </BoxContents>
          </Box>
          <Box>
            <img
              src={
                "https://1000logos.net/wp-content/uploads/2016/11/fb-logo.jpg"
              }
              alt="its fullerton"
            />
            <BoxContents>
              <p>Circle K International Facebook</p>
              <a
                href="https://www.facebook.com/cnhcirclek"
                target="_blank"
                rel="noreferrer"
              >
                <button>Visit</button>
              </a>
            </BoxContents>
          </Box>
        </Container>
        <Footer />
      </Main>
    </div>
  );
}

const Main = styled.div`
  max-width: 1440px;
  margin: auto;
`;

const Container = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5rem;
  padding: 5px;
`;

const Title = styled.h2`
  font-family: "Permanent Marker", cursive;
  align-items: center;
  text-align: center;
  text-transform: capitalize;
  font-size: 35px;
`;

const Box = styled.div`
  color: white;
  border-radius: 10px;
  width: 300px;
  height: 200px;
  padding: 12;
  width: 300px;
  position: relative;
  text-align: left;
  & > img {
    width: 300px;
    height: 200px;
    border-radius: 10px;
    filter: brightness(50%);
  }
`;

const BoxContents = styled.div`
  position: absolute;
  top: 8px;
  & > p {
    position: absolute;
    left: 10px;
    font-size: 23px;
    width: 200px;
    font-family: "Permanent Marker";
  }
  & > a {
    font-weight: bold;
    text-decoration: none;
    text-transform: capitalize;
    text-align: center;
    & > button {
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
    }
    & > button:hover {
      color: ${(props) => props.theme.hue.gold};
    }
  }
`;
