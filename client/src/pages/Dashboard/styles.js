import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  background: #0f172a;
`

export const Main = styled.main`
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  padding: 32px 24px 40px;

  @media (max-width: 768px) {
    padding: 28px 20px 36px;
  }

  @media (max-width: 480px) {
    padding: 24px 16px 32px;
  }

  @media (max-width: 380px) {
    padding: 20px 12px 28px;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 24px;

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`

export const Title = styled.h1`
  color: #f8fafc;

  font-size: 30px;

  line-height: 1.2;

  overflow-wrap: anywhere;

  @media (max-width: 768px) {
    font-size: 27px;
  }

  @media (max-width: 500px) {
    font-size: 24px;
  }

  @media (max-width: 380px) {
    font-size: 21px;
  }
`

export const Description = styled.p`
  color: #94a3b8;

  font-size: 15px;

  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`

export const StatsGrid = styled.section`
  display: grid;

  grid-template-columns: repeat(5, minmax(0, 1fr));

  gap: 16px;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 430px) {
    grid-template-columns: 1fr;
  }
`

export const StatCard = styled.article`
  min-width: 0;
  min-height: 120px;

  padding: 18px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #111c30;

  border: 1px solid #1e293b;
  border-radius: 14px;

  transition: 0.2s;

  &:hover {
    border-color: #334155;

    transform: translateY(-3px);
  }

  @media (max-width: 480px) {
    min-height: 112px;

    padding: 16px;
  }
`

export const IconContainer = styled.div`
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border-radius: 10px;

  background: #1e3a8a;

  color: #60a5fa;

  @media (max-width: 380px) {
    width: 38px;
    height: 38px;
  }
`

export const StatContent = styled.div`
  margin-top: 16px;

  min-width: 0;
`

export const StatLabel = styled.p`
  margin-bottom: 5px;

  color: #94a3b8;

  font-size: 13px;

  line-height: 1.4;

  overflow-wrap: anywhere;
`

export const StatValue = styled.strong`
  color: #f8fafc;

  font-size: 28px;
  font-weight: 700;

  @media (max-width: 380px) {
    font-size: 25px;
  }
`

export const ChartSection = styled.section`
  margin-top: 20px;
`

export const ChartCard = styled.div`
  width: 100%;
  min-width: 0;

  padding: 20px;

  background: #111c30;

  border: 1px solid #1e293b;
  border-radius: 14px;

  overflow: hidden;

  @media (max-width: 480px) {
    padding: 16px;
  }

  @media (max-width: 380px) {
    padding: 14px;
  }
`

export const ChartHeader = styled.div`
  margin-bottom: 10px;
`

export const ChartTitle = styled.h2`
  margin-bottom: 4px;

  color: #f8fafc;

  font-size: 20px;

  line-height: 1.3;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`

export const ChartDescription = styled.p`
  color: #94a3b8;

  font-size: 14px;

  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`

export const ChartContent = styled.div`
  display: grid;

  grid-template-columns: minmax(0, 1fr) 250px;

  align-items: center;

  gap: 20px;

  min-width: 0;
  min-height: 220px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;

    gap: 16px;
  }
`

export const ChartContainer = styled.div`
  width: 100%;
  min-width: 0;
  height: 220px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    height: 200px;
  }

  @media (max-width: 380px) {
    height: 180px;
  }
`

export const Legend = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 10px;
`

export const LegendItem = styled.div`
  width: 100%;
  min-width: 0;
  min-height: 48px;

  display: flex;
  align-items: center;

  gap: 12px;

  padding: 10px 12px;

  background: #0f172a;

  border: 1px solid #1e293b;
  border-radius: 10px;

  @media (max-width: 380px) {
    gap: 8px;

    padding: 9px 10px;
  }
`

export const LegendColor = styled.span`
  width: 12px;
  height: 12px;

  flex-shrink: 0;

  border-radius: 50%;

  background: ${({ color }) => color};
`

export const LegendInfo = styled.div`
  width: 100%;
  min-width: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 12px;
`

export const LegendLabel = styled.span`
  min-width: 0;

  color: #cbd5e1;

  font-size: 14px;

  overflow-wrap: anywhere;

  @media (max-width: 380px) {
    font-size: 13px;
  }
`

export const LegendValue = styled.strong`
  flex-shrink: 0;

  color: #f8fafc;

  font-size: 18px;

  @media (max-width: 380px) {
    font-size: 16px;
  }
`

export const EmptyChart = styled.div`
  min-height: 220px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  color: #64748b;

  text-align: center;

  line-height: 1.5;

  @media (max-width: 480px) {
    min-height: 180px;
  }
`