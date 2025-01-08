import styled from "styled-components";

import MaxWidthWrapper from "./MaxWidthWrapper";
import Draft from "./Draft";
import Form from "./Form";
import { PADDING } from "../constants";
// import Actions from "./Actions";

export default function Generator() {
  return (
    <Wrapper>
      <Title>CV Generator</Title>
      <Main>
        <Form />
        <Draft />
        {/* <Actions /> */}
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
