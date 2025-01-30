import styled from "styled-components";
import { type YearEntry } from "../../../types";

import { PADDING } from "../../../constants";

interface DetailedListItemProps {
  entry: YearEntry;
}

export default function DetailedListItem({
  entry: { title, description, location, year },
}: DetailedListItemProps) {
  return (
    <>
      <Container>
        <Year>{year}</Year>
        <Description>
          <Title>{title}, </Title>
          {description}
        </Description>
        <Location>{location}</Location>
      </Container>
    </>
  );
}

const Container = styled.li`
  font-size: 0.6rem;
  line-height: 1.7;
  display: grid;
  grid-template-columns: subgrid;
  grid-column: 1 / -1;
  gap: ${() => PADDING.md};
`;

const Year = styled.span`
  grid-column: 1 / 2;
  padding-inline-start: ${() => PADDING.md};
`;

const Title = styled.strong`
  color: var(--COLOR_GRAY-300);
`;

const Description = styled.span`
  grid-column: 2 / 3;
`;

const Location = styled.em`
  grid-column: 3 / 4;
  justify-self: end;
`;
