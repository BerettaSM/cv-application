import styled from "styled-components";
import { type Resume } from "../../types";

import { PADDING } from "../../constants";
import PersonalEntrySection from "./PersonalEntrySection";

interface ResumePreviewProps {
  resume: Resume;
}

export default function ResumePreview({ resume }: ResumePreviewProps) {
  return (
    <Container>
      <PersonalEntrySection personal={resume.personal} />
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
  font-family: "Roboto", Helvetica, sans-serif;
  height: 100%;
  padding: ${() => PADDING.md} ${() => PADDING.lg};
`;
