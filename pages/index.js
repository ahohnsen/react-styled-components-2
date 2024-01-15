import styled from "styled-components";
import Button from "@/components/Button/index.js";

const FlexContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  flex-direction: ${({ $direction = "row" }) =>
    $direction === "row" ? "row" : "column"};
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
      <FlexContainer $direction="column">
        <Button $variant="text">Button - Text</Button>
        <Button $variant="outlined">Button - Outline</Button>
        <Button $variant="contained">Button - Contained</Button>
      </FlexContainer>
    </div>
  );
}
