import { Container } from "./styles";
import { ReactElement } from "react";

interface IGJNumberLabelProps {
  amount: number;
  desc: string;
}

export default function GJNumberLabel({
  amount,
  desc,
}: IGJNumberLabelProps): ReactElement {
  return (
    <Container>
      <span>{amount}</span>
      <span>{desc}</span>
    </Container>
  );
}
