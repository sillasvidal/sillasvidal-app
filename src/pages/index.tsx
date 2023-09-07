import { Container, ContainerMenuCard, MenuCard, TextMenuCard } from "@/styles/pages/home";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <ContainerMenuCard>
        <Link style={{ textDecoration: 'none' }} href="/apps">
          <MenuCard>
            <TextMenuCard>Soluções</TextMenuCard>
          </MenuCard>
        </Link>
        <Link style={{ textDecoration: 'none' }} href="/blog">
          <MenuCard>
            <TextMenuCard>Blog</TextMenuCard>
          </MenuCard>
        </Link>
      </ContainerMenuCard>
    </Container>
  );
}
