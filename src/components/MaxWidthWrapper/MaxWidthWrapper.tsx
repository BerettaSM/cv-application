import styled from "styled-components";

import { PADDING } from "../../constants";

const MaxWidthWrapper = styled.div`
  margin: auto;
  padding-block: ${() => PADDING.md};
  max-width: 80rem;
`;

export default MaxWidthWrapper;
