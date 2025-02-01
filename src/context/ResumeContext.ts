import { createContext } from "react";

import type { BulletPointEntryKey, EntriesKey, Resume } from "../types";

interface ResumeContext {
  resume: Resume;

  resetResume: () => void;
  createEntry: (sectionKey: EntriesKey) => void;
  deleteEntry: (sectionKey: EntriesKey, entryId: string) => void;
  createBulletPoint: (section: BulletPointEntryKey, entryId: string) => void;
  //   updateValue: (path: string, value: string) => void;
  updateValue: (
    path: string,
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ResumeContext = createContext({} as ResumeContext);

export default ResumeContext;
