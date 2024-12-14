import styled from "styled-components";

import MaxWidthWrapper from "./MaxWidthWrapper";

export default function CVGenerator() {
  return (
    <MaxWidthWrapper>
      <Title>CV Generator</Title>

      <Main></Main>
    </MaxWidthWrapper>
  );
}

const Title = styled.h1`
  text-align: center;
`;

const Main = styled.main``;
