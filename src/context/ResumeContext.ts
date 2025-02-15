import { createContext } from "react";

import type {
  BulletPointEntryKey,
  EntriesKey,
  Resume,
  SavedResume,
} from "../types";

interface ResumeContextProps {
  resume: Resume;
  savedResumes: SavedResume[];
  previewRef: React.MutableRefObject<HTMLDivElement | null>;
  resetResume: () => void;
  createEntry: (sectionKey: EntriesKey) => void;
  deleteEntry: (sectionKey: EntriesKey, entryId: string) => void;
  createBulletPoint: (section: BulletPointEntryKey, entryId: string) => void;
  deleteBulletPoint: (
    section: BulletPointEntryKey,
    entryId: string,
    bulletPointId: string,
  ) => void;
  updateValue: (
    path: string,
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  downloadResume(): void;
  loadResume(resumeId: string): void;
  saveResume(resume: Resume, name: string): void;
  deleteResume(resumeId: string): void;
}

const ResumeContext = createContext({} as ResumeContextProps);

export default ResumeContext;
