import Link from "next/link";

import { Container, ContainerMenuCard, MenuCard, TextMenuCard } from "@/styles/pages/blog";

export default function Blog() {
  return (
    <Container>
      <ContainerMenuCard>
        <Link style={{ textDecoration: 'none' }} href="/blog/conteudos/como-ganhar-dinheiro-com-programacao">
          <MenuCard>
            <TextMenuCard>Como ganhar dinheiro com programação</TextMenuCard>
          </MenuCard>
        </Link>
      </ContainerMenuCard>
    </Container>
  );
}