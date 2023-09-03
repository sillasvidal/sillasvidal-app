import { Container } from "./styles";

import LogoSvg from '../../assets/logo.svg';
import Image from "next/image";

export const Header = () => {
  return (
    <Container>
      <Image src={LogoSvg} alt="" style={{ margin: '0 48px'}} />
    </Container>
  );
};