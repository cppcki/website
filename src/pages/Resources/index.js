import styled from "styled-components";
import Navbar from "components/Navbar";

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
*/

export function Resources() {
  return (
    <div>
      <Navbar />
      <Container>
        <Box>
          <BoxImage />
          <BoxContents></BoxContents>
        </Box>
        <Box>
          <BoxImage />
          <BoxContents></BoxContents>
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
`;

const Box = styled.div`
  background-color: darkgray;
  border-radius: 5px;
  color: "#eee";
  min-height: 200px;
  padding: 12;
  width: 300px;
`;

const BoxImage = styled.img``;

const BoxContents = styled.div``;

const Boxbtn = styled.button``;
