import { Fragment } from "react";
import styled from "styled-components";
import { type DetailedEntry as IDetailedEntry } from "../../types";

import BaseResumeSection from "./BaseResumeSection";
import EntryTitle from "./ResumeEntryTitle";
import DetailedEntry from "./DetailedEntry";

interface DetailedEntrySectionProps {
  title: string;
  entries: IDetailedEntry[];
}

export default function DetailedEntrySection({
  title,
  entries,
}: DetailedEntrySectionProps) {
  return (
    <Container>
      <EntryTitle>{title}</EntryTitle>
      {entries.map((entry) => (
        <Fragment key={entry.title}>
          <DetailedEntry entry={entry} />
        </Fragment>
      ))}
    </Container>
  );
}

const Container = styled(BaseResumeSection)``;
