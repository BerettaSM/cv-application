import { Fragment } from "react";
import styled from "styled-components";
import { type DetailedEntry as IDetailedEntry } from "../../../types";

import { BaseSection, SectionTitle } from ".";
import { DetailedEntry } from "../Entries";

interface DetailedSectionProps {
  title: string;
  entries: IDetailedEntry[];
}

export default function DetailedSection({
  title,
  entries,
}: DetailedSectionProps) {
  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
      {entries.map((entry) => (
        <Fragment key={entry.id}>
          <DetailedEntry entry={entry} />
        </Fragment>
      ))}
    </Container>
  );
}

const Container = styled(BaseSection)``;
