import { useState } from "react";

import { useResume } from "../../hooks";
import { RadioInput, TextInput } from "../Inputs";
import { Button } from "../Buttons";
import Modal from "../Modal";

export default function LoadButton() {
  const { savedResumes, loadResume, deleteResume } = useResume();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResumes = savedResumes.filter((resume) =>
    resume.displayName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleLoadResume(data: FormData) {
    const resumeId = data.get("resume-id")?.toString().trim() ?? "";
    const action = data.get("action")?.toString().trim() ?? "";
    if (action === "load") {
      loadResume(resumeId);
      handleCloseModal();
    } else if (action === "delete") {
      deleteResume(resumeId);
    } else {
      throw new Error(`Unknown action on submitter: "${action}"`);
    }
  }

  return (
    <>
      <Button onClick={handleOpenModal}>Load</Button>
      <Modal
        isOpen={isModalOpen}
        onSubmit={handleLoadResume}
        onClose={handleCloseModal}
      >
        <Modal.Title>Load</Modal.Title>
        <Modal.Description>Choose a resume to load.</Modal.Description>
        <Modal.InputGroup>
          <TextInput
            name="search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <RadioInput
            title="Saved Resumes"
            name="resume-id"
            entries={filteredResumes}
            valueMapper={(e) => e.id}
            labelMapper={(e) => e.displayName}
          />
        </Modal.InputGroup>
        <Modal.Actions>
          <Modal.ActionButton mood="primary" data-action="load">
            Load
          </Modal.ActionButton>
          <Modal.ActionButton mood="danger" data-action="delete">
            Delete
          </Modal.ActionButton>
        </Modal.Actions>
      </Modal>
    </>
  );
}
