import Head from "@/components/Head";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";

function EventPage() {
  let SHEET_ID = '16Nx4J93o5kNA22tLcIXEwGonr_t41tQC-4-7ZnFIhE8'
  let SHEET_TITLE = 'March 2023';
  let SHEET_RANGE = 'A2:J11'

  let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

  fetch(FULL_URL)
  .then(res => res.text())
  .then(rep => {
    let data = JSON.parse(rep.substring(47).slice(0,-2));
    let rows = data.table.rows
    let length = rows.length;

    console.log(rows)
    console.log(rows[0].c[0].v)
  })

  return (
    <div>
      <p>Under Maintenance</p>
    </div>
  )
}

function Events() {
  return (
    <>
      <Head title="Events"/>
      <Main>
        <Navbar/>
        <EventPage/>
      </Main>
    </>
  );
}

export default Events;
