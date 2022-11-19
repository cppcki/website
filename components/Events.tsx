import { useMemo } from "react";

type EventProps = {

}

function Event(props: any) {

  const { title, description } = props;

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

function Events(props: any) {
  const { events: data } = props;

  const events = useMemo(() => {
    return data?.map((event: any, index: number) => {
      return (
        <Event key={index} {...event}/>
      );
    });
  }, [data]);

  return (
    <div>
      <h1>Events</h1>
      {events}
    </div>
  );
}

export default Events;
