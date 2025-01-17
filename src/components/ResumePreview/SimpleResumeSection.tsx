import styled from "styled-components";
import { type SimpleEntry as SimpleEntryProps } from "../../types";

import { PADDING } from "../../constants";
import BaseResumeSection from "./BaseResumeSection";
import EntryTitle from "./ResumeEntryTitle";

export default function SimpleResumeSection({
  title,
  description,
}: SimpleEntryProps) {
  return (
    <Container>
      <EntryTitle>{title}</EntryTitle>
      <Description>{description}</Description>
    </Container>
  );
}

const Container = styled(BaseResumeSection)``;

const Description = styled.p`
  font-size: 0.6em;
  font-weight: 350;
  padding-block-start: ${() => PADDING.sm};
`;
