import { Container } from "./styles";

import LogoSvg from '../../assets/logo.svg';
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <Container>
      <Link style={{cursor: 'pointer'}} href="/">
        <Image src={LogoSvg} alt="" height={24} style={{ margin: '0 48px'}} />
      </Link>
    </Container>
  );
};