import { Link } from 'react-router-dom'
import { Headphones, TicketCheck, BarChart3 } from 'lucide-react'

import {
  Container,
  Content,
  Logo,
  Badge,
  Title,
  Description,
  Actions,
  PrimaryButton,
  SecondaryButton,
  Features,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription
} from './styles'

function Home() {
  return (
    <Container>
      <Content>
        <Logo>
          <Headphones size={32} />
          HelpDesk
        </Logo>

        <Badge>
          Sistema de gerenciamento de chamados
        </Badge>

        <Title>
          Organize e acompanhe seus chamados de forma simples
        </Title>

        <Description>
          Cadastre chamados, acompanhe status, prioridades e visualize
          informações importantes em um único lugar.
        </Description>

        <Actions>
          <PrimaryButton as={Link} to="/login">
            Entrar
          </PrimaryButton>

          <SecondaryButton as={Link} to="/register">
            Criar conta
          </SecondaryButton>
        </Actions>

        <Features>
          <FeatureCard>
            <FeatureIcon>
              <TicketCheck size={24} />
            </FeatureIcon>

            <FeatureTitle>
              Gerencie chamados
            </FeatureTitle>

            <FeatureDescription>
              Crie, atualize e acompanhe os chamados cadastrados.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>
              <BarChart3 size={24} />
            </FeatureIcon>

            <FeatureTitle>
              Acompanhe indicadores
            </FeatureTitle>

            <FeatureDescription>
              Visualize chamados abertos, resolvidos e prioridades.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>
              <Headphones size={24} />
            </FeatureIcon>

            <FeatureTitle>
              Suporte organizado
            </FeatureTitle>

            <FeatureDescription>
              Centralize as solicitações em uma interface simples.
            </FeatureDescription>
          </FeatureCard>
        </Features>
      </Content>
    </Container>
  )
}

export default Home