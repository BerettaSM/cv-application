import styled from "styled-components";
import { useCallback, useState } from "react";

import type { Resume } from "../../types";
import { BORDER_RADIUS, PADDING } from "../../constants";
import { PersonalSectionInput, SectionInput } from "../Inputs";
import { useResume } from "../../hooks";
import { Tabs } from "../Inputs";
import Actions from "../Actions";

export default function CVForm() {
  const {
    resume,
    updateValue,
    createEntry,
    deleteEntry,
    createBulletPoint,
    deleteBulletPoint,
  } = useResume();

  const resumeKeys = Object.keys(resume);

  const [selectedTab, setSelectedTab] = useState<keyof Resume>("personal");

  const inputs: Record<keyof Resume, JSX.Element> = {
    personal: (
      <PersonalSectionInput onUpdate={updateValue} personal={resume.personal} />
    ),
    education: (
      <SectionInput
        onAdd={createEntry}
        onDelete={deleteEntry}
        section="education"
        entries={resume.education}
        onUpdate={updateValue}
        onAddBulletPoint={createBulletPoint}
        onDeleteBulletPoint={deleteBulletPoint}
      />
    ),
    achievements: (
      <SectionInput
        onAdd={createEntry}
        onDelete={deleteEntry}
        section="achievements"
        entries={resume.achievements}
        onUpdate={updateValue}
      />
    ),
    skills: (
      <SectionInput
        onAdd={createEntry}
        onDelete={deleteEntry}
        section="skills"
        entries={resume.skills}
        onUpdate={updateValue}
      />
    ),
    experience: (
      <SectionInput
        onAdd={createEntry}
        onDelete={deleteEntry}
        section="experience"
        entries={resume.experience}
        onUpdate={updateValue}
        onAddBulletPoint={createBulletPoint}
        onDeleteBulletPoint={deleteBulletPoint}
      />
    ),
    projects: (
      <SectionInput
        onAdd={createEntry}
        onDelete={deleteEntry}
        section="projects"
        entries={resume.projects}
        onUpdate={updateValue}
        onAddBulletPoint={createBulletPoint}
        onDeleteBulletPoint={deleteBulletPoint}
      />
    ),
    interests: (
      <SectionInput
        onAdd={createEntry}
        onDelete={deleteEntry}
        section="interests"
        entries={resume.interests}
        onUpdate={updateValue}
      />
    ),
    languages: (
      <SectionInput
        onAdd={createEntry}
        onDelete={deleteEntry}
        section="languages"
        entries={resume.languages}
        onUpdate={updateValue}
      />
    ),
  };

  const handleTabChange = useCallback((newTab: keyof Resume) => {
    setSelectedTab(newTab);
  }, []);

  return (
    <Form>
      <Tabs
        entries={resumeKeys}
        onChange={handleTabChange}
        selectedTab={selectedTab}
      />
      <Actions />
      {inputs[selectedTab]}
    </Form>
  );
}

const Form = styled.section`
  position: relative;
  flex: 1 1 0px;
  background-color: var(--THEME_COLOR_02);
  padding: ${() => PADDING.sm};
  border-radius: ${() => BORDER_RADIUS};

  @media print {
    display: none;
  }
`;
