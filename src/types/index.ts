export interface Socials {
  phone: string;
  email: string;
  website: string;
  github: string;
  linkedIn: string;
}

export interface BulletPoint {
  id: string;
  bold: string | null;
  text: string;
}

export interface SimpleEntry {
  id: string;
  title: string;
  description: string;
}

export interface YearEntry extends SimpleEntry {
  year: number;
  location: string;
}

export interface DetailedEntry extends SimpleEntry {
  timeline: string;
  location: string;
  bulletPoints: BulletPoint[];
}

export interface PersonalInfo {
  name: string;
  address: string;
  socials: Socials;
  profile: string;
}

export interface Resume {
  personal: PersonalInfo;
  education: DetailedEntry[];
  experience: DetailedEntry[];
  projects: DetailedEntry[];
  skills: SimpleEntry[];
  achievements: YearEntry[];
  interests: SimpleEntry[];
  languages: SimpleEntry[];
}

export type Entries = {
  readonly [K in keyof Omit<Resume, "personal">]: Resume[K][0];
};

export type EntriesKey = keyof Entries;

export type BulletPointEntryKey = Extract<
  EntriesKey,
  "education" | "experience" | "projects"
>;
