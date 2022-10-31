import styled from "styled-components";
import Navbar from "components/Navbar";

export function Resources() {
  return (
    <div>
      <Navbar />
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
            <button>
              <a href="https://lancerlife.pasadena.edu/organization/cki">
                TEMP SITE
              </a>
            </button>
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
            <button>
              <a href="">No Site</a>
            </button>
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
            <button>No Site</button>
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
            <button>No Site</button>
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
            <button>
              <a href="http://www.cnhcirclek.org">Visit</a>
            </button>
          </BoxContents>
        </Box>
        <Box>
          <img
            src={"https://1000logos.net/wp-content/uploads/2016/11/fb-logo.jpg"}
            alt="its fullerton"
          />
          <BoxContents>
            <p>Circle K International Facebook</p>
            <button>
              <a href="https://www.facebook.com/cnhcirclek">Visit</a>
            </button>
          </BoxContents>
        </Box>
      </Container>
    </div>
  );
}

const Container = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 5rem;
  padding: 5px;
  //@media, make flex direction column
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
  & > button {
    cursor: pointer;
    height: 30px;
    width: 120px;
    border-radius: 5px;
    color: black;
    text-align: center;
    position: absolute;
    background-color: white;
    top: 140px;
    left: 10px;
    & > a {
      font-weight: bold;
      text-decoration: none;
      text-transform: capitalize;
      text-align: center;
    }
    & > a:hover {
      color: ${(props) => props.theme.hue.gold};
    }
  }
`;
