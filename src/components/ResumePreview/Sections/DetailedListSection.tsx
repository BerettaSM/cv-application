import styled from "styled-components";
import { type YearEntry } from "../../../types";

import { BaseSection, SectionTitle } from ".";
import { List, DetailedListItem } from "../List";

interface DetailedListSectionProps {
  title: string;
  entries: YearEntry[];
}

export default function DetailedListSection({
  title,
  entries,
}: DetailedListSectionProps) {
  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
      <List items={entries} li={DetailedListItem} />
    </Container>
  );
}

const Container = styled(BaseSection)``;
