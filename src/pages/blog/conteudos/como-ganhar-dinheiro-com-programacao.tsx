import { styled } from "@/styles";

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100vh',
  width: '100vw',
  paddingTop: 200,
  paddingBottom: 400,
});

const ContainerArticle = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  minWidth: 400,
  width: '50vw',
});

const Title = styled('h1', {
  textAlign: 'center',
  font: 'Roboto',
  fontWeight: 700
});

const SubTitle = styled('h2', {
  textAlign: 'start',
  font: 'Roboto',
  fontWeight: 700,
  color: '$black'
});

const Typography = styled('p', {
  textAlign: 'start',
  font: 'Roboto',
  fontWeight: 500,
  fontSize: 18,
  color: '$gray700'
});

export default function ComoGanharDinheiroComProgramacao() {
  return (
    <Container>
      <ContainerArticle>
        <Title>Como ganhar dinheiro com programação</Title>
        <br /><br /><br /><br />
        <Typography>Todos sabemos que o mercado de programação está mais aquecido do que nunca, mas nem sempre estamos o explorando da melhor forma. Nesse artigo, você verá maneiras de ganhar dinheiro com programação, trabalhando de qualquer lugar do mundo e no melhor horário pra você.</Typography>
        <br /><br />

        <SubTitle>1 - Freelancer</SubTitle>
        <br />
        <Typography>O freelancer se popularizou muito por ser uma maneira de ganhar dinheiro, ter seus próprios clientes e empreender mesmo que ainda não tenha um conhecimento técnico muito avançado. Existem diversas empresas que contratam freelancers para projetos temporários e desde o desenvolvimento de landing pages (apenas com HTML, CSS e JavaScript) ao desenvolvimento de sistemas completos e com muitas funcionalidades. De uma forma ou de outra, sempre será uma maneira bem lucrativa de utilizar seus conhecimentos de programação.</Typography>
        <br /><br />

        <SubTitle>2 - CLT</SubTitle>
        <br />
        <Typography>Provavelmente, esse é o caminho mais “óbvio” para lucrar com programação, mas não fica para trás. Hoje em dia, há muita demanda em empresas digitais para programadores, que no regime CLT, possuem diversos benefícios e ótimos salários. Essas empresas precisam se manter nesse patamar para conseguir reter talentos no mundo do desenvolvimento de software. Salários acima da média e benefícios como vale alimentação/refeição, vale transporte, auxílio home office, plano de saúde, day off no aniversário, entre outros... são bem comuns para esta área.</Typography>
        <br /><br />

        <SubTitle>3 - PJ</SubTitle>
        <br />
        <Typography>O sistema de contratação PJ também fica a cada dia mais comum na área da programação, por ter vantagens tanto para o contratante quanto para o contratado. Se salários mais altos, menos impostos e mais flexibilidade é o que você procura, esta pode ser uma boa opção.</Typography>
        <br /><br />

        <SubTitle>4 - Criar um curso e vender na internet</SubTitle>
        <br />
        <Typography>Uma outra forma de ganhar dinheiro na internet é utilizando os seus conhecimentos de programação, é criando um curso e vendendo na internet. Por mais que muitos pensem que ainda não possuem um bom nível de conhecimento para poder ensinar, lembre-se, que sempre há alguém que está em um nível abaixo do seu. Por ser um mercado extremamente aquecido, há milhares de pessoas que desejam aprender e que vão começar do zero. Então, não menospreze os seus conhecimentos básicos de tecnologia, como HTML, CSS, como a internet funciona, etc… eles podem já te trazer uma ótima rentabilidade.</Typography>
        <br /><br />

        <SubTitle>5 - Criar um SAAS</SubTitle>
        <br />
        <Typography>Esta, além de ser uma ótima opção de renda extra, já se tornou renda principal de muitos programadores. O SAAS -Software as a service ou software como um serviço - nada mais é do que um software em nuvem que resolve o problema de alguém. Sistemas de controle financeiro, plataformas de streaming e rifas, são ótimos exemplos de saas que podem fazer com que você fature alto.</Typography>
        <br />
        <Typography>Há várias maneiras de monetizar um saas. A mais comum  é cobrar um valor de assinatura para que o usuário possa obter todos os recursos do software (lembre-se: se o software resolve uma dor de alguém, certamente essa pessoa estará disposta a pagar por isso).</Typography>
        <br />
        <Typography>Provavelmente a maior vantagem de um saas, é que por mais que exija um esforço inicial, tem grande possibilidade de ser um negócio que funciona sozinho, se tornando uma renda passiva para o seu criador.</Typography>
      </ContainerArticle>
    </Container>
  );
}