import Head from "@/components/Head";
import Main from "@/components/Main";

import EventCard from "@/components/EventCard";
import Zavala from "@/assets/images/smile_zavala.jpg";
import type * as CSS from "csstype";


function Events() {
  return (
    <>
      <Head title="Events"/>
      <Main>
        deez nuts events
        <div style={Content}>
        <EventCard
          title="CKI Raid Night"
          details="fum"
          thumbnail={Zavala}
          tags="social"
          date= "4/20/2023"
          time="7 p.m."
          location= "Remotely @ Your Home"
          />
          <EventCard
          title="CKI Raid Night"
          details="ajksdl;fjaiowe;;;;r;jf;;;;;;;;sd;oi;;; asdiofj aopsidfjapw doifjas opdifjasop ifjasdop ijfasdklfjasoiej fklasd jflas df"
          thumbnail={Zavala}
          tags="social"
          date= "4/23/2023"
          time="7 p.m."
          location= "Remotely @ Your Home"
          />
          <EventCard
          title="CKI Raid Night"
          details="Eyes up Dangos! Come help your fellow members slay a time machine in Destiny 2 as we all try to navigate the dangers of the Vault of Glass."
          thumbnail={Zavala}
          tags="social"
          date= "4/26/2023"
          time="7 p.m."
          location= "Remotely @ Your Home"
          />
          <EventCard
          title="CKI Raid Night"
          details="Eyes up Dangos! Come help your fellow members slay a disciple in Destiny 2 as we all try to navigate the dangers of the Vow of the Disciple."
          thumbnail={Zavala}
          tags="social"
          date= "4/29/2023"
          time="7 p.m."
          location= "Remotely @ Your Home"
          /> 
          <EventCard
          title="CKI Raid Night"
          details="Eyes up Dangos! Come help your fellow members slay ✨✨."
          thumbnail={Zavala}
          tags="social"
          date= "5/1/2023"
          time="7 p.m."
          location= "Remotely @ Your Home"
          /> 
          <EventCard
          title="CKI Raid Night"
          details="Eyes up Dangos! Come help your fellow members slay a king in Destiny 2 as we all try to navigate the dangers of King's Fall."
          thumbnail={Zavala}
          tags="social"
          date= "5/4/2023"
          time="7 p.m."
          location= "Remotely @ Your Home"
          />
          <EventCard
          title="CKI Raid Night"
          details="Eyes up Dangos! Come help your fellow members whack off."
          thumbnail={Zavala}
          tags="social"
          date= "5/7/2023"
          time="7 p.m."
          location= "Remotely @ Your Home"
          />
          <EventCard
          title="CKI Raid Night"
          details="Eyes up Dangos! Come help your fellow members slay a king in Destiny 2 as we all try to navigate the dangers of King's Fall."
          thumbnail={Zavala}
          tags="social"
          date= "5/10/2023"
          time="7 p.m."
          location= "Remotely @ Your Home"
          />
          </div>
      </Main>
    </>
  );
}

const Content: CSS.Properties = {
  display: "flex",
  gap: "20px",
  overflowX: "scroll",
  boxSizing: "content-box"
};

export default Events;