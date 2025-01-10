import styled from "styled-components";
import { type PersonalInfo } from "../../types";

import { BaseEntrySection } from "./BaseEntrySection";
import SocialsDisplay from "../Socials/Socials";
import Spacer from "../Spacer";

interface PersonalEntrySectionProps {
  personal: PersonalInfo;
}

export default function PersonalEntrySection({
  personal,
}: PersonalEntrySectionProps) {
  return (
    <BaseEntrySection>
      <Title>{personal.name}</Title>
      <Address>{personal.address}</Address>
      <Spacer size={12} />
      <SocialsDisplay socials={personal.socials} />
    </BaseEntrySection>
  );
}

const Title = styled.h1`
  color: var(--COLOR_GRAY-100);
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
`;

const Address = styled.address`
  color: var(--COLOR_GRAY-500);
  font-size: 0.65rem;
  font-weight: 400;
  text-align: center;
  line-height: 1;
  text-transform: uppercase;
`;
