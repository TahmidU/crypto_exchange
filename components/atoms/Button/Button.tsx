import { Container } from "./styles";
import { ReactElement } from "react";

interface IButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  title,
  onClick,
  className,
}: IButtonProps): ReactElement {
  return (
    <Container className={className} onClick={onClick}>
      <span>{title}</span>
    </Container>
  );
}
