import Head from "@/components/Head";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";

import EventCard from "@/components/EventCard";
import Zavala from "@/assets/images/smile_zavala.jpg";


function Events() {
  return (
    <>
      <Head title="Events"/>
      <Main>
      <Navbar/>
        deez nuts events
        <div className="flex gap-5 overflow-scroll box-content">
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
          </div>
      </Main>
    </>
  );
}

export default Events;