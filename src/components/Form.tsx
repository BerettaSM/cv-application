import { FormEvent } from "react";
import styled from "styled-components";

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

const Form = styled.form``;
