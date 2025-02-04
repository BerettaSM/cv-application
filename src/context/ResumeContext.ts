import { createContext } from "react";

import type { BulletPointEntryKey, EntriesKey, Resume } from "../types";

interface ResumeContextProps {
  resume: Resume;
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
}

const ResumeContext = createContext({} as ResumeContextProps);

export default ResumeContext;
