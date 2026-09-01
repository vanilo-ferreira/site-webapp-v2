import Button from '@global/button';
import Subtitle from '@global/subtitle';
import Text from '@global/text';
import Title from '@global/title';
import ImageBusiness from '@assets/areas-expertise/devops.png';
import Card from '@components/card';
import IconGitHub from '@assets/icon-github.svg';
import IconDocker from '@assets/icon-docker.svg';
import IconDeploy from '@assets/icon-deploy.svg';
import IconAWS from '@assets/icon-aws.svg';
import IconLinux from '@assets/icon-linux.svg';
import IconMonitoring from '@assets/icon-monitoring.svg';
import { Link } from 'react-router-dom';
import { Container } from '../../styles';

const skillList = [
  {
    img: IconGitHub,
    skill: 'GitHub Actions',
    desc: 'Para CI/CD.',
  },
  {
    img: IconDocker,
    skill: 'Docker + Compose',
    desc: 'Gerenciamento de containers, e orquestração local.',
  },
  {
    img: IconDeploy,
    skill: 'Railway, Render, Vercel, Netlify',
    desc: 'Para deploy de apps.',
  },
  {
    img: IconAWS,
    skill: 'AWS, GCP ou Azure',
    desc: 'Para maior segurança e organização do código.',
  },
  {
    img: IconLinux,
    skill: 'Linux',
    desc: 'Para persistência de dados.',
  },
  {
    img: IconMonitoring,
    skill: 'Monitoramento',
    desc: 'Como Grafana, Logtail, ou ferramentas simples.',
  },
];

const DevopsView = () => {
  return (
    <div className="design-page">
      <main
        className="design-content"
        role="main"
        aria-label="Conteúdo principal da página de devops"
      >
        <section aria-labelledby="devops-heading">
          <Subtitle marginBottom={36} marginTop={16}>
            Área de Atuação
          </Subtitle>
          <Title id="devops-heading" size={48} color="#3C7EF9">
            DevOps
          </Title>

          <Text size={16} color="#1A1A1A" weight={500}>
            A área de DevOps é o elo entre o desenvolvimento de software e a
            operação dos sistemas. O objetivo é garantir que os produtos sejam
            entregues de forma segura, contínua e escalável, sem fricção entre o
            que o time desenvolve e o que vai para produção.
          </Text>

          <Text size={16} color="#1A1A1A" weight={500}>
            Se você gosta de automação, infraestrutura, monitoramento e
            processos, essa área pode ser a sua.
          </Text>

          <Link to="https://stars.soujunior.tech/">
            <Button variant="primary">Faça parte!</Button>
          </Link>

          <div aria-live="polite" aria-atomic="true"></div>
        </section>
        <img src={ImageBusiness} alt="" width={410} height={411} />
      </main>

      <Container>
        <Card
          titleMarginTop={60}
          title="O que você aprende e faz como DevOps na SouJunior"
          titleTextAlign="center"
          description="A atuação em DevOps na SouJunior envolve apoiar o fluxo de desenvolvimento
                e entrega, ajudando os times a rodarem de forma fluida e com menos erros."
          descriptionTextAlign="center"
          descriptionWidth={998}
          descriptionSize={16}
          descriptionColor="#1A1A1A"
          descriptionWeight={400}
          descriptionBlockMargin={28}
          titleList="Algumas atividades que você pode explorar:"
          titleListWeight={700}
          titleListAlign="center"
          titleListSize={16}
          titleSize={40}
          list={[
            'Criar e manter pipelines de CI/CD (integração e entrega contínua).',
            'Automatizar tarefas repetitivas de deploy, build e testes.',
            'Monitorar ambientes e garantir que o sistema esteja estável.',
            'Criar containers com Docker e organizar ambientes com Docker Compose.',
            'Trabalhar com versionamento e organização de ambientes (dev, staging, prod).',
            'Apoiar os times com boas práticas de Git, GitHub Actions e documentação.',
          ]}
          listSize={16}
          listColor="#1A1A1A"
          listWeight={400}
          listLineHeight="140%"
        />
      </Container>

      <section style={{ margin: '0 auto' }}>
        <Title textAlign="center" size={40}>
          Tecnologias e ferramentas que você pode usar:
        </Title>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            marginBlock: '4rem',
            width: '55rem',
          }}
        >
          {skillList.map(({ skill, img, desc }) => (
            <Card
              key={skill}
              edgeSection
              flexDirection="column"
              justifyContent="flex-start"
              marginInline="0.6rem"
              padding="20px"
              width={191}
              height={218}
              backgroundColor="#1E47AF"
              //------------
              imageSrc={img}
              imageWidth={80}
              imageHeight={80}
              //------------
              title={skill}
              titleSize={16}
              titleColor="#fff"
              titleTextAlign="center"
              // ------------
              description={desc}
              descriptionSize={14}
              descriptionColor="#fff"
              descriptionWeight={400}
              descriptionTextAlign="center"
              descriptionWidth={144}
            />
          ))}
        </div>
      </section>

      <Container>
        <Card
          titleMarginTop={60}
          title="Por que atuar com DevOps na SouJunior?"
          titleTextAlign="center"
          titleSize={40}
          list={[
            'Aprender com demandas reais e desafios práticos.',
            'Colaborar com desenvolvedores frontend e backend.',
            'Entender o ciclo completo de desenvolvimento e entrega.',
            'Ter contato com ferramentas usadas no mercado.',
            'Desenvolver habilidades que te diferenciam em processos seletivos.',
          ]}
          listSize={16}
          listColor="#1A1A1A"
          listWeight={400}
          listLineHeight="140%"
        />
      </Container>

      <div style={{ margin: 'auto', textAlign: 'center' }}>
        <Card
          titleMarginTop={60}
          title="Junte-se a nós e faça parte dessa jornada transformadora!"
          description="Sua contribuição pode ser um passo importante para impulsionar
            carreiras e transformar o futuro de muitos profissionais da área tech."
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
export default DevopsView;
