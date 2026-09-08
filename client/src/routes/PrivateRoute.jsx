import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

function PrivateRoute({ children }) {
  const { token } = useAuthContext()

  if (!token) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default PrivateRoute