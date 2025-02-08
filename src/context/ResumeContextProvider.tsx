import { useCallback, useRef, useState, type PropsWithChildren } from "react";

import type {
  BulletPointEntryKey,
  Entries,
  EntriesKey,
  Resume,
} from "../types";
import { deepCopy } from "../utils";
import { ResumeContext } from ".";
import html2pdf from "html2pdf.js";

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

import example from "../data/example.json";

export default function ResumeContextProvider({ children }: PropsWithChildren) {
  // TODO: Change back after testing
  const [resume, setResume] = useState<Resume>(deepCopy(example));
  const previewRef = useRef<HTMLDivElement | null>(null);

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

  const deleteBulletPoint = useCallback(
    (section: BulletPointEntryKey, entryId: string, bulletPointId: string) => {
      setResume((prevResume) => {
        const entry = prevResume[section].find((e) => e.id === entryId);
        if (!entry) return prevResume;
        const bulletPointIndex = entry.bulletPoints.findIndex(
          (b) => b.id === bulletPointId,
        );
        if (bulletPointIndex === -1) return prevResume;
        const updatedResume = { ...prevResume };
        entry.bulletPoints.splice(bulletPointIndex, 1);
        return updatedResume;
      });
    },
    [],
  );

  const updateValue = useCallback((path: string) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      setResume((prevResume) => {
        const tokens = path.replace(/\s+/g, "").split(".");
        const updatedResume = { ...prevResume };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let e: any = updatedResume;
        for (let i = 0; i < tokens.length; i++) {
          if (i !== tokens.length - 1) {
            if (Array.isArray(e)) {
              e = [...e];
            } else if (typeof e === "object" && e !== null) {
              e = { ...e };
            }
            e = e[tokens[i]];
          } else {
            e[tokens[i]] = event.target.value;
          }
        }
        return updatedResume;
      });
    };
  }, []);

  const downloadResume = useCallback((name: string = "resume") => {
    if (!previewRef.current) return;
    const root = html2pdf();
    root
      .set({
        pagebreak: {
          mode: ["avoid-all", "css"],
          avoid: "img",
        },
      })
      .from(previewRef.current, "element")
      .save(`${name}.pdf`);
  }, []);

  const context = {
    resume,
    resetResume,
    createEntry,
    deleteEntry,
    createBulletPoint,
    deleteBulletPoint,
    updateValue,
    previewRef,
    downloadResume,
  };

  return (
    <ResumeContext.Provider value={context}>{children}</ResumeContext.Provider>
  );
}
