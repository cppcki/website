import Head from "@/components/Head";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";

import EventCard from "@/components/EventCard";
import logo from "@/assets/images/cki_logo.png";


function Events() {
  return (
    <>
      <Head title="Events"/>
      <Main>
      <Navbar/>
        deez nuts events
        <div className="flex gap-5 overflow-scroll box-content">
        <EventCard
          title="CKI test test test"
          details="fum"
          thumbnail={logo}
          tags="social"
          date= "4/20/2023"
          time="7 p.m."
          location= "Remotely @ Your Home"
          />
          </div>
      </Main>
    </>
  );
}

export default Events;