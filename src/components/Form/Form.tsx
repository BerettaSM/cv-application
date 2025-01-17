import { FormEvent } from "react";
import styled from "styled-components";
import { BORDER_RADIUS, PADDING } from "../../constants";

export default function CVForm() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log("Submitted");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <h3>Personal Profile</h3>

        <label htmlFor="">name</label>
        <label htmlFor="">address</label>

        <label htmlFor="">phone</label>
        <label htmlFor="">email</label>
        <label htmlFor="">home page</label>
        <label htmlFor="">github</label>
        <label htmlFor="">linkedin</label>
      </div>

      <button>Submit</button>
    </Form>
  );
}

const Form = styled.form`
  flex: 1 1 0px;
  background-color: var(--THEME_COLOR_02);
  padding: ${() => PADDING.sm};
  border-radius: ${() => BORDER_RADIUS};
`;
