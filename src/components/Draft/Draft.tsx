import styled from "styled-components";
import { useResume } from "../../hooks";

import ResumePreview from "../ResumePreview";
import { BORDER_RADIUS, PADDING } from "../../constants";

export default function Draft() {
  const { resume, previewRef } = useResume();

  return (
    <Container>
      <ResumePreviewWrapper>
        <ResumePreview resume={resume} ref={previewRef} />
      </ResumePreviewWrapper>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  flex: 1 1 0px;
  display: flex;
  height: fit-content;
`;

const ResumePreviewWrapper = styled.div`
  background-color: var(--THEME_COLOR_02);
  padding: ${() => PADDING.sm};
  border-radius: ${() => BORDER_RADIUS};
  width: 100%;

  @media print {
    padding: 0;
  }
`;
