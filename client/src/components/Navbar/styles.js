import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  width: 100%;

  background: #111c30;

  border-bottom: 1px solid #1e293b;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 72px;

  margin: 0 auto;
  padding: 0 24px;

  display: flex;
  align-items: center;

  gap: 32px;

  @media (max-width: 900px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    padding: 14px 20px;

    flex-wrap: wrap;

    row-gap: 14px;
  }

  @media (max-width: 480px) {
    padding: 12px 16px;

    gap: 12px;
  }

  @media (max-width: 380px) {
    padding: 12px 10px;

    gap: 8px;
  }
`

export const Logo = styled(Link)`
  display: flex;
  align-items: center;

  gap: 9px;

  flex-shrink: 0;

  color: #f8fafc;

  font-size: 21px;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 19px;

    gap: 7px;
  }

  @media (max-width: 380px) {
    font-size: 17px;
  }
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;

  gap: 8px;

  flex: 1;

  min-width: 0;

  @media (max-width: 768px) {
    order: 3;

    width: 100%;
    flex: none;

    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 6px;
  }

  @media (max-width: 380px) {
    gap: 4px;
  }
`

export const NavigationLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  padding: 10px 12px;

  border-radius: 8px;

  color: #94a3b8;

  font-size: 14px;
  font-weight: 500;

  white-space: nowrap;

  transition: 0.2s;

  &:hover {
    background: #1e293b;

    color: #f8fafc;
  }

  &.active {
    background: #1e3a8a;

    color: #60a5fa;
  }

  @media (max-width: 480px) {
    flex: 1;

    padding: 10px 8px;

    font-size: 13px;
  }

  @media (max-width: 380px) {
    padding: 9px 6px;

    gap: 5px;

    font-size: 12px;
  }
`

export const UserArea = styled.div`
  display: flex;
  align-items: center;

  gap: 14px;

  flex-shrink: 0;

  margin-left: auto;

  @media (max-width: 480px) {
    gap: 8px;
  }
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 220px;

  text-align: right;

  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 180px;
  }

  @media (max-width: 550px) {
    display: none;
  }
`

export const UserName = styled.span`
  color: #f8fafc;

  font-size: 14px;
  font-weight: 600;

  white-space: nowrap;

  overflow: hidden;
  text-overflow: ellipsis;
`

export const UserEmail = styled.span`
  margin-top: 3px;

  color: #64748b;

  font-size: 12px;

  white-space: nowrap;

  overflow: hidden;
  text-overflow: ellipsis;
`

export const LogoutButton = styled.button`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border: 1px solid #334155;
  border-radius: 9px;

  background: transparent;

  color: #94a3b8;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #450a0a;

    border-color: #7f1d1d;

    color: #fca5a5;
  }

  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
  }

  @media (max-width: 380px) {
    width: 36px;
    height: 36px;
  }
`