import styled from "styled-components";
import { Button } from "../Buttons";
import { useResume } from "../../hooks";
import { PADDING } from "../../constants";

export default function Actions() {
  const { resetResume, downloadResume } = useResume();

  function handlePrint() {
    window.print();
  }

  return (
    <Container>
      <Button onClick={() => downloadResume()}>Download</Button>
      <Button onClick={handlePrint}>Print</Button>
      <Button>Load</Button>
      <Button>Save</Button>
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
