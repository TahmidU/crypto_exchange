import { Container } from "./styles";
import GJNumberLabel from "components/atoms/GJNumberLabel";
import { ReactElement } from "react";

interface IGJNumbersViewProps {
  title: string;
  counts: [number, string][];
}

export default function GJNumbersView({
  title,
  counts,
}: IGJNumbersViewProps): ReactElement {
  return (
    <Container>
      <p>{title}</p>
      <div>
        {counts.map((_item, index) => (
          <GJNumberLabel key={index} amount={_item[0]} desc={_item[1]} />
        ))}
      </div>
    </Container>
  );
}
