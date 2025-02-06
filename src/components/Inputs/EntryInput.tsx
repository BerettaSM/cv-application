import styled from "styled-components";

import { Button } from "../Buttons";
import type { EntriesKey, Resume } from "../../types";
import { TextInput } from ".";
import Spacer from "../Spacer";

interface EntryInputProps<T> {
  entry: T;
  index: number;
  section: EntriesKey;
  onDelete(): void;
  onUpdate: (
    path: string,
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EntryInput<U extends Resume[EntriesKey][0]>({
  entry,
  index,
  section,
  onDelete,
  onUpdate,
}: EntryInputProps<U>) {
  const keys = Object.keys(entry).filter(
    (k) => k != "id" && k != "bulletPoints",
  ) as (keyof typeof entry)[];

  return (
    <Container>
      <Title>Entry (#{index})</Title>
      <Spacer size={8} />
      <InputWrapper>
        {keys.map((key) => (
          <TextInput
            key={key as string}
            label={key as string}
            value={entry[key] as string}
            onChange={onUpdate(`${section}.${index}.${key as string}`)}
          />
        ))}
      </InputWrapper>
      <ButtonWrapper>
        <Button mood="danger" onClick={onDelete}>
          Delete entry
        </Button>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div``;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: auto;
  align-items: center;
  gap: 8px;
`;

const Title = styled.h4`
  text-align: center;
  font-size: 1.25rem;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 4px;
  right: 16px;
`;
