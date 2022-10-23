import styled from "styled-components";
import Navbar from "components/Navbar";
import Fullerton from "../../assets/images/fullerton.jpg";

/*
Personal notes:
  Make a button for each school sector'
    make it push out
    white background with black border (Temp)
  Ask Gaelen for the links for the schools
  get a logo for them, for now stick with temp until understand theme
    
  Box for containing all contents, decide for either transparent or faded
  Then can hold image and a bottom box containing the link to other club sites
  
  make two types of containers for row and column?

  //each box is its own div with bounds for simpler BS
*/

export function Resources() {
  return (
    <div>
      <Navbar />
      <Container>
        <Box>
          <BoxImage src={Fullerton} alt="its fullerton" />
          <BoxContents>
            <p>test</p>
          </BoxContents>
        </Box>
        <Box>
          <BoxImage src={Fullerton} alt="its fullerton" />
          <BoxContents>
            <p>test</p>
          </BoxContents>
        </Box>
        <Box>
          <BoxImage />
          <BoxContents></BoxContents>
        </Box>
      </Container>
      <Container>
        <Box>
          <BoxImage />
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

const Box = styled.div`
  color: white;
  border-radius: 10px;
  color: "#eee";
  width: 300px;
  height: 200px;
  padding: 12;
  width: 300px;
  position: relative;
  text-align: center;
`;

const BoxImage = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 10px;
`;

const BoxContents = styled.div`
  position: absolute;
  top: 8px;
`;

const Boxbtn = styled.button`
  cursor: pointer;
`;
