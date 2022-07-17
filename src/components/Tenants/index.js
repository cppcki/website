import{
    Container, Content, Left, Middle, Right, Describe, 
} from "./styles";

import cool from "./CoolDango.png";
import lit from "./LitDango.png";
import plant from "./PlantDango.png";

export function Tenants(){
    return(
      <Container>
        <Left>
            <Content>
                <img src= { cool } width= "250"/>
                <h1>Leadership</h1>
                <Describe>Opportunities and chances for developing one's character and skills.</Describe>
            </Content>
        </Left>
        <Middle>
            <Content>
                <img src= { plant } width= "215"/>
                <h1>Service</h1>
                <Describe>Make a difference within college, university campuses, and communities through acts of service.</Describe>
            </Content>
        </Middle>
        <Right>
            <Content>
                <img src= { lit } width= "133"/>
                <h1>Fellowship</h1>
                <Describe>Create a sense of community wihtin the club and enable members to have tight-knit bonds with one another.</Describe>
            </Content>
        </Right>
      </Container>
    );
}