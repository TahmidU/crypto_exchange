import { Container } from "./styles";
import { ReactElement } from "react";

interface IButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
  dataTestId?: string;
}

export default function Button({
  title,
  onClick,
  className,
  dataTestId = "Button",
}: IButtonProps): ReactElement {
  return (
    <Container data-testid={dataTestId} className={className} onClick={onClick}>
      <span>{title}</span>
    </Container>
  );
}
