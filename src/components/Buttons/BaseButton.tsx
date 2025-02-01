import styled from "styled-components";
import { PADDING } from "../../constants";

const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${() => PADDING.sm};
  border: 2px solid inherit;
  padding: ${() => PADDING.sm} ${() => PADDING.md};
  cursor: pointer;
  transition: filter ease-out 500ms;
  &:hover,
  &:active {
    filter: brightness(0.8);
    transition: filter ease-in 150ms;
  }
`;

export default BaseButton;
