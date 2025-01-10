import styled from "styled-components";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Draft from "../Draft";
import Form from "../Form";
import { BORDER_RADIUS, PADDING } from "../../constants";
// import Actions from "./Actions";

export default function ResumeGenerator() {
  return (
    <Container>
      <Title>CV Generator</Title>
      <Main>
        <Form />
        <Draft />
        {/* <Actions /> */}
      </Main>
    </Container>
  );
}

const Container = styled(MaxWidthWrapper)`
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
    padding: ${() => PADDING.sm};
    border-radius: ${() => BORDER_RADIUS};
  }
`;
