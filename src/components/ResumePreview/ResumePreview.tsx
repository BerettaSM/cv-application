import styled from "styled-components";
import { type Resume } from "../../types";

import { PADDING } from "../../constants";
import PersonalEntrySection from "./PersonalEntrySection";
import SimpleResumeSection from "./SimpleResumeSection";
import Spacer from "../Spacer";
import DetailedEntrySection from "./DetailedEntrySection";

import html2pdf from "html2pdf.js";
import { useRef } from "react";

interface ResumePreviewProps {
  resume: Resume;
}

export default function ResumePreview({ resume }: ResumePreviewProps) {
  const { education, experience, projects } = resume;
  const { profile, ...personal } = resume.personal;

  const ref = useRef<HTMLDivElement | null>(null);

  function doIt() {
    if (!ref.current) return;
    const root = html2pdf();
    root
      //   .set({
      //     pagebreak: {
      //       mode: ["avoid-all", "css"],
      //       avoid: "img",
      //     },
      //   })
      .from(ref.current, "element")
      .save("mypdf.pdf");
  }

  return (
    <>
      <button onClick={doIt}>Save?</button>
      <Container ref={ref}>
        <PersonalEntrySection personal={personal} />
        <Spacer size={16} />
        <SimpleResumeSection title="Personal Profile" description={profile} />
        <Spacer size={16} />
        <DetailedEntrySection title="Education" entries={education} />
        <Spacer size={16} />
        <DetailedEntrySection title="Work Experience" entries={experience} />
        <Spacer size={16} />
        <DetailedEntrySection title="Projects" entries={projects} />
      </Container>
    </>
  );
}

const Container = styled.div`
  --md: ${() => PADDING.md};
  --sm: ${() => PADDING.sm};
  --lg: ${() => PADDING.lg};
  position: relative;
  background-color: #fff;
  font-family: "Roboto", Helvetica, sans-serif;
  padding: var(--md) var(--lg);
  font-size: 1rem;
  max-height: calc(
    100dvh - 5dvh - var(--sm) * 2 - var(--sm) * 2 - var(--md) * 2
  );
  overflow-y: auto;
`;
