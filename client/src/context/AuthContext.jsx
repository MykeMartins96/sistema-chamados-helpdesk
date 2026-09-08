import { createContext, useContext, useState } from 'react'
import api from '../services/api'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('@HelpDesk:user')

    return savedUser
      ? JSON.parse(savedUser)
      : null
  })

  const [token, setToken] = useState(() => {
    return localStorage.getItem('@HelpDesk:token')
  })

  async function login(email, password) {
    const response = await api.post('/auth/login', {
      email,
      password
    })

    const {
      token,
      user
    } = response.data

    localStorage.setItem('@HelpDesk:token', token)
    localStorage.setItem(
      '@HelpDesk:user',
      JSON.stringify(user)
    )

    setToken(token)
    setUser(user)

    return response.data
  }

  function logout() {
    localStorage.removeItem('@HelpDesk:token')
    localStorage.removeItem('@HelpDesk:user')

    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext)
}