import styled from "styled-components";

import ResumePreview from "../ResumePreview/ResumePreview";

import resume from "../../data/example.json";

export default function Draft() {
  return (
    <Container>
      <ResumePreview resume={resume} />
    </Container>
  );
}

const Container = styled.section``;
