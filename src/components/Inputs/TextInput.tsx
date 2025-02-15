import { useId, type ComponentProps } from "react";
import styled from "styled-components";
import { PADDING } from "../../constants";

interface TextInputProps extends ComponentProps<"input"> {
  label?: string;
  as?: "textarea";
}

export default function TextInput({ label, as, ...delegated }: TextInputProps) {
  const id = useId();

  return (
    <>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input as={as || ""} id={id} {...delegated} />
    </>
  );
}

const Label = styled.label`
  justify-self: end;
  grid-column: 1 / span 1;
  width: max-content;
  text-transform: capitalize;
`;

const Input = styled.input`
  grid-column: -2 / -1;
  border-radius: 8px;
  padding: 4px ${() => PADDING.sm};
  font-size: 1.25rem;
  resize: none;
`;
