import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import { CKI_API } from "utils/axios";

import { Event } from "components";

export function Events() {
  const [events, setEvents] = useState([]);

  const fetchEvents = useCallback(async () => {
    const response = await CKI_API.get("/events", {
      headers: {
        "Content-Type": "application/json"
      }
    });

    const currentDate = new Date();
    const month = currentDate.toLocaleString("en-US", { 
      month: "long", 
      year: "numeric" 
    });

    setEvents(response.data[month].reverse());
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return (
    <Container>
      <h1>Upcoming Events</h1>
      <Content>
        {events?.map((event, index) => {
          return (
            <Event key={index} {...event}/>
          )
        })}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: scroll;
  box-sizing: content-box;
`;