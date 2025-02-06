import { Fragment } from "react/jsx-runtime";
import styled from "styled-components";

import { Button } from "../Buttons";
import type { BulletPointEntryKey, EntriesKey, Resume } from "../../types";
import { EntryInput, TextInput } from ".";
import Spacer from "../Spacer";
import { PADDING } from "../../constants";

interface SectionInputProps<K extends EntriesKey> {
  section: K;
  entries: Resume[K];
  onAdd(sectionKey: EntriesKey): void;
  onDelete(sectionKey: EntriesKey, entryId: string): void;
  onUpdate: (
    path: string,
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAddBulletPoint?: (section: BulletPointEntryKey, entryId: string) => void;
  onDeleteBulletPoint?: (
    section: BulletPointEntryKey,
    entryId: string,
    bulletPointId: string,
  ) => void;
}

export default function SectionInput<K extends EntriesKey>({
  section,
  entries,
  onAdd,
  onDelete,
  onUpdate,
  onAddBulletPoint,
  onDeleteBulletPoint,
}: SectionInputProps<K>) {
  return (
    <Container>
      <Header>
        <Title>{section}</Title>
        <Button onClick={() => onAdd(section)}>Add entry</Button>
      </Header>

      <InputGroup>
        {entries.map((entry, index) => (
          <Fragment key={entry.id}>
            <Spacer size={16} />
            <InputWrapper key={entry.id}>
              <Spacer size={16} />
              <EntryInput
                entry={entry}
                index={index}
                section={section}
                onDelete={() => onDelete(section, entry.id)}
                onUpdate={onUpdate}
              />
              {"bulletPoints" in entry && (
                <>
                  <Spacer size={8} />
                  <BulletpointButton
                    onClick={() =>
                      onAddBulletPoint!(
                        section as BulletPointEntryKey,
                        entry.id,
                      )
                    }
                  >
                    Add bulletpoint
                  </BulletpointButton>
                  {entry.bulletPoints.map((bp, bpIndex) => (
                    <Fragment key={bp.id}>
                      <Spacer size={8} />
                      <BulletPointInput>
                        <BulletPointGrouper>
                          <TextInput
                            label="bold"
                            placeholder="Bolded text"
                            value={bp.bold || ""}
                            onChange={onUpdate(
                              `${section}.${index}.bulletPoints.${bpIndex}.bold`,
                            )}
                          />
                          <TextInput
                            label="text"
                            placeholder="Text"
                            value={bp.text}
                            onChange={onUpdate(
                              `${section}.${index}.bulletPoints.${bpIndex}.text`,
                            )}
                          />
                        </BulletPointGrouper>

                        <Button
                          mood="danger"
                          onClick={() =>
                            onDeleteBulletPoint!(
                              section as BulletPointEntryKey,
                              entry.id,
                              bp.id,
                            )
                          }
                        >
                          Delete
                        </Button>
                      </BulletPointInput>
                    </Fragment>
                  ))}
                </>
              )}
            </InputWrapper>
          </Fragment>
        ))}
      </InputGroup>
    </Container>
  );
}

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  text-transform: capitalize;
`;

const InputGroup = styled.div``;

const InputWrapper = styled.div`
  position: relative;
  background-color: var(--THEME_COLOR_03);
  border-radius: 8px;
  border: 2px solid var(--THEME_COLOR_01);
  padding: ${() => PADDING.md};
`;

const BulletpointButton = styled(Button)`
  margin-inline-start: auto;
`;

const BulletPointGrouper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const BulletPointInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & button {
    align-self: end;
  }
`;
