import { FormEvent } from "react";
import styled from "styled-components";

import { BORDER_RADIUS, PADDING } from "../../constants";
import { TextInput } from "../Inputs";
import { useResume } from "../../hooks";

export default function CVForm() {
  const { resume, updateValue } = useResume();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log("Submitted");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Personal Profile</Title>

      <InputGrouper>
        <TextInput
          label="Name"
          placeholder="John Doe"
          value={resume.personal.name}
          //   onChange={(e) => updateValue("personal.name", e.target.value)}
          onChange={updateValue("personal.name")}
        />
        <TextInput
          label="Address"
          placeholder="Groove Street, Home"
          value={resume.personal.address}
          onChange={updateValue("personal.address")}
        />
        <TextInput
          label="Phone"
          type="tel"
          placeholder="(555) 12345-6789"
          value={resume.personal.socials.phone}
          onChange={updateValue("personal.socials.phone")}
        />
        <TextInput
          label="Email"
          type="email"
          placeholder="youremail@example.com"
          value={resume.personal.socials.email}
          onChange={updateValue("personal.socials.email")}
        />
        <TextInput
          label="Website"
          type="url"
          placeholder="mywebsite.com"
          value={resume.personal.socials.website}
          onChange={updateValue("personal.socials.website")}
        />
        <TextInput
          label="Github"
          placeholder="johndoe"
          value={resume.personal.socials.github}
          onChange={updateValue("personal.socials.github")}
        />
        <TextInput
          label="LinkedIn"
          placeholder="johndoe"
          value={resume.personal.socials.linkedIn}
          onChange={updateValue("personal.socials.linkedIn")}
        />
        <TextInput
          label="Personal Profile"
          placeholder="Write something about yourself here."
          as="textarea"
          value={resume.personal.profile}
          onChange={updateValue("personal.profile")}
        />
      </InputGrouper>

      <Submit>Submit</Submit>
    </Form>
  );
}

const Form = styled.form`
  flex: 1 1 0px;
  background-color: var(--THEME_COLOR_02);
  padding: ${() => PADDING.sm};
  border-radius: ${() => BORDER_RADIUS};
`;

const Title = styled.h3``;

const InputGrouper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: auto;
  align-items: center;
  gap: ${() => PADDING.sm};
`;

const Submit = styled.button``;
