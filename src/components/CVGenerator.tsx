import styled from "styled-components";

import MaxWidthWrapper from "./MaxWidthWrapper";
import CVDraft from "./CVDraft";
import CVForm from "./CVForm";
import { PADDING } from "../constants";
// import CVActions from "./CVActions";

export default function CVGenerator() {
  return (
    <Wrapper>
      <Title>CV Generator</Title>
      <Main>
        <CVForm />
        <CVDraft />
        {/* <CVActions /> */}
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  height: 100dvh;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  gap: 8px;
  padding: ${() => PADDING.sm};

  background-color: var(--THEME_COLOR_03);

  & > * {
    flex: 1 1 0px;
    background-color: var(--THEME_COLOR_02);
  }
`;
