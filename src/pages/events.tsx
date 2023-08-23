import Head from "@/components/Head";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";

import { getDataFromSheets } from '../pages/api/posts/gsheets';

import logo from "@/assets/images/mrcrabs.jpg";

function Events(data: any) {
  return (
    <>
      <Head title="Events"/>
      <Main>
        <Navbar/>
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
          {data && data.length ? (
            data.map((item: any) => (
              <li key={item}>
                {item.title} - {item.description}
              </li>
            ))
          ) : (
            <li>Error: do not forget to setup your env variables 👇</li>
          )}
        </div>
        Under Maintenance
      </Main>
    </>
  );
}

export async function getStaticProps() {
  const sheet = await getDataFromSheets();
  return {
    props: {
      data: sheet.slice(0, sheet.length), // remove sheet header
    },
    revalidate: 1, // In seconds
  };
}

export default Events;

// ref: https://dev.to/frasnym/connecting-your-nextjs-mini-project-with-google-spreadsheets-as-database-1o2d

{/* <div className="flex gap-5 overflow-scroll box-content">
<EventCard
  title="CKI test test test"
  details="fum"
  thumbnail={logo}
  tags="social"
  date= "4/20/2023"
  time="7 p.m."
  location= "Remotely @ Your Home"
  />
  </div> */}

// template example for event card