import { ReactNode } from "react";
import styled from "styled-components";

import { type SimpleEntry } from "../../../types";
import Spacer from "../../Spacer";

interface ListProps<T extends SimpleEntry> {
  items: T[];
  li: (props: { entry: T }) => ReactNode;
}

export default function List<T extends SimpleEntry>({
  items,
  li: Li,
}: ListProps<T>) {
  return (
    <>
      <Spacer size={8} />
      <Container>
        {items.map((item) => (
          <Li key={item.title} entry={item} />
        ))}
      </Container>
    </>
  );
}

const Container = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  display: grid;
  grid-template-columns: max-content repeat(2, 1fr);
  grid-template-rows: auto;
`;
