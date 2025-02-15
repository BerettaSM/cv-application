import styled from "styled-components";
import { useResume } from "../../hooks";

import { Button } from "../Buttons";
import { LoadButton } from ".";
import { PADDING } from "../../constants";
import SaveButton from "./SaveButton";

export default function Actions() {
  const { resetResume, downloadResume } = useResume();

  function handlePrint() {
    window.print();
  }

  return (
    <Container>
      <Button onClick={() => downloadResume()}>Download</Button>
      <Button onClick={handlePrint}>Print</Button>
      <LoadButton />
      <SaveButton />
      <Button mood="danger" onClick={resetResume}>
        Clear
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  padding-block: ${() => PADDING.md};
`;
