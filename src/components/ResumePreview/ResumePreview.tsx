import { Fragment, useRef } from "react";
import styled from "styled-components";
import { SimpleEntry, type Resume } from "../../types";
import html2pdf from "html2pdf.js";

import {
  PersonalSection,
  SimpleSection,
  DetailedSection,
  ListSection,
  DetailedListSection,
} from "./Sections";
import { PADDING } from "../../constants";
import Spacer from "../Spacer";

interface ResumePreviewProps {
  resume: Resume;
}

export default function ResumePreview({ resume }: ResumePreviewProps) {
  const {
    education,
    experience,
    projects,
    skills,
    achievements,
    interests,
    languages,
  } = resume;
  const { profile, ...personal } = resume.personal;

  const ref = useRef<HTMLDivElement | null>(null);

  function doIt() {
    if (!ref.current) return;
    const root = html2pdf();
    root
      .set({
        pagebreak: {
          mode: ["avoid-all", "css"],
          avoid: "img",
        },
        //   image: {
        //     type: 'jpeg',
        //     quality: 0.98,
        //   },
        //   html2canvas: {
        //     dpi: 96,
        //     letterRendering: true,
        //     height: 10000 // doesnt really help
        //   },
        //   jsPDF: {
        //     unit: 'in',
        //     format: 'letter',
        //     orientation: 'portrait'
        //   }
      })
      .from(ref.current, "element")
      .save("mypdf.pdf");
  }

  const sections: { id: string; arr: SimpleEntry[]; element: JSX.Element }[] = [
    {
      arr: education,
      id: "Education",
      element: <DetailedSection title="Education" entries={education} />,
    },
    {
      arr: experience,
      id: "Work Experience",
      element: <DetailedSection title="Work Experience" entries={experience} />,
    },
    {
      arr: projects,
      id: "Projects",
      element: <DetailedSection title="Projects" entries={projects} />,
    },
    {
      arr: skills,
      id: "Skills",
      element: <ListSection title="Skills" entries={skills} />,
    },
    {
      arr: achievements,
      id: "Achievements",
      element: (
        <DetailedListSection title="Achievements" entries={achievements} />
      ),
    },
    {
      arr: interests,
      id: "Interests",
      element: <ListSection title="Interests" entries={interests} />,
    },
    {
      arr: languages,
      id: "Languages",
      element: <ListSection title="Languages" entries={languages} />,
    },
  ];

  return (
    <>
      <button onClick={doIt}>Save?</button>
      <Container ref={ref}>
        <PersonalSection personal={personal} />
        <Spacer size={16} />
        <SimpleSection title="Personal Profile" description={profile} />
        {sections
          .filter(({ arr }) => arr.length > 0)
          .map(({ id, element: Element }) => (
            <Fragment key={id}>
              <Spacer size={16} />
              {Element}
            </Fragment>
          ))}

        {/* 
        <Spacer size={16} />
        <DetailedSection title="Education" entries={education} />
        <Spacer size={16} />
        <DetailedSection title="Work Experience" entries={experience} />
        <Spacer size={16} />
        <DetailedSection title="Projects" entries={projects} />
        <Spacer size={16} />
        <ListSection title="Skills" entries={skills} />
        <Spacer size={16} />
        <DetailedListSection title="Achievements" entries={achievements} />
        <Spacer size={16} />
        <ListSection title="Interests" entries={interests} />
        <Spacer size={16} />
        <ListSection title="Languages" entries={languages} /> */}
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
  overflow-y: auto;
`;
