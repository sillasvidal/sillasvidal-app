import Link from "next/link";

import { Container, ContainerMenuCard, MenuCard, TextMenuCard } from "@/styles/pages/apps";

export default function Apps() {
  return (
    <Container>
      <ContainerMenuCard>
        <Link style={{ textDecoration: 'none' }} href="/apps/convert-case">
          <MenuCard>
            <TextMenuCard>Conversor de texto</TextMenuCard>
          </MenuCard>
        </Link>
        <Link style={{ textDecoration: 'none' }} href="/apps/character-counter">
          <MenuCard>
            <TextMenuCard>Contador de palavras</TextMenuCard>
          </MenuCard>
        </Link>
      </ContainerMenuCard>
    </Container>
  );
}