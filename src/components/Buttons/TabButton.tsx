import styled from "styled-components";
import {
  useRef,
  type ComponentProps,
  type PropsWithChildren,
  type ChangeEvent,
} from "react";

import { PADDING } from "../../constants";

interface TabButtonProps<T extends string>
  extends ComponentProps<"input">,
    PropsWithChildren {
  onTabChange(newTab: T): void;
}

export default function TabButton<T extends string>({
  children,
  onTabChange,
  ...delegated
}: TabButtonProps<T>) {
  const selected = !!delegated.checked;

  const ref = useRef<HTMLLabelElement | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onTabChange(e.target.value as T);
    ref.current!.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "end",
    });
  }

  return (
    <Container selected={selected} ref={ref}>
      <RadioButton {...delegated} onChange={handleChange} type="radio" />
      {children}
    </Container>
  );
}

const Container = styled.label<{ selected: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 2px solid var(--THEME_COLOR_02);
  border-radius: 8px 8px 0 0;
  padding: 0 ${() => PADDING.md};
  height: 2.5rem;
  transition: 500ms ease-out;
  text-transform: capitalize;

  scroll-snap-align: center;

  background-color: ${({ selected }) =>
    selected ? "var(--THEME_COLOR_02)" : "var(--THEME_COLOR_03)"};
  color: ${({ selected }) =>
    selected ? "var(--THEME_COLOR_03)" : "var(--THEME_COLOR_02)"};
  cursor: ${({ selected }) => (selected ? "not-allowed" : "pointer")};

  &:hover {
    filter: ${({ selected }) => !selected && "brightness(0.9)"};
    transition: 150ms ease-in;
  }
`;

const RadioButton = styled.input`
  display: none;
`;
