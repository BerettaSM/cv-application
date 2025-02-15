import {
  type ChangeEvent,
  useCallback,
  useEffect,
  useId,
  useState,
} from "react";
import styled from "styled-components";
import { PADDING } from "../../constants";

interface RadioInputProps<T, U extends string, V extends string> {
  title: string;
  entries: T[];
  selected?: V;
  name?: string;
  labelMapper(value: T): U;
  valueMapper(value: T): V;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
  fallback?: JSX.Element;
}

const Fallback = () => <p style={{ textAlign: "center" }}>No entries.</p>;

export default function RadioInput<T, U extends string, V extends string>({
  title,
  entries,
  labelMapper,
  valueMapper,
  selected,
  name,
  onChange,
  fallback = <Fallback />,
}: RadioInputProps<T, U, V>) {
  const getSelectedValue = useCallback(() => {
    if (entries.length === 0) {
      return null;
    }
    if (selected) {
      return selected;
    }
    return valueMapper(entries[0]);
  }, [selected, entries, valueMapper]);

  const [selectedValue, setSelectedValue] = useState<V | null>(
    getSelectedValue(),
  );

  useEffect(() => {
    setSelectedValue(getSelectedValue());
  }, [entries, getSelectedValue]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSelectedValue(e.target.value as V);
    if (onChange) {
      onChange(e);
    }
  }

  const componentId = useId();
  const componentName = name ?? `${title}-${componentId}`;

  return (
    <Container>
      <Legend>{title}</Legend>

      {entries.length === 0 ? (
        fallback
      ) : (
        <RadioContainer>
          {entries.map((entry) => {
            const label = labelMapper(entry);
            const value = valueMapper(entry);
            const id = `${componentName}-${value}`;
            const isSelected = value === selectedValue;

            return (
              <RadioWrapper key={value} selected={isSelected}>
                <Input
                  type="radio"
                  name={componentName}
                  value={value}
                  id={id}
                  checked={isSelected}
                  onChange={handleChange}
                />
                <Label htmlFor={id}>{label}</Label>
              </RadioWrapper>
            );
          })}
        </RadioContainer>
      )}
    </Container>
  );
}

const Container = styled.fieldset`
  grid-column: 1 / -1;
  border-color: var(--THEME_COLOR_01);
`;

const RadioContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: 4px;
  max-height: min(20rem, 40dvh);
  overflow-y: auto;
  padding: ${() => PADDING.sm};
`;

const RadioWrapper = styled.div<{ selected: boolean }>`
  display: flex;
  text-align: center;
  gap: 8px;
  background-color: ${({ selected }) =>
    selected ? "var(--THEME_COLOR_03)" : "transparent"};
  border: 1px solid
    ${({ selected }) => (selected ? "var(--THEME_COLOR_01)" : "transparent")};
  color: ${({ selected }) => (selected ? "var(--THEME_COLOR_01)" : "inherit")};
  border-radius: 8px;
  cursor: pointer;
  padding: ${() => PADDING.sm};

  max-width: 100%;

  &:hover {
    border-color: var(--THEME_COLOR_02);
    color: var(--THEME_COLOR_02);
  }

  transition:
    background-color 250ms linear,
    color 250ms linear,
    border-color 250ms linear;
`;

const Input = styled.input`
  cursor: inherit;
`;

const Label = styled.label`
  cursor: inherit;
  text-align: left;
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

const Legend = styled.legend`
  width: 100%;
  color: var(--COLOR_GRAY-900);
  background-color: var(--THEME_COLOR_01);
  text-align: center;
`;
