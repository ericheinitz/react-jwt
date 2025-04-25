import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <p className="text-xl ml-4">Cargando...</p>
    </div>
  )
  if (!user) return <Navigate to="/" />

  return children
}
