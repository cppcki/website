import{
    Container, Content, Left, Middle, Right, Describe, 
} from "./styles";

import Cool from "../../assets/images/CoolDango.png";
import Lit from "../../assets/images/LitDango.png";
import Plant from "../../assets/images/PlantDango.png";

export function Tenants(){
    return(
      <Container>
        <Left>
            <Content>
                <img src= {Cool} width="250" alt="Leadership"/>
                <h1>Leadership</h1>
                <Describe>Opportunities and chances for developing one's character and skills.</Describe>
            </Content>
        </Left>
        <Middle>
            <Content>
                <img src= {Plant} width="215" alt="Service"/>
                <h1>Service</h1>
                <Describe>Make a difference within college, university campuses, and communities through acts of service.</Describe>
            </Content>
        </Middle>
        <Right>
            <Content>
                <img src= {Lit} width="133" alt="Fellowship"/>
                <h1>Fellowship</h1>
                <Describe>Create a sense of community wihtin the club and enable members to have tight-knit bonds with one another.</Describe>
            </Content>
        </Right>
      </Container>
    );
}