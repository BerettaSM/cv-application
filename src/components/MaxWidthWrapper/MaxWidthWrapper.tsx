import styled from "styled-components";

const MaxWidthWrapper = styled.div<{ max?: string }>`
  margin: auto;
  max-width: ${(p) => p.max || "80rem"};
`;

export default MaxWidthWrapper;
