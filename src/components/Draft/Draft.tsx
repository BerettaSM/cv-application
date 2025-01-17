import styled from "styled-components";

import ResumePreview from "../ResumePreview/ResumePreview";

import resume from "../../data/example.json";
import { BORDER_RADIUS, PADDING } from "../../constants";

export default function Draft() {
  return (
    <Container>
      <ResumePreviewWrapper>
        <ResumePreview resume={resume} />
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
`;
