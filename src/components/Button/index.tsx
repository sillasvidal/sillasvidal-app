import { useEffect } from "react";
import { Container, ButtonText } from "./styles";

interface PropsButton extends React.HTMLProps<HTMLButtonElement> {
  onClickFunction?: any;
  children: any;
}

export const Button = ({ children, onClickFunction }: PropsButton) => {
  return (
    <Container onClick={onClickFunction}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
}