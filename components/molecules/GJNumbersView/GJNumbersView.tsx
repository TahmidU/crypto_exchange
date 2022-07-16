import { Container } from "./styles";
import GJNumberLabel from "components/atoms/GJNumberLabel";
import { ReactElement } from "react";

interface IGJNumbersViewProps {
  title: string;
  counts: [number, string][];
  className?: string;
}

export default function GJNumbersView({
  title,
  counts,
  className,
}: IGJNumbersViewProps): ReactElement {
  return (
    <Container className={className}>
      <span>{title}</span>
      <div>
        {counts.map((_item, index) => (
          <GJNumberLabel key={index} amount={_item[0]} desc={_item[1]} />
        ))}
      </div>
    </Container>
  );
}
