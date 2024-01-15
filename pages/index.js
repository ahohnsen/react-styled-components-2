import styled, { css } from "styled-components";

const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: white;
  border-radius: 4px;
  background-color: ${(props) =>
    props.$color === "danger" ? "var(--color-danger)" : "var(--color-primary)"};

  /* background-color: ${({ $color }) =>
    $color === "danger" ? "var(--color-danger)" : "var(--color-primary)"}; */

  ${(props) =>
    props.$variant === "text" &&
    css`
      background-color: transparent;
      color: var(--color-primary);
    `}

  ${(props) =>
    props.$variant === "outlined" &&
    css`
      background-color: transparent;
      color: var(--color-primary);
      border: solid 2px var(--color-primary);
    `};

  ${(props) =>
    props.$variant === "contained" &&
    css`
      background-color: var(--color-primary);
      color: white;
    `};

  &:hover {
    color: var(--color-primary);
    background-color: var(--color-secondary);
  }
`;

const FlexContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export default function HomePage() {
  return (
    <div>
      <h1>Styled Components</h1>
      <h2>Props using the ternary</h2>
      <FlexContainer>
        <Button>Button</Button>
        <Button $color="danger">Button Danger</Button>
      </FlexContainer>
      <h2>Using Props: CSS Block / Complex Component</h2>
      <FlexContainer>
        <Button $variant="text">Button - Text</Button>
        <Button $variant="outlined">Button - Outline</Button>
        <Button $variant="contained">Button - Contained</Button>
      </FlexContainer>
    </div>
  );
}
