import Head from "@/components/Head";
import Main from "@/components/Main";
import Oaths from "@/components/Oaths";
import Navbar from "@/components/Navbar";
import Board from "@/components/Board";

function About() {
  return (
    <>
      <Head title="About"/>
      <Main>
        <Navbar/>
        <Oaths/>
        <Board/>
      </Main>
    </>
  );
}

export default About;