import styled from 'styled-components'

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 32px;

  font-size: 26px;
  font-weight: 700;
  color: #ffffff;
`

export const Badge = styled.span`
  padding: 8px 14px;
  margin-bottom: 20px;

  border: 1px solid #334155;
  border-radius: 999px;

  background: #1e293b;
  color: #94a3b8;

  font-size: 14px;
`

export const Title = styled.h1`
  max-width: 750px;

  font-size: clamp(38px, 6vw, 64px);
  line-height: 1.1;

  color: #f8fafc;
`

export const Description = styled.p`
  max-width: 650px;
  margin-top: 22px;

  font-size: 18px;
  line-height: 1.6;

  color: #94a3b8;
`

export const Actions = styled.div`
  display: flex;
  gap: 16px;

  margin-top: 32px;

  @media (max-width: 500px) {
    width: 100%;
    flex-direction: column;
  }
`

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 150px;
  padding: 14px 24px;

  border: none;
  border-radius: 10px;

  background: #2563eb;
  color: #ffffff;

  font-weight: 600;

  transition: 0.2s;

  &:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
  }
`

export const SecondaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 150px;
  padding: 14px 24px;

  border: 1px solid #334155;
  border-radius: 10px;

  background: #1e293b;
  color: #f8fafc;

  font-weight: 600;

  transition: 0.2s;

  &:hover {
    background: #334155;
    transform: translateY(-2px);
  }
`

export const Features = styled.div`
  width: 100%;
  margin-top: 70px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

export const FeatureCard = styled.div`
  padding: 28px;

  border: 1px solid #1e293b;
  border-radius: 16px;

  background: #111c30;

  text-align: left;

  transition: 0.2s;

  &:hover {
    border-color: #334155;
    transform: translateY(-4px);
  }
`

export const FeatureIcon = styled.div`
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  border-radius: 12px;

  background: #1e3a8a;
  color: #60a5fa;
`

export const FeatureTitle = styled.h2`
  margin-bottom: 10px;

  font-size: 18px;
  color: #f8fafc;
`

export const FeatureDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;

  color: #94a3b8;
`