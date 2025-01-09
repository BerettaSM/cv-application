export interface Socials {
  phone: string;
  email: string;
  website: string;
  github: string;
  linkedIn: string;
}

export interface BulletPoint {
  bold: string | null;
  text: string;
}

export interface SimpleEntry {
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
