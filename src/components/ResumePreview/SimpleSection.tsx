import styled from "styled-components";
import { type SimpleEntry as SimpleEntryProps } from "../../types";

import { PADDING } from "../../constants";
import BaseSection from "./BaseSection";
import SectionTitle from "./SectionTitle";

export default function SimpleSection({
  title,
  description,
}: SimpleEntryProps) {
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
