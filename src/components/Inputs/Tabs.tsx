import { useId } from "react";
import styled from "styled-components";

import { TabButton } from "../Buttons";

interface TabsProps<T extends string> {
  entries: T[];
  selectedTab: T;
  onChange(entry: T): void;
}

export default function Tabs<T extends string>({
  entries,
  selectedTab,
  onChange,
}: TabsProps<T>) {
  if (!entries.length) {
    throw new Error(
      'entries for "Tabs" component must have at least one value.',
    );
  }

  const id = useId();

  return (
    <Container>
      {entries.map((entry) => (
        <TabButton
          key={entry}
          name={`tab-${id}`}
          onTabChange={onChange}
          checked={selectedTab == entry}
          value={entry}
        >
          {entry}
        </TabButton>
      ))}
    </Container>
  );
}

const Container = styled.div`
  isolation: isolate;
  position: absolute;
  left: 8px;
  top: 0;
  transform: translateY(calc(-100% + 2px));
  max-width: calc(100% - 16px);
  overflow-x: hidden;
  scroll-snap-type: x proximity;
  display: flex;

  & > *:not(:first-of-type) {
    margin-inline-start: 4px;
  }
`;
