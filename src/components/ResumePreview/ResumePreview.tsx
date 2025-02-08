import { ForwardedRef, Fragment, forwardRef } from "react";
import styled from "styled-components";
import { SimpleEntry, type Resume } from "../../types";

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

const ResumePreview = forwardRef(
  ({ resume }: ResumePreviewProps, ref: ForwardedRef<HTMLDivElement>) => {
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

    const sections: { id: string; arr: SimpleEntry[]; element: JSX.Element }[] =
      [
        {
          arr: education,
          id: "Education",
          element: <DetailedSection title="Education" entries={education} />,
        },
        {
          arr: experience,
          id: "Work Experience",
          element: (
            <DetailedSection title="Work Experience" entries={experience} />
          ),
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
      </Container>
    );
  },
);

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

  @media print {
    padding: none;
  }
`;

export default ResumePreview;
