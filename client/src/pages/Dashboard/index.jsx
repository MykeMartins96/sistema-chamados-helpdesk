import { useEffect, useState } from 'react'

import {
  Ticket,
  CircleDot,
  Clock3,
  CircleCheck,
  AlertTriangle
} from 'lucide-react'

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

import Navbar from '../../components/Navbar'
import { useAuthContext } from '../../context/AuthContext'
import api from '../../services/api'

import {
  Container,
  Main,
  Header,
  HeaderContent,
  Title,
  Description,
  StatsGrid,
  StatCard,
  IconContainer,
  StatContent,
  StatLabel,
  StatValue,
  ChartSection,
  ChartCard,
  ChartHeader,
  ChartTitle,
  ChartDescription,
  ChartContent,
  ChartContainer,
  Legend,
  LegendItem,
  LegendColor,
  LegendInfo,
  LegendLabel,
  LegendValue,
  EmptyChart
} from './styles'

function Dashboard() {
  const { user } = useAuthContext()

  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    inProgress: 0,
    resolved: 0,
    highPriority: 0
  })

  useEffect(() => {
    async function loadStats() {
      try {
        const response = await api.get('/tickets/stats')

        setStats(response.data)
      } catch (error) {
        console.error(
          'Erro ao buscar estatísticas:',
          error
        )
      }
    }

    loadStats()
  }, [])

  const chartData = [
    {
      name: 'Abertos',
      value: stats.open,
      color: '#3b82f6'
    },
    {
      name: 'Em andamento',
      value: stats.inProgress,
      color: '#f59e0b'
    },
    {
      name: 'Resolvidos',
      value: stats.resolved,
      color: '#22c55e'
    }
  ]

  const hasChartData = chartData.some(
    (item) => item.value > 0
  )

  return (
    <Container>
      <Navbar />

      <Main>
        <Header>
          <HeaderContent>
            <Title>
              Olá, {user?.name || 'Usuário'} 👋
            </Title>

            <Description>
              Acompanhe um resumo dos seus chamados.
            </Description>
          </HeaderContent>
        </Header>

        <StatsGrid>
          <StatCard>
            <IconContainer>
              <Ticket size={24} />
            </IconContainer>

            <StatContent>
              <StatLabel>
                Total de chamados
              </StatLabel>

              <StatValue>
                {stats.total}
              </StatValue>
            </StatContent>
          </StatCard>

          <StatCard>
            <IconContainer>
              <CircleDot size={24} />
            </IconContainer>

            <StatContent>
              <StatLabel>
                Abertos
              </StatLabel>

              <StatValue>
                {stats.open}
              </StatValue>
            </StatContent>
          </StatCard>

          <StatCard>
            <IconContainer>
              <Clock3 size={24} />
            </IconContainer>

            <StatContent>
              <StatLabel>
                Em andamento
              </StatLabel>

              <StatValue>
                {stats.inProgress}
              </StatValue>
            </StatContent>
          </StatCard>

          <StatCard>
            <IconContainer>
              <CircleCheck size={24} />
            </IconContainer>

            <StatContent>
              <StatLabel>
                Resolvidos
              </StatLabel>

              <StatValue>
                {stats.resolved}
              </StatValue>
            </StatContent>
          </StatCard>

          <StatCard>
            <IconContainer>
              <AlertTriangle size={24} />
            </IconContainer>

            <StatContent>
              <StatLabel>
                Alta prioridade
              </StatLabel>

              <StatValue>
                {stats.highPriority}
              </StatValue>
            </StatContent>
          </StatCard>
        </StatsGrid>

        <ChartSection>
          <ChartCard>
            <ChartHeader>
              <ChartTitle>
                Distribuição dos chamados
              </ChartTitle>

              <ChartDescription>
                Visão geral dos chamados por status.
              </ChartDescription>
            </ChartHeader>

            {hasChartData ? (
              <ChartContent>
                <ChartContainer>
                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                  >
                    <PieChart>
                      <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={55}
                        outerRadius={85}
                        paddingAngle={4}
                      >
                        {chartData.map((item) => (
                          <Cell
                            key={item.name}
                            fill={item.color}
                          />
                        ))}
                      </Pie>

                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>

                <Legend>
                  {chartData.map((item) => (
                    <LegendItem key={item.name}>
                      <LegendColor
                        color={item.color}
                      />

                      <LegendInfo>
                        <LegendLabel>
                          {item.name}
                        </LegendLabel>

                        <LegendValue>
                          {item.value}
                        </LegendValue>
                      </LegendInfo>
                    </LegendItem>
                  ))}
                </Legend>
              </ChartContent>
            ) : (
              <EmptyChart>
                Ainda não existem chamados para
                exibir no gráfico.
              </EmptyChart>
            )}
          </ChartCard>
        </ChartSection>
      </Main>
    </Container>
  )
}

export default Dashboard