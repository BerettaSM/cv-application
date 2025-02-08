import styled from "styled-components";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Draft from "../Draft";
import Form from "../Form";
import { PADDING } from "../../constants";
import Spacer from "../Spacer";

export default function ResumeGenerator() {
  return (
    <Container>
      <TitleWrapper>
        <Title>CV Generator</Title>
        <Spacer size={32} />
      </TitleWrapper>
      <Main>
        <Form />
        <Draft />
      </Main>
    </Container>
  );
}

const Container = styled(MaxWidthWrapper)`
  height: 100dvh;
  display: flex;
  padding-block: ${() => PADDING.md};
  flex-direction: column;

  @media print {
    padding: 0;
  }
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5dvh;
`;

const TitleWrapper = styled.div`
  @media print {
    display: none;
  }
`;

const Main = styled.main`
  flex: 1;
  background-color: var(--THEME_COLOR_03);
  display: flex;
  align-items: start;
  gap: 8px;
  padding: ${() => PADDING.sm};

  @media print {
    padding: 0;
  }
`;
