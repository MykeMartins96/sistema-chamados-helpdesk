import styled from 'styled-components'

export const Card = styled.article`
  width: 100%;
  min-width: 0;

  padding: 22px;

  background: #111c30;

  border: 1px solid #1e293b;
  border-radius: 14px;

  transition: 0.2s;

  &:hover {
    border-color: #334155;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 18px;
  }

  @media (max-width: 380px) {
    padding: 15px;
  }
`

export const Header = styled.div`
  width: 100%;
  min-width: 0;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 16px;

  margin-bottom: 14px;

  @media (max-width: 480px) {
    gap: 12px;
  }

  @media (max-width: 380px) {
    flex-direction: column;
    align-items: flex-start;

    gap: 10px;
  }
`

export const Title = styled.h2`
  min-width: 0;

  color: #f8fafc;

  font-size: 18px;
  line-height: 1.4;

  overflow-wrap: anywhere;

  @media (max-width: 480px) {
    font-size: 17px;
  }

  @media (max-width: 380px) {
    font-size: 16px;
  }
`

export const StatusBadge = styled.span`
  flex-shrink: 0;

  padding: 6px 10px;

  border-radius: 999px;

  font-size: 12px;
  font-weight: 600;

  white-space: nowrap;

  background: ${({ status }) => {
    if (status === 'Resolvido') {
      return '#14532d'
    }

    if (status === 'Em andamento') {
      return '#78350f'
    }

    return '#1e3a8a'
  }};

  color: ${({ status }) => {
    if (status === 'Resolvido') {
      return '#bbf7d0'
    }

    if (status === 'Em andamento') {
      return '#fde68a'
    }

    return '#93c5fd'
  }};
`

export const Description = styled.p`
  margin-bottom: 18px;

  color: #94a3b8;

  font-size: 14px;
  line-height: 1.6;

  overflow-wrap: anywhere;

  @media (max-width: 380px) {
    font-size: 13px;
  }
`

export const InfoRow = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: 14px;

  margin-bottom: 18px;

  @media (max-width: 380px) {
    align-items: flex-start;
    flex-direction: column;

    gap: 9px;
  }
`

export const InfoItem = styled.span`
  min-width: 0;

  display: flex;
  align-items: center;

  gap: 6px;

  color: #64748b;

  font-size: 13px;

  overflow-wrap: anywhere;

  svg {
    flex-shrink: 0;
  }

  @media (max-width: 380px) {
    font-size: 12px;
  }
`

export const Footer = styled.div`
  width: 100%;
  min-width: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 12px;

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
  }
`

export const PriorityBadge = styled.span`
  display: flex;
  align-items: center;

  gap: 6px;

  flex-shrink: 0;

  padding: 6px 10px;

  border-radius: 8px;

  font-size: 12px;
  font-weight: 600;

  white-space: nowrap;

  background: ${({ priority }) => {
    if (priority === 'Alta') {
      return '#450a0a'
    }

    if (priority === 'Média') {
      return '#422006'
    }

    return '#052e16'
  }};

  color: ${({ priority }) => {
    if (priority === 'Alta') {
      return '#fca5a5'
    }

    if (priority === 'Média') {
      return '#fde68a'
    }

    return '#bbf7d0'
  }};

  svg {
    flex-shrink: 0;
  }
`

export const Actions = styled.div`
  width: auto;
  min-width: 0;

  display: flex;
  align-items: center;

  gap: 10px;

  @media (max-width: 600px) {
    width: 100%;
  }

  @media (max-width: 380px) {
    gap: 7px;
  }
`

export const StatusSelect = styled.select`
  height: 36px;

  padding: 0 10px;

  border: 1px solid #334155;
  border-radius: 8px;

  outline: none;

  background: #0f172a;

  color: #cbd5e1;

  font-size: 12px;

  cursor: pointer;

  &:focus {
    border-color: #2563eb;
  }

  @media (max-width: 600px) {
    min-width: 0;
    flex: 1;
  }

  @media (max-width: 380px) {
    padding: 0 7px;

    font-size: 11px;
  }
`

export const EditButton = styled.button`
  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border: 1px solid #1d4ed8;
  border-radius: 8px;

  background: #172554;

  color: #93c5fd;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #1d4ed8;

    color: #ffffff;
  }

  @media (max-width: 380px) {
    width: 34px;
    height: 34px;
  }
`

export const DeleteButton = styled.button`
  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border: 1px solid #7f1d1d;
  border-radius: 8px;

  background: #450a0a;

  color: #fca5a5;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #7f1d1d;

    color: #ffffff;
  }

  @media (max-width: 380px) {
    width: 34px;
    height: 34px;
  }
`