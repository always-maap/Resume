import styled, { CSSProperties } from "styled-components";

type Props = {
  flexDirection?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
};

export const Flex = styled.div<Props>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  ${({ gap }) => gap && `gap: ${gap}rem`};
`;
