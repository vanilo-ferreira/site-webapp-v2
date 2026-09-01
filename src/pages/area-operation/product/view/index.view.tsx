import React, { useEffect } from 'react';
import {
  useScreenReaderAnnouncer,
  useFocusManagement,
} from '@hooks/useAccessibility';
import Subtitle from '@global/subtitle';
import Text from '@global/text';
import Title from '@global/title';
import ImgProduct from '@assets/areas-expertise/product.png';
import Img from '@assets/areas-expertise/product-carousel/img.png';
import Img2 from '@assets/areas-expertise/product-carousel/img2.png';
import Img3 from '@assets/areas-expertise/product-carousel/img3.png';
import Img4 from '@assets/areas-expertise/product-carousel/img4.png';
import Img5 from '@assets/areas-expertise/product-carousel/img5.png';
import Card from '@components/card';
import Button from '@global/button';
import CarouselAreaOperation from '@components/carouselAreaOperation';
import { Link } from 'react-router-dom';
import { Container } from '../../styles';

const carouselItems = [
  {
    id: 1,
    img: Img,
    title: 'APM – Associate Product Management',
    description: `Se você está começando agora, essa frente é ideal para aprender o básico da gestão de produtos na prática. Como APM, você vai:`,
    list: [
      'Ajudar na priorização de tarefas e demandas.',
      'Participar de rituais com o time (como plannings e reviews).',
      'Apoiar em pesquisas com usuários.',
      'Aprender a trabalhar com OKRs, MVPs, e Product Discovery',
    ],
  },
  {
    id: 2,
    img: Img2,
    title: 'Data Product Management',
    description: `A pessoa de Data PM atua para garantir que o time tenha os dados certos, no momento certo, para evoluir o produto com inteligência. Nessa frente, você vai:`,
    list: [
      'Traduzir necessidades de negócio em perguntas de dados.',
      'Trabalhar em parceria com analistas e times técnicos.',
      'Ajudar a definir e acompanhar métricas de sucesso.',
      'Trazer insumos quantitativos para a tomada de decisão.',
    ],
  },
  {
    id: 3,
    img: Img3,
    title: 'Product Growth',
    description: `Na frente de Growth, o foco é entender o que faz um produto 
crescer e como manter esse crescimento saudável. 
Aqui você vai:`,
    list: [
      'Criar e testar hipóteses de melhoria (testes A/B, experimentos).',
      'Acompanhar funis e métricas (retenção, ativação, conversão).',
      'Trabalhar junto com marketing, dados e experiência do usuário.',
      'Descobrir alavancas de crescimento com base no comportamento real das pessoas usuárias.',
    ],
  },
  {
    id: 4,
    img: Img4,
    title: 'Product Marketing',
    description: `Em PMM, você atua na interface entre produto e comunicação. 
Isso significa:`,
    list: [
      'Pensar no posicionamento e na mensagem das soluções criadas.',
      'Criar planos de lançamento e comunicação.',
      'Entender e mapear as personas do projeto.',
      'Trabalhar storytelling, jornada de usuário e engajamento.',
    ],
  },
  {
    id: 5,
    img: Img5,
    title: 'Product Operations',
    description: `A frente de Product Ops apoia toda a estrutura da área de Produto. 
É uma função de bastidores, mas que faz muita diferença no dia a dia. Nessa frente, você vai:`,
    list: [
      'Padronizar e documentar processos.',
      'Melhorar ferramentas e rituais do time.',
      'Criar sistemas de acompanhamento e visibilidade.',
      'Ajudar o time a trabalhar com mais clareza e menos fricção.',
    ],
  },
];

const ProductView: React.FC = () => {
  const { announce } = useScreenReaderAnnouncer();
  const { focusMainContent } = useFocusManagement();

  // Set page title for screen readers
  useEffect(() => {
    document.title = 'Design System - Sou Junior';

    // Add meta description if not present
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Sistema de design da Sou Junior com componentes e diretrizes visuais',
      );
    }

    // Announce page change to screen readers
    announce('Página de Design System carregada');

    // Focus main content for better navigation
    setTimeout(() => {
      focusMainContent();
    }, 100);
  }, [announce, focusMainContent]);

  return (
    <div className="design-page">
      <main
        className="design-content"
        role="main"
        aria-label="Conteúdo principal da página de design"
      >
        <section aria-labelledby="design-heading">
          <Subtitle marginBottom={36} marginTop={16}>
            Área de Atuação
          </Subtitle>
          <Title size={48} color="#3C7EF9">
            Produto
          </Title>

          <Text size={16} color="#1A1A1A" weight={500}>
            A área de Produto é o coração estratégico de muitos times. São
            analisados problemas reais, organização de ideias, validação de
            hipóteses e acompanha a criação de soluções que geram valor para
            quem as usa.
          </Text>

          <Text size={16} color="#1A1A1A" weight={500}>
            No nosso voluntariado, a área de Produto está dividida em frentes
            que oferecem espaço para aprendizado, colaboração e crescimento
            prático.
          </Text>

          <Link to="https://stars.soujunior.tech/">
            <Button variant="primary">Faça parte!</Button>
          </Link>

          {/* Placeholder for future content */}
          <div aria-live="polite" aria-atomic="true">
            {/* Dynamic content will be announced to screen readers */}
          </div>
        </section>
        <img
          src={ImgProduct}
          alt="Ilustração representando a atuação de Produto"
        />
      </main>

      <section>
        <Title as="h2" textAlign="center" size={40} width={568}>
          Conheça os cargos de Produto que você pode explorar com a gente:
        </Title>

        <CarouselAreaOperation items={carouselItems} />
      </section>

      <Container>
        <Card
          marginBlock="2rem"
          title="Por que atuar em Produto na SouJunior?"
          titleSize={40}
          list={[
            'Aprenda na prática com pessoas de diferentes áreas.',
            'Participe de entregas reais com impacto no projeto.',
            'Desenvolva habilidades valorizadas no mercado.',
            'Descubra qual frente de Produto mais combina com você.',
            'Construa um portfólio e fortaleça seu LinkedIn com experiência real.',
          ]}
          listSize={16}
          listColor="#1A1A1A"
          listWeight={400}
          listLineHeight="140%"
        />
      </Container>

      <div style={{ margin: 'auto', textAlign: 'center' }}>
        <Card
          title="Junte-se a nós e faça parte dessa jornada transformadora!"
          description="Sua contribuição pode ser um passo importante para impulsionar
      carreiras e transformar o futuro de muitos profissionais da área
      tech."
          descriptionWidth={670}
          descriptionBlockMargin={24}
          titleSize={40}
          descriptionSize={16}
          buttonText="Faça parte!"
          buttonVariant="primary"
          buttonLink="https://stars.soujunior.tech/"
        />
      </div>
    </div>
  );
};

export default ProductView;
