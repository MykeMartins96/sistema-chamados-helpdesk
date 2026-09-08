import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Headphones, User, Mail, Lock } from 'lucide-react'

import api from '../../services/api'

import {
  Container,
  RegisterCard,
  Logo,
  Title,
  Description,
  Form,
  InputGroup,
  Label,
  InputContainer,
  Input,
  RegisterButton,
  ErrorMessage,
  SuccessMessage,
  LoginText
} from './styles'

function Register() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleRegister(event) {
    event.preventDefault()

    if (!name || !email || !password) {
      setError('Preencha todos os campos.')
      return
    }

    try {
      setLoading(true)
      setError('')
      setSuccess('')

      await api.post('/auth/register', {
        name,
        email,
        password
      })

      setSuccess('Conta criada com sucesso!')

      setTimeout(() => {
        navigate('/login')
      }, 1500)
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error)

      setError(
        error.response?.data?.message ||
        'Não foi possível criar a conta.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <RegisterCard>
        <Logo to="/">
          <Headphones size={30} />
          HelpDesk
        </Logo>

        <Title>Crie sua conta</Title>

        <Description>
          Cadastre-se para começar a gerenciar seus chamados.
        </Description>

        <Form onSubmit={handleRegister}>
          <InputGroup>
            <Label htmlFor="name">Nome</Label>

            <InputContainer>
              <User size={20} />

              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </InputContainer>
          </InputGroup>

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

          {success && (
            <SuccessMessage>
              {success}
            </SuccessMessage>
          )}

          <RegisterButton
            type="submit"
            disabled={loading}
          >
            {loading ? 'Criando conta...' : 'Criar conta'}
          </RegisterButton>
        </Form>

        <LoginText>
          Já possui uma conta?{' '}
          <Link to="/login">
            Entrar
          </Link>
        </LoginText>
      </RegisterCard>
    </Container>
  )
}

export default Register