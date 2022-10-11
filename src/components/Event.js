import React, { useMemo } from "react";
import styled from "styled-components";

import { ReactComponent as DateIcon } from "../assets/images/Date.svg";

const PLACEHOLDER_IMAGE = "https://drive.google.com/uc?export=view&id=1FRtJ1v2NLr-H-jpJ5F2FtgF8oGna1pC3";

export default function Event(props) {

  const { title, rsvp, startTime, endTime, location, thumbnail, type: types } = props;

  const date = useMemo(() => {
    // Greenwich Mean Time is 7 hours (25200 seconds) ahead of PST 
    const startDate = new Date(((startTime + 25200) * 1000));

    const startingTime = startDate.toLocaleTimeString("en-US", { hour: '2-digit', minute:'2-digit', timeZone: 'America/Los_Angeles' });
    const startingDay = startDate.toLocaleDateString("en-US", { dateStyle: "full" });
    return `${startingDay} @ ${startingTime.toLowerCase()}`
  }, [startTime]);

  console.log(types);

  const tags = useMemo(() => {
    return types?.map((type) => {
      return (
        <Tag>
        {type}
        </Tag>
      )
    });
  })

  return (
    <Container>
      <Image src={thumbnail} alt={`${title} event`}/>
      <Content>
        <TagContainer>
          {tags}
        </TagContainer>
        <CardDate>
          <DateIcon />
          {date}
        </CardDate>
        <CardTitle>{title}</CardTitle>
        <CardLocation>{location}</CardLocation>
      </Content>
    </Container>
  );
}

Event.defaultProps = {
  thumbnail: PLACEHOLDER_IMAGE 
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px ${p => p.theme.hue.gray};
  border-radius: 10px;
  min-width: 300px;
  width: 300px;
  background-color: transparent;
  padding: 0;
  text-align: left;
  margin: 0;
`;

const Content = styled.div`
  width: 100%;
  padding: 10px;
`;

const TagContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Tag = styled.div`
  border-radius: 5px;
  background-color: ${(props) => props.theme.hue.blue};
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 5px;
  padding-right: 5px;
  color: ${(props) => props.theme.hue.gray};
`;

const Image = styled.img`
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  height: 300px;
`;

const CardTitle = styled.h2`
  color: ${(props) => props.theme.hue.blue};
  text-transform: capitalize;
  margin-block-start: 10px;
  margin-block-end: 10px;
`;

const CardDate = styled.div`
  color: ${(props) => props.theme.hue.grey};
  font-size: 13px;
  align-items: center;
  display: flex;

  & > svg {
    fill: ${(props) => props.theme.hue.grey};
    width: 12px;
    margin-right: 5px;
  }
`;

const CardLocation = styled.p`
  color: ${(props) => props.theme.hue.grey};
  text-transform: capitalize;
  font-size: 15px;
  margin-block-start: 0;
  margin-block-end: 10px;
`;
 