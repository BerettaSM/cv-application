import styled from "styled-components";
import { type SimpleEntry } from "../../../types";

import { PADDING } from "../../../constants";
import { BaseSection, SectionTitle } from ".";

type SimpleSectionsProps = Omit<SimpleEntry, "id">;

export default function SimpleSection({
  title,
  description,
}: SimpleSectionsProps) {
  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
      <Description>{description}</Description>
    </Container>
  );
}

const Container = styled(BaseSection)``;

const Description = styled.p`
  font-size: 0.6em;
  font-weight: 350;
  padding-block-start: ${() => PADDING.sm};
`;
