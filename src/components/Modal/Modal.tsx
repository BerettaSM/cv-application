import React from "react";
import styled, { keyframes } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

import { CloseIcon } from "../Icons";
import { BaseButton } from "../Buttons";
import { VisuallyHidden } from "../VisuallyHidden";
import { PADDING } from "../../constants";

interface ModalProps {
  isOpen?: boolean;
  onClose?(): void;
  onSubmit?(data: FormData): void;
  hideCloseButton?: boolean;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  onSubmit,
  hideCloseButton,
  children,
}: ModalProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!onSubmit) return;
    onSubmit(new FormData(event.currentTarget));
  }

  return (
    <Wrapper modal open={isOpen}>
      <Dialog.Portal>
        <Backdrop onClick={onClose}>
          <Content>
            <Form onSubmit={handleSubmit}>
              {children}
              {!hideCloseButton && (
                <CloseButton onClick={onClose}>
                  <CloseIcon />
                  <VisuallyHidden>Close dialog</VisuallyHidden>
                </CloseButton>
              )}
            </Form>
          </Content>
        </Backdrop>
      </Dialog.Portal>
    </Wrapper>
  );
}

const Wrapper = styled(Dialog.Root)`
  position: fixed;
  isolation: isolate;
`;

const fadeIn = keyframes`
    from {
        backdrop-filter: blur(0px);
    }
    to {
        backdrop-filter: blur(10px);
    }
`;

const Backdrop = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  padding: 8px;
  background: rgb(0 0 0 / 0.3);
  animation: ${fadeIn} 1 750ms ease-in-out forwards;
`;

const slideDown = keyframes`
    from {
        transform: translateY(-30px);
        opacity: 0;
    }
    to {
        transform: translateY(0px);
        opacity: 1;
    }
`;

const Content = styled(Dialog.Content)`
  background: #fff;
  border-radius: 8px;
  color: var(--COLOR_GRAY-100);
  padding: 16px 24px;
  position: absolute;
  inset: 0;
  margin: auto;
  width: calc(min(100%, 24rem) - 16px);
  height: min-content;

  animation: ${slideDown} 1 500ms ease-out alternate backwards;
  animation-delay: 500ms;

  & svg {
    flex-shrink: 0;
  }

  @media (max-width: 20rem) {
    padding: 8px 12px;
  }
`;

const Form = styled.form`
  max-width: 100%;
`;

const Title = styled(Dialog.Title)`
  display: flex;
  align-items: center;
  color: var(--COLOR_GRAY-300);
  font-size: 1.2rem;
  font-weight: 400;
`;

const Description = styled(Dialog.Description)`
  margin-block-start: ${() => PADDING.sm};
  color: var(--COLOR_GRAY-500);
`;

const CloseButton = styled(Dialog.Close)`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: -8px;
  top: -28px;

  & svg {
    color: #fff;
    transition: filter 200ms ease-in-out;
  }

  &:hover svg {
    filter: brightness(0.8);
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 8px;
`;

const ActionButtonWrapper = styled(BaseButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: var(--COLOR_GRAY-900);
  border-radius: 4px;
  padding: 6px 8px;

  & svg path {
    stroke: var(--COLOR_GRAY-900);
  }

  &:disabled {
    background-color: var(--COLOR_GRAY-900) !important;
    color: var(--COLOR_GRAY-700) !important;
    filter: none;
    cursor: not-allowed;
  }
`;

interface ActionButtonProps extends React.ComponentPropsWithRef<"button"> {
  children: React.ReactNode;
  mood: "primary" | "danger";
}

const actionButtonTypes: {
  [K in ActionButtonProps["mood"]]: React.CSSProperties;
} = {
  primary: {
    backgroundColor: "var(--THEME_COLOR_01)",
  },
  danger: {
    backgroundColor: "var(--COLOR_RED-300)",
  },
};

function ActionButton({ children, mood, ...delegated }: ActionButtonProps) {
  const style = actionButtonTypes[mood];

  if (!style) {
    throw new Error(`Invalid mood "${mood}" for button.`);
  }

  return (
    <ActionButtonWrapper {...delegated} style={style}>
      {children}
    </ActionButtonWrapper>
  );
}

const InputGroup = styled.fieldset`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: auto;
  align-items: center;
  border: none;
  gap: 8px;
  max-width: 100%;
  padding-block: ${() => PADDING.md};

  & input {
    font-size: 1rem !important;
  }
`;

Modal.Title = Title;
Modal.Description = Description;
Modal.Actions = Actions;
Modal.ActionButton = ActionButton;
Modal.InputGroup = InputGroup;
