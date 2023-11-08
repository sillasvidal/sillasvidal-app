import Link from "next/link";

import { Container, ContainerMenuCard, MenuCard, TextMenuCard } from "@/styles/pages/blog";

export default function Blog() {
  return (
    <Container>
      {/* <ContainerMenuCard>
        <Link style={{ textDecoration: 'none' }} href="/blog/conteudos/como-ganhar-dinheiro-com-programacao">
          <MenuCard>
            <TextMenuCard>Como ganhar dinheiro com programação</TextMenuCard>
          </MenuCard>
        </Link>
      </ContainerMenuCard> */}
      <iframe src="//paybox.doare.org/br/paybox?lang=br&amp;currency=BRL&amp;orgId=928dd060-ecca-40b6-9208-fc8e0d4f91be&amp;campaignId=6a2512cb-42bd-4c49-adfb-e06d24e324b5&amp;sourceURL=doa.re/S0df&amp;quoteId=undefined&amp;campaignAmbassadorId=undefined&amp;values=30,50,150,300,500&amp;amount=false&amp;showCurrency=0&amp;newsletter=0&amp;subscribe=0&amp;subscriptionAmount=0&amp;showSubscription=1&amp;referer=https://campaign.doare.org/campanha/6a2512cb-42bd-4c49-adfb-e06d24e324b5/lar-fabiano-de-cristo-(casa-de-eugenia)/lar-fabiano-de-cristo" scrolling="no"  allow="payment 'self' https://paybox.doare.org https://sillasvidal.com"></iframe>
    </Container>
  );
}