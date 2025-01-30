import styled from "styled-components";
import { type SimpleEntry } from "../../../types";

import { PADDING } from "../../../constants";

interface SimpleListItemProps {
  entry: SimpleEntry;
}

export default function SimpleListItem({
  entry: { title, description },
}: SimpleListItemProps) {
  return (
    <>
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Container>
    </>
  );
}

const Container = styled.li`
  font-size: 0.6rem;
  display: grid;
  grid-template-columns: subgrid;
  grid-column: 1 / -1;
  gap: ${() => PADDING.md};
  align-items: baseline;
`;

const Title = styled.strong`
  font-size: 0.65rem;
  color: var(--COLOR_GRAY-300);
  text-align: right;
  grid-column: 1 / 2;
  justify-self: end;
`;

const Description = styled.span`
  font-weight: 300;
  grid-column: 2 / 4;
  justify-self: start;
`;
