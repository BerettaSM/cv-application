import styled from "styled-components";
import { type BulletPoint as IBulletPoint } from "../../../types";

import { BulletPoint } from ".";

interface BulletPointsProps {
  bulletPoints: IBulletPoint[];
}

export default function BulletPoints({ bulletPoints }: BulletPointsProps) {
  return (
    <Container>
      {bulletPoints.map((bp) => (
        <BulletPoint key={bp.text} bulletPoint={bp} />
      ))}
    </Container>
  );
}

const Container = styled.ul`
  font-size: 0.65rem;
  font-weight: 300;
  padding-inline-start: 10px;
  line-height: 1.2;
`;
