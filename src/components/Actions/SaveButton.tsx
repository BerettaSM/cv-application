import { useState } from "react";

import { TextInput } from "../Inputs";
import { Button } from "../Buttons";
import Modal from "../Modal";
import { useResume } from "../../hooks";

export default function SaveButton() {
  const { resume, saveResume } = useResume();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  const defaultName = `resume-${new Date().toJSON()}`;

  function handleSave(data: FormData) {
    const name = data.get("name")?.toString().trim();
    saveResume(resume, name || defaultName);
    handleCloseModal();
  }

  return (
    <>
      <Button onClick={handleOpenModal}>Save</Button>
      <Modal
        isOpen={isModalOpen}
        onSubmit={handleSave}
        onClose={handleCloseModal}
      >
        <Modal.Title>Save</Modal.Title>
        <Modal.Description>Enter a name to save the resume.</Modal.Description>
        <Modal.InputGroup>
          <TextInput
            name="name"
            placeholder="Enter a name"
            defaultValue={defaultName}
          />
        </Modal.InputGroup>
        <Modal.Actions>
          <Modal.ActionButton mood="primary">Save</Modal.ActionButton>
        </Modal.Actions>
      </Modal>
    </>
  );
}
