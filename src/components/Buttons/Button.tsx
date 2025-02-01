import { ComponentProps } from "react";
import styled from "styled-components";

import BaseButton from "./BaseButton";

type ButtonMood = "info" | "danger";

interface ButtonProps extends ComponentProps<"button"> {
  mood?: ButtonMood;
}

const moodStyles: Record<ButtonMood, React.CSSProperties> = {
  info: {
    backgroundColor: "var(--THEME_COLOR_03)",
    borderColor: "var(--THEME_COLOR_01)",
    color: "var(--THEME_COLOR_01)",
  },
  danger: {
    backgroundColor: "var(--COLOR_RED-900)",
    borderColor: "var(--COLOR_RED-300)",
    color: "var(--COLOR_RED-300)",
  },
};

export default function Button({
  mood = "info",
  children,
  ...delegated
}: ButtonProps) {
  return (
    <Container style={moodStyles[mood]} {...delegated}>
      {children}
    </Container>
  );
}

const Container = styled(BaseButton)`` as typeof BaseButton;
