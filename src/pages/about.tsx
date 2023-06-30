import Head from "@/components/Head";
import Main from "@/components/Main";
import Oaths from "@/components/Oaths";
import Navbar from "@/components/Navbar";

function About() {
  return (
    <>
      <Head title="About"/>
      <Main>
        <Navbar/>
        <Oaths/>
      </Main>
    </>
  );
}

export default About;