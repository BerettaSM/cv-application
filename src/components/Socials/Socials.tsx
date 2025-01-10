import styled from "styled-components";
import { Fragment } from "react";
import { Socials } from "../../types";

import Social from "./Social";

import email from "../../assets/envelope.svg";
import github from "../../assets/github.svg";
import website from "../../assets/house.svg";
import linkedIn from "../../assets/linkedin.svg";
import phone from "../../assets/phone.svg";

const ICONS = {
  email,
  github,
  website,
  linkedIn,
  phone,
} satisfies Socials;

interface SocialsDisplayProps {
  socials: Socials;
}

export default function SocialsDisplay({ socials }: SocialsDisplayProps) {
  const keys = Object.keys(socials) as (keyof typeof socials)[];

  return (
    <Container>
      {keys.map((key, index) => (
        <Fragment key={key}>
          <Social text={socials[key]} svg={ICONS[key]} />
          {index != keys.length - 1 && "|"}
        </Fragment>
      ))}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  align-items: center;
  font-size: 0.5rem;
  color: var(--COLOR_GRAY-100);
`;
