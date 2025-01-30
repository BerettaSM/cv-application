import styled from "styled-components";
import { type SimpleEntry } from "../../../types";

import { BaseSection, SectionTitle } from ".";
import { List, SimpleListItem } from "../List";

interface ListSectionProps {
  title: string;
  entries: SimpleEntry[];
}

export default function ListSection({ title, entries }: ListSectionProps) {
  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
      <List items={entries} li={SimpleListItem} />
    </Container>
  );
}

const Container = styled(BaseSection)``;
