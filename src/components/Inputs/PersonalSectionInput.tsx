import styled from "styled-components";
import type { PersonalInfo, Socials } from "../../types";

import { PADDING } from "../../constants";
import TextInput from "./TextInput";

interface PersonalSectionInput {
  personal: PersonalInfo;
  onUpdate: (
    path: string,
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface SocialInputInfo {
  label: string;
  type?: "tel" | "email" | "url";
  placeholder: string;
  path: string;
}

const socialInputInfo: Record<keyof Socials, SocialInputInfo> = {
  phone: {
    label: "Phone",
    type: "tel",
    placeholder: "(555) 12345-6789",
    path: "personal.socials.phone",
  },
  email: {
    label: "Email",
    type: "email",
    placeholder: "youremail@example.com",
    path: "personal.socials.email",
  },
  website: {
    label: "Website",
    type: "url",
    placeholder: "mywebsite.com",
    path: "personal.socials.website",
  },
  github: {
    label: "Github",
    placeholder: "johndoe",
    path: "personal.socials.github",
  },
  linkedIn: {
    label: "LinkedIn",
    placeholder: "johndoe",
    path: "personal.socials.linkedIn",
  },
};

export default function PersonalSectionInput({
  personal,
  onUpdate,
}: PersonalSectionInput) {
  const { socials } = personal;
  const socialKeys = Object.keys(socials) as (keyof Socials)[];

  return (
    <Container>
      <Title>Personal Profile</Title>
      <TextInput
        label="Name"
        placeholder="John Doe"
        value={personal.name}
        onChange={onUpdate("personal.name")}
      />
      <TextInput
        label="Address"
        placeholder="Groove Street, Home"
        value={personal.address}
        onChange={onUpdate("personal.address")}
      />
      {socialKeys.map((key) => (
        <TextInput
          key={key}
          label={socialInputInfo[key].label}
          placeholder={socialInputInfo[key].placeholder}
          value={socials[key]}
          onChange={onUpdate(socialInputInfo[key].path)}
        />
      ))}

      <TextInput
        label="Personal Profile"
        placeholder="Write something about yourself here."
        as="textarea"
        value={personal.profile}
        onChange={onUpdate("personal.profile")}
      />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: auto;
  align-items: center;
  gap: ${() => PADDING.sm};
`;

const Title = styled.h3`
  font-size: 1.5rem;
`;
