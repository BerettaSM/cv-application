import styled from "styled-components";

import { PADDING } from "../../constants";

const MaxWidthWrapper = styled.div<{ max?: string }>`
  margin: auto;
  padding-block: ${() => PADDING.md};
  max-width: ${(p) => p.max || "80rem"};
`;

export default MaxWidthWrapper;
