import Head from "@/components/Head";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Oaths from "@/components/Oaths";


import { Session } from "next-auth";


type HomeProps = {
  session: Session;
}

function About(props: HomeProps ) {
  const { session } = props;

  return (
    <>
      <Head title="About"/>
      <Main>
        <Navbar isLoggedIn={session?.user != null}/>
        <Oaths/>

      </Main>
    </>
  );
}

export default About;