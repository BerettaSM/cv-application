import styled from "styled-components";
import { type BulletPoint as IBulletPoint } from "../../../types";

interface BulletPointProps {
  bulletPoint: IBulletPoint;
}

export default function BulletPoint({
  bulletPoint: { bold, text },
}: BulletPointProps) {
  return (
    <Container>
      {bold && <Bolded>{bold}: </Bolded>}
      <Description>{text}</Description>
    </Container>
  );
}

const Container = styled.li`
  color: var(--COLOR_GRAY-300);
`;

const Bolded = styled.strong`
  font-weight: bold;
`;

const Description = styled.span`
  color: var(--COLOR_GRAY-500);
`;
