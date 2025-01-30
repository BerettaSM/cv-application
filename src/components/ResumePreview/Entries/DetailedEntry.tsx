import styled from "styled-components";
import { type DetailedEntry as IDetailedEntry } from "../../../types";

import { BulletPoints } from "../BulletPoints";
import Spacer from "../../Spacer";

interface DetailedEntryProps {
  entry: IDetailedEntry;
}

export default function DetailedEntry({ entry }: DetailedEntryProps) {
  return (
    <>
      <Spacer size={8} />
      <Container>
        <Grouper>
          <Title>{entry.title}</Title>
          <Location>{entry.location}</Location>
        </Grouper>
        <Grouper>
          <Description>{entry.description}</Description>
          <Timeline>{entry.timeline}</Timeline>
        </Grouper>
        <Spacer size={2} />
        <BulletPoints bulletPoints={entry.bulletPoints} />
      </Container>
    </>
  );
}

const Container = styled.article``;

const Title = styled.h4`
  font-size: 0.7rem;
  color: var(--COLOR_GRAY-300);
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 0.65em;
  color: var(--COLOR_GRAY-300);
  font-weight: 300;
`;

const Location = styled.span`
  font-size: 0.65em;
  font-weight: 350;
  font-style: italic;
`;

const Timeline = styled.span`
  font-size: 0.65em;
  font-weight: 300;
  font-style: italic;
  color: var(--COLOR_GRAY-700);
`;

const Grouper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
