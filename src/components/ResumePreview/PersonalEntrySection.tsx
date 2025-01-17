import styled from "styled-components";
import { type PersonalInfo } from "../../types";

import BaseEntry from "./BaseResumeSection";
import SocialsDisplay from "../Socials/Socials";
import Spacer from "../Spacer";

interface PersonalEntrySectionProps {
  personal: Omit<PersonalInfo, "profile">;
}

export default function PersonalEntrySection({
  personal: { name, address, socials },
}: PersonalEntrySectionProps) {
  return (
    <BaseEntry>
      <Title>{name}</Title>
      <Address>{address}</Address>
      <Spacer size={3} />
      <SocialsDisplay socials={socials} />
    </BaseEntry>
  );
}

const Title = styled.h2`
  color: var(--COLOR_GRAY-100);
  font-size: 1.5em;
  font-weight: 300;
  text-align: center;
`;

const Address = styled.address`
  color: var(--COLOR_GRAY-500);
  font-size: 0.65em;
  font-weight: 400;
  text-align: center;
  line-height: 1;
  text-transform: uppercase;
`;
