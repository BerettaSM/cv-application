import { useRef } from "react";
import styled from "styled-components";
import { type Resume } from "../../types";
import html2pdf from "html2pdf.js";

import {
  PersonalSection,
  SimpleSection,
  DetailedSection,
  ListSection,
} from "./Sections";
import { PADDING } from "../../constants";
import Spacer from "../Spacer";

interface ResumePreviewProps {
  resume: Resume;
}

export default function ResumePreview({ resume }: ResumePreviewProps) {
  const { education, experience, projects, skills } = resume;
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
        <PersonalSection personal={personal} />
        <Spacer size={16} />
        <SimpleSection title="Personal Profile" description={profile} />
        <Spacer size={16} />
        <DetailedSection title="Education" entries={education} />
        <Spacer size={16} />
        <DetailedSection title="Work Experience" entries={experience} />
        <Spacer size={16} />
        <DetailedSection title="Projects" entries={projects} />
        <Spacer size={16} />
        <ListSection title="Skills" entries={skills} />
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
