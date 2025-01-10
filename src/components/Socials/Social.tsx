import styled from "styled-components";

interface SocialProps {
  text: string;
  svg: string;
}

export default function Social({ text, svg }: SocialProps) {
  return (
    <Container>
      <SVG src={svg} alt="" />
      <Text>{text}</Text>
    </Container>
  );
}

const Container = styled.div`
  height: 1rem;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SVG = styled.img`
  height: 50%;
`;

const Text = styled.span`
  font-size: 0.5rem;
`;
