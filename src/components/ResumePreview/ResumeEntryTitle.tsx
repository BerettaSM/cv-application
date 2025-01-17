import { PropsWithChildren } from "react";
import styled from "styled-components";

import { PADDING } from "../../constants";

export default function ResumeEntryTitle({ children }: PropsWithChildren) {
  return (
    <Container>
      <Title>{children}</Title>
      <HR />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  isolation: isolate;
  line-height: 1;
`;

const Title = styled.h3`
  position: relative;
  background-color: #fff;
  color: var(--COLOR_GRAY-100);
  font-weight: 500;
  padding-inline-end: ${() => PADDING.sm};
  width: fit-content;
  z-index: 1;
`;

const HR = styled.hr`
  position: absolute;
  color: var(--COLOR_GRAY-500);
  bottom: 2px;
  left: 0;
  right: 0;
  z-index: 0;
`;
