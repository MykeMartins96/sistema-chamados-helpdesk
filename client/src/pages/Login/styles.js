import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.main`
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;

  background: #0f172a;
`

export const LoginCard = styled.div`
  width: 100%;
  max-width: 440px;

  padding: 40px;

  background: #111c30;

  border: 1px solid #1e293b;
  border-radius: 18px;

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);

  @media (max-width: 500px) {
    padding: 30px 22px;
  }
`

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  margin-bottom: 32px;

  color: #ffffff;

  font-size: 24px;
  font-weight: 700;
`

export const Title = styled.h1`
  margin-bottom: 10px;

  text-align: center;

  font-size: 28px;
  color: #f8fafc;
`

export const Description = styled.p`
  margin-bottom: 32px;

  text-align: center;

  font-size: 15px;
  line-height: 1.5;

  color: #94a3b8;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 20px;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;

  color: #cbd5e1;
`

export const InputContainer = styled.div`
  height: 50px;

  display: flex;
  align-items: center;

  gap: 12px;

  padding: 0 14px;

  background: #0f172a;

  border: 1px solid #334155;
  border-radius: 10px;

  color: #64748b;

  transition: 0.2s;

  &:focus-within {
    border-color: #2563eb;
  }
`

export const Input = styled.input`
  width: 100%;

  border: none;
  outline: none;

  background: transparent;

  color: #f8fafc;

  &::placeholder {
    color: #64748b;
  }
`

export const LoginButton = styled.button`
  height: 50px;

  margin-top: 4px;

  border: none;
  border-radius: 10px;

  background: #2563eb;

  color: #ffffff;

  font-weight: 600;

  transition: 0.2s;

  &:hover:not(:disabled) {
    background: #1d4ed8;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const ErrorMessage = styled.p`
  padding: 12px;

  border: 1px solid #7f1d1d;
  border-radius: 8px;

  background: #450a0a;

  color: #fecaca;

  font-size: 14px;
  text-align: center;
`

export const RegisterText = styled.p`
  margin-top: 28px;

  text-align: center;

  font-size: 14px;

  color: #94a3b8;

  a {
    color: #60a5fa;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`