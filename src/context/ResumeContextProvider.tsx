import { useCallback, useState, type PropsWithChildren } from "react";

import type {
  BulletPointEntryKey,
  Entries,
  EntriesKey,
  Resume,
} from "../types";
import { deepCopy } from "../utils";
import { ResumeContext } from ".";

import blankResume from "../data/blank-resume.json";
import blankBulletpoint from "../data/blank-bulletpoint.json";
import blankDetailedEntry from "../data/blank-detailed-entry.json";
import blankSimpleEntry from "../data/blank-simple-entry.json";
import blankYearEntry from "../data/blank-year-entry.json";

const entries: Entries = {
  achievements: blankYearEntry,
  education: blankDetailedEntry,
  experience: blankDetailedEntry,
  interests: blankSimpleEntry,
  languages: blankSimpleEntry,
  projects: blankDetailedEntry,
  skills: blankSimpleEntry,
};

export default function ResumeContextProvider({ children }: PropsWithChildren) {
  const [resume, setResume] = useState<Resume>(deepCopy(blankResume));

  const resetResume = useCallback(() => {
    setResume(deepCopy(blankResume));
  }, []);

  const createEntry = useCallback((sectionKey: EntriesKey) => {
    setResume((prevResume) => {
      const updatedResume = { ...prevResume };
      const section = updatedResume[sectionKey] as Entries[keyof Entries][];
      section.push({
        ...deepCopy(entries[sectionKey]),
        id: crypto.randomUUID(),
      });
      return updatedResume;
    });
  }, []);

  const deleteEntry = useCallback((sectionKey: EntriesKey, entryId: string) => {
    setResume((prevResume) => {
      const section = prevResume[sectionKey];
      if (!section) return prevResume;
      const entryIndex = section.findIndex((e) => e.id === entryId);
      if (entryIndex === -1) return prevResume;
      const updatedResume = { ...prevResume };
      section.splice(entryIndex, 1);
      return updatedResume;
    });
  }, []);

  const createBulletPoint = useCallback(
    (section: BulletPointEntryKey, entryId: string) => {
      setResume((prevResume) => {
        const entry = prevResume[section].find((e) => e.id === entryId);
        if (!entry) return prevResume;
        const updatedResume = { ...prevResume };
        entry.bulletPoints.push({
          ...deepCopy(blankBulletpoint),
          id: crypto.randomUUID(),
        });
        return updatedResume;
      });
    },
    [],
  );

  const context = {
    resume,
    resetResume,
    createEntry,
    deleteEntry,
    createBulletPoint,
  };

  return (
    <ResumeContext.Provider value={context}>{children}</ResumeContext.Provider>
  );
}
