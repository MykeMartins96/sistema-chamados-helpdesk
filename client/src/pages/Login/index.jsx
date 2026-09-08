import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Headphones, Mail, Lock } from 'lucide-react'

import { useAuthContext } from '../../context/AuthContext'

import {
  Container,
  LoginCard,
  Logo,
  Title,
  Description,
  Form,
  InputGroup,
  Label,
  InputContainer,
  Input,
  LoginButton,
  ErrorMessage,
  RegisterText
} from './styles'

function Login() {
  const navigate = useNavigate()
  const { login } = useAuthContext()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(event) {
    event.preventDefault()

    if (!email || !password) {
      setError('Preencha o e-mail e a senha.')
      return
    }

    try {
      setLoading(true)
      setError('')

      await login(email, password)

      navigate('/dashboard')
    } catch (error) {
      console.error('Erro ao fazer login:', error)

      setError(
        error.response?.data?.message ||
        'Não foi possível realizar o login.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <LoginCard>
        <Logo to="/">
          <Headphones size={30} />
          HelpDesk
        </Logo>

        <Title>Bem-vindo de volta</Title>

        <Description>
          Entre na sua conta para acessar seus chamados.
        </Description>

        <Form onSubmit={handleLogin}>
          <InputGroup>
            <Label htmlFor="email">E-mail</Label>

            <InputContainer>
              <Mail size={20} />

              <Input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </InputContainer>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="password">Senha</Label>

            <InputContainer>
              <Lock size={20} />

              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </InputContainer>
          </InputGroup>

          {error && (
            <ErrorMessage>
              {error}
            </ErrorMessage>
          )}

          <LoginButton
            type="submit"
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </LoginButton>
        </Form>

        <RegisterText>
          Ainda não possui uma conta?{' '}
          <Link to="/register">
            Criar conta
          </Link>
        </RegisterText>
      </LoginCard>
    </Container>
  )
}

export default Login